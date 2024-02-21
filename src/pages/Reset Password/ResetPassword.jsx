import React, { useEffect, useState } from "react";
import { MdLockReset } from "react-icons/md";
import Button from "../../components/Button/Button";
import TextField from "../../components/TextField";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState("");

  useEffect(() => {
    if (email === "") {
      setIsBtnDisabled(true);
    } else {
      setIsBtnDisabled(false);
    }
  }, [email]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="h-[50%] w-full flex justify-center items-center bg-slate-50">
        <MdLockReset className="text-[15rem] text-blue-400" />
      </div>
      <div className="h-[50%] bg-slate-50 p-8 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
        <form>
          <div className="mb-4">
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="border outline-[blue] rounded-md py-2 px-3 w-full bg-white"
              type="email"
              id="email"
              name="email"
              required
            /> */}
            <TextField
              label={"Email"}
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Reset Password
          </button> */}
          <Button
            value={"Reset Password"}
            size="fullwidth"
            variant="contained"
            isDisabled={isBtnDisabled}
          />
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
