import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { currentUser,  loading, error: errorMessage } = useSelector(state => state.user);
  // console.log(currentUser, loading, errorMessage)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    // console.log(formData)
    console.log(currentUser)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill all fields"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
      else dispatch(signInFailure(data.message))
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="h-screen w-full flex flex-row justify-between items-center">
      <div className="h-full w-1/2 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold font-mono">Bookstore</h1>
        <p className="text-xl font-thin">
          This Bookstore app is designed to search for books and add them to
          your collection.
        </p>
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center gap-5">
        <h1 className="text-4xl font-bold">Sign In here!</h1>
        <div className="w-1/2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center gap-3"
          >
            <input
              type="text"
              placeholder="email"
              id="email"
              className="border-2 border-sasquatch rounded-lg p-3 w-full"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              id="password"
              className="border-2 border-sasquatch rounded-lg p-3 w-full"
              onChange={handleChange}
            />
            {!loading && (
              <button
                type="submit"
                className="p-3 w-full font-mono font-bold border-[#EAB543] border-2 rounded-lg  hover:bg-[#EAB543]"
              >
                Sign In
              </button>
            )}
          </form>
        </div>
        <p>
          New User ?{" "}
          <Link to={"/signup"} className="underline">
            {" "}
            Sign up here
          </Link>
        </p>
      {errorMessage && (
        <h2 className="p-5 text-red-500 bg-red-100 rounded-md" >
          {errorMessage}
        </h2>
      )}
      </div>
    </div>
  );
}
