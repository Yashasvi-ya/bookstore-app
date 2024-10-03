import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="h-40 w-full bg-whitepepper flex flex-row flex-wrap justify-between items-center p-5">
      <div className="flex">
        <Link to={'/'}>
            <h1 className="text-3xl font-bold">Bookstore</h1>
        </Link>
      </div>
      <div className="flex">
        <ul className="text-lg font-mono font-bold">
        <Link to={"/about"} className="hover:underline">
            <li>About</li>
          </Link>
          <Link to={"/contact"} className="hover:underline">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
