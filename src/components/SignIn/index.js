import { useState } from "react";
import Cookies from 'js-cookie'
import SigninForm from "./form";
import styles from './Signin.module.css'
import { Navigate } from "react-router-dom";

const SignIn = () => {
    const Token1 = Cookies.get('token')
    const [errs, setErrs] = useState('')
    // Cookies.remove('token')
   
    if (Token1 !== undefined) {
        return <Navigate to='/'  />
    }
    return ( 
        <div className={styles.wrapper}>
            <div>
                <div style={  errs ? {visibility:'visible' } : {visibility:'hidden'} }  className={styles.error}>  {errs}  </div>
                <div className={styles.wrap}>
                        <div className={styles.name}> <h3>A1 PATHSHALA</h3></div>
                        <SigninForm {...({errs,setErrs})} />
                </div>
            </div>
        </div>
     );
}
 
export default SignIn;