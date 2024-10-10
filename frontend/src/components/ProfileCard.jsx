import React from "react";
import { Spinner } from "flowbite-react";

export default function ProfileCard(props) {
  const { book } = props;
  const imgSrc = `https://covers.openlibrary.org/b/id/${book.cover}-L.jpg`;
  return (
    // <div className="w-full h-16 flex flex-row justify-center items-center">
    //   <div className="w-1/4 h-full overflow-hidden">
    //     <img
    //       src={imgSrc}
    //       alt="alt image"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>
    //   <div className="w-3/4">
    //     <h1>{book.title}</h1>
    //     <p>{book.author}</p>
    //   </div>
    // </div>
      <div className="w-screen flex flex-col justify-center items-center">
        <div className="w-1/4 h-32 flex md:flex-row justify-between items-center m-5 sm:flex-col shadow-xl rounded-lg">
          <div className="w-1/4 h-full flex items-center justify-center">
           <img
              src={imgSrc}
              alt="alt image"
              className="max-w-full max-h-full object-contain rounded-lg"
              />
          </div>
          <div className="w-3/4 p-3">
            <h1 className="text-lg font-bold font-mono">{book.title}</h1>
            <p className="text-md">{book.author}</p>
          </div>
        </div>
      </div>
  );
}
