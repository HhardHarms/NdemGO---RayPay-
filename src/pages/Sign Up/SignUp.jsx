import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import TextField from "../../components/TextField";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState("false");

  useEffect(() => {
    if (
      fullName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  }, [fullName, email, password, confirmPassword]);

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("signing up with:", fullName);
  };
  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col gap-5 w-[90%] h-[97%] p-[15px] mt-2 rounded-md max-w-md">
        <form className=" h-[90%]" onSubmit={handleSignUp}>
          <div className="mb-4">
            <TextField
              label="Full Name"
              type="text"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Email"
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Phone Number"
              type="tel"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Password"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <TextField
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button
            value={"Sign Up"}
            size="fullwidth"
            variant="contained"
            isDisabled={isBtnDisabled}
          />
        </form>
        <div className="h-[6%] flex gap-2 justify-center items-center">
          <p className="text-blue-600 font-[600]">Already have an account?</p>
          <h3 className="font-[600] underline cursor-pointer text-white">
            <Link to="/auth/">Sign In</Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
