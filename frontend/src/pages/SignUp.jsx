import React from "react";

export default function SignUp() {
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
          <form className="flex flex-col justify-center items-center gap-3">
            <input
              type="text"
              placeholder="username"
              className="border-2 border-sasquatch rounded-lg p-3 w-full"
            />
            <input
              type="text"
              placeholder="email"
              className="border-2 border-sasquatch rounded-lg p-3 w-full"
            />
            <input
              type="password"
              placeholder="password"
              className="border-2 border-sasquatch rounded-lg p-3 w-full"
            />
            <button
              type="submit"
              className="p-3 w-full font-mono font-bold border-[#EAB543] border rounded-lg  hover:bg-[#EAB543]"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
