import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {

  const {currentUser} = useSelector(state => state.user)
  return (
    <div>
      {
        currentUser && (
          <div>
            <h1>{currentUser._id}</h1>
            <h1>{currentUser.username}</h1>
            <h1>{currentUser.email}</h1>
          </div>
        )
      }
    </div>
  )
}
