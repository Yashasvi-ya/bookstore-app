import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    // console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill all fields");
    }
    try {
      setErrorMessage(null);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) return setErrorMessage(data.message);
      if (res.ok) {
        navigate("/signin");
      }
    } catch (error) {
      setErrorMessage(error.message);
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
      <div className="h-full w-1/2 flex flex-col justify-center items-center gap-3">
        <h1 className="text-4xl font-bold">Sign Up here!</h1>
        <div className="h-1/2 w-1/2 ">
          <form
            className="flex flex-col justify-center items-center gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="username"
              id="username"
              className="border-2 border-sasquatch rounded-lg p-3 w-full"
              onChange={handleChange}
            />
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
            <button
              type="submit"
              className="p-3 w-full font-mono font-bold border-[#EAB543] border rounded-lg  hover:bg-[#EAB543]"
            >
              Sign Up
            </button>
          </form>
          {errorMessage && (
            <h2 className="mt-5" color="failure">
              {errorMessage}
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}
