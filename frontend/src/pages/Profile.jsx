import React from "react";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div>
      {currentUser && (
        <div className="h-screen w-full flex flex-col justify-center items-center">
          <div className="h-1/2 w-1/4 flex flex-col justify-center items-center">
            <div className=" h-full w-full rounded-lg p-3 flex flex-col justify-center items-center shadow-2xl">
              <div className="w-1/2 h-1/2 flex justify-center items-center">
                <CgProfile className="h-full w-1/2"/>
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                {currentUser.username}
              </h1>
              <h1>{currentUser.email}</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
