
import React, { useState } from 'react';
import Axios from "axios";

const SignUpForm =()=>{
const [lastName,setlastName]=useState("")
const [firstName,setfirstName]=useState("")
const [email,setemail]=useState("")
const [phone,setphone]=useState("")
const [password,setpassword]=useState("")
async function SignUp(){
    Axios
      .post("http://192.168.137.218:3000/users/register", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        password: password
        
      })
      .then((response) => {
        console.log(response);
      });

}



    return(
        <section className="sign_in_area bg_color sec_pad">
            <div className="container">
                <div className="sign_info">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="sign_info_content">
                                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">Allready have an account?</h3>
                                <h2 className="f_p f_400 f_size_30 mb-30">Login now and<br/> starting Learning our <br/><span className="f_700">amazing</span> Courses</h2>
                                <ul className="list-unstyled mb-0">
                                    
                                </ul>
                                <button type="submit" className="btn_three sign_btn_transparent">Sign In</button>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h2>
                                <form action="#" className="login-form sign-in-form">
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">First Name</label>
                                        <input type="text" onChange={(e)=>setfirstName(e.target.value)} placeholder="first Name"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Last Name</label>
                                        <input type="text" onChange={(e)=>setlastName(e.target.value)} placeholder="last Name"/>
                                    </div>
                                    
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email Address</label>
                                        <input type="text" onChange={(e)=>setemail(e.target.value)} placeholder="saasland@gmail.com"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Phone</label>
                                        <input type="text" onChange={(e)=>setphone(e.target.value)} placeholder="Name"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Password</label>
                                        <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="******"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400"> Confirm Password</label>
                                        <input type="password" placeholder="******"/>
                                    </div>
                                    <div className="extra mb_20">
                                        <div className="checkbox remember">
                                            <label>
                                                <input type="checkbox"/> I agree to terms and conditions of this website
                                            </label>
                                        </div>
                                        
                                        <div className="forgotten-password">
                                            <a href="/#">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="submit" onClick={SignUp}  className="btn_three">Sign Up</button>
                                        <div className="social_text d-flex ">
                                            <div className="lead-text">Or Sign up Using</div>
                                            <ul className="list-unstyled social_tag mb-0">
                                                <li><a href="/#"><i className="ti-facebook"></i></a></li>
                                                <li><a href="/#"><i className="ti-twitter-alt"></i></a></li>
                                                <li><a href="/#"><i className="ti-google"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignUpForm;