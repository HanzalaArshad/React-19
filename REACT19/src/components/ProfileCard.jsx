import React from 'react'

const ProfileCard = (props) => {
  return (

    <div>
    <h2>Name:{props.name}</h2>
    <h2>age:{props.age}</h2>
    <h2>{props.greetings}</h2>
    <h2>{props.children}</h2>


    </div>


  )
}

export default ProfileCard