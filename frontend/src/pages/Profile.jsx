import React, { lazy, Suspense } from "react";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutSuccess } from "../redux/user/userSlice";
const ProfileCard = lazy(() => import ("../components/ProfileCard"))



export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();


    const handleSignOut = async () => {
        try {
            const res = await fetch('/api/user/signout',{
                method: 'POST',
            })
            const data = res.json();
            if(res.ok){
                dispatch((signOutSuccess()));
                navigate('/signin')
            }
            else console.log(data.message)
        } catch (error) {
            console.log(error.message)
        }
    }

  return (
    <div>
      {currentUser && (
        <>
          <div className="h-screen w-full flex flex-col justify-center items-center">
            <div className="h-1/2 w-1/4 flex flex-col justify-center items-center">
              <div className=" h-full w-full rounded-lg p-3 flex flex-col justify-center items-center">
                <div className="w-1/2 h-1/2 flex justify-center items-center">
                  <CgProfile className="h-full w-1/2" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {currentUser.username}
                </h1>
                <h1>{currentUser.email}</h1>
              </div>
              <button className="my-3 text-sasquatch text-xl font-bold outline outline-2 p-3 rounded-md hover:bg-sasquatch hover:text-white" onClick={handleSignOut}>Sign Out</button>
            </div>

            <div className="flex flex-col justify-center items-center">

            <h1 className="text-4xl text-peach font-bold font-mono underline">Your Favorites</h1>
            {
              currentUser.favorites.map((book)=>{
                return <>
                <Suspense fallback={<p>Loading</p>}>
                <div key={book.bookId}><ProfileCard book ={book}/></div>
                </Suspense>
                </>
              })
            }
            </div>

          </div>
        </>
      )}
    </div>
  );
}
