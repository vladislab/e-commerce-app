import React from "react";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import "../components/sign-in-and-sign-up.styles.scss";

export default function SignInUpPage() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
}
