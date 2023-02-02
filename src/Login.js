import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import BackgroundCommon from "./BackgroundCommon";

const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate();

    useEffect(() => {
        // sessionStorage.clear();
    }, []);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation

            fetch("http://localhost:5000/users/" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                //console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.pwd === password) {
                        console.log(resp);
                        toast.success('Success');
                        sessionStorage.setItem('username', username);
                        usenavigate('/')
                    } else {
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }

    const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            let inputobj = {
                "username": username,
                "password": password
            };
            fetch("https://localhost:44308/User/Authenticate", {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(inputobj)
            }).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Login failed, invalid credentials');
                } else {
                    toast.success('Success');
                    sessionStorage.setItem('username', username);
                    sessionStorage.setItem('jwttoken', resp.jwtToken);
                    usenavigate('/')
                }
                // if (Object.keys(resp).length === 0) {
                //     toast.error('Please Enter valid username');
                // } else {
                //     if (resp.password === password) {
                //         toast.success('Success');
                //         sessionStorage.setItem('username',username);
                //         usenavigate('/')
                //     }else{
                //         toast.error('Please Enter valid credentials');
                //     }
                // }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }
    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
    return (
        <div className="container-login">

            <BackgroundCommon></BackgroundCommon>
            {/* <div className="container-background">
                <img style={{position:"absolute",zIndex:"10", marginLeft:"-200px", marginTop:"110px"}} src="man.png"></img>
            </div> */}

            <div className="login-form">
                <h2 style={{}}>User Log in</h2>
                <span style={{marginBottom:"40px", display:"block"}}>Log in to your YourParkingSpace account.</span>
                <button className="google" style={{marginBottom:"10px"}} type="submit"> <img style={{width:"30px", position:"absolute", left:"20px" ,marginRight:"30px"}} src='Google_Logo.png'/> Login with Google</button>
                <button className="google" style={{marginTop:"0px"}} type="submit"> <img style={{width:"30px", position:"absolute", left:"20px" ,marginRight:"30px"}} src='facebook.png'/> Login with Facebook</button>
                <br />
                <div className="dash-or"><span>Or</span></div>
                <form onSubmit={ProceedLogin}>
                    <input placeholder="User Name" style={{ marginTop: "30px" }} value={username} onChange={e => usernameupdate(e.target.value)} ></input>
                    <input placeholder="Password" type="password" value={password} onChange={e => passwordupdate(e.target.value)} ></input>
                    <button style={{color:"#fff"}} type="submit">Log In</button>

                    <Link to={'/Forgotten-pwd'}>Forgotten your password?</Link> 
                    
                    <br/>
                    <div className="anyaccount" ><span>Don’t have any account?</span></div>
                    <Link  to={'/register'}> <button className="btn-signup"> <FontAwesomeIcon icon={faUser} style={{marginRight:"10px"}}/>Sign Up for free</button></Link>
                    


                </form>

            </div>


        </div>

    );
}

export default Login;