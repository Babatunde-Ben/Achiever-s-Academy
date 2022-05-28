import React from "react";
import "../css/Login.css";
import StudentLogin from "../images/student-login.svg";

const Login = () => {
  const handleGoggleAuth = () => {
    console.log();
    alert("Signed In");
  };
  return (
    <section className="login-section">
      <img src={StudentLogin} alt="" />
      <div>
        <h2 className="title">Student Login</h2>
        <p>Make sure you account is secure</p>
        <button className="sign-in-auth" onClick={handleGoggleAuth}>
          Login with Google
        </button>
      </div>
    </section>
  );
};

export default Login;
