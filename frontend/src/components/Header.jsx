import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function Header() {

  const [user, setUser] = useState('')
  return (
    <div className="md:h-20 w-full bg-whitepepper p-5 flex md:flex-row flex-wrap justify-between items-center sm:flex-col sm:h-64 ">
      <Link to={"/"}>
        <h1 className="text-3xl font-bold text-center">Bookstore</h1>
      </Link>
      <div className="flex flex-row justify-center items-center gap-10">
        <ul className="flex flex-row gap-3 text-xl font-mono font-bold ">
          <Link to={"/about"} className="hover:underline">
            <li>About</li>
          </Link>
          <Link to={"/contact"} className="hover:underline">
            <li>Contact Us</li>
          </Link>
        </ul>
        {
          user ? (
            <Link to={"/profile"}>
          <CgProfile className="h-full w-10" />
        </Link>

          ) : (
            <Link to={'/signin'}>
              <button className="p-3 font-mono font-bold border-[#EAB543] border rounded-lg  hover:bg-[#EAB543]">Sign in</button>
            </Link>
          )
        }
      </div>
    </div>
  );
}
