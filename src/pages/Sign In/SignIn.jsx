import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import TextField from "../../components/TextField";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState("false");

  useEffect(() => {
    if (email === "" || password === "") {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  }, [email, password]);

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("signing in with:", email, password);
  };
  return (
    <div className="h-full flex flex-col justify-evenly items-center">
      <div className=" p-8 rounded-md h-[60%] w-[90%] max-w-md">
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <TextField
              label="Email"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <TextField
              label="Password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            value={"Sign In"}
            size="fullwidth"
            variant="contained"
            isDisabled={isBtnDisabled}
          />

          <p className="mt-4 w-48 text-blue-400 font-[700] underline">
            <Link to="/auth/reset-password">Forgot Password?</Link>
          </p>
        </form>
      </div>
      <div className="h-[10%] w-[100%] flex justify-center items-center gap-3">
        <p className="text-blue-400 font-[700]">Don't have an account?</p>
        <p className="underline font-semibold text-white">
          <Link to="/auth/signup">Sign Up here!!</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
