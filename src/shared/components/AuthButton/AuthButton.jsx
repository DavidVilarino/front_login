import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../contexts/JwtContext";
import "./AuthButton.scss"


export default function AuthButton () {
    const {jwt, setJwt} = useContext(JwtContext);
    let navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const signOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setJwt(null);
        navigate("/");
    }

    return jwt ? (
        <p className="welcome-p">
            Welcome! {user.name}
            <button className="out-button"
                onClick={signOut}
            >
                Sign out
            </button>
        </p>
    ) : (
        <p className="notlog-p">You are not logged in.</p>
    );
   
    }
