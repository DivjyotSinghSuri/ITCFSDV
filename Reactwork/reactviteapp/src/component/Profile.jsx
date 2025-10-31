import React from 'react'
import './profile.css'

function Profile({ data }) {
  const { pic, name, branch, section, college } = data

  return (
    <div className="profile-container">
      <h3>This is my Profile Page</h3>
      <img src={pic} height="150" width="150" alt="Profile" />
      <h2>Name: {name}</h2>
      <h2>Branch: {branch}</h2>
      <h2>Section: {section}</h2>
      <h2>College: {college}</h2>
    </div>
  )
}

export default Profile
