import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { updateFailure, updateStart, updateSuccess } from "../redux/user/userSlice";

export default function Card(props) {
  const { bookkey, title, author, cover } = props;
  const imgSrc = `https://covers.openlibrary.org/b/id/${cover}-L.jpg`;
  const [favorite, setFavorite] = useState(false);
  const { currentUser } = useSelector((state) => state.user)
  const dispatch = useDispatch();

  const handleChange = async () => {
    try {
      dispatch(updateStart())
      const response = await fetch('/api/user/favorite',{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify({
          userId : currentUser._id,
          bookId: bookkey,
          title : title,
          author : author,
          cover : cover
        })
      })
      const data = await response.json();
      if(response.ok){
        dispatch(updateSuccess(data))
      }
    } catch (error) {
      dispatch(updateFailure(error.message))
    }
  };

  useEffect(() => {
    if(currentUser.favorites.findIndex((book)=>book.bookId === bookkey) !== -1){
      setFavorite(true)
    }
    else setFavorite(false)
  }, [currentUser])
  
  return (
      <div className="h-auto w-72 flex flex-col bg-orange-100 rounded-lg">
        <img
          className="object-cover h-full w-full rounded-lg"
          src={imgSrc}
          alt="alt image"
        />
        <div className="w-auto m-3 font-bold text-lg">
          <h2>{title}</h2>
          <h3 className="font-thin">{author}</h3>

          {favorite ? (
            <FaHeart className="text-red-500 w-8 h-8" onClick={handleChange} />
          ) : (
            <FaRegHeart
              className="text-red-500 w-8 h-8"
              onClick={handleChange}
            />
          )}
        </div>
      </div>
  );
}
