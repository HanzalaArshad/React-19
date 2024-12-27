import React from 'react'
import ProfileCard from './ProfileCard'

const Profile = () => {
  return (
    <div>
    <h1>Profile is there</h1>

    <ProfileCard 

     name="Hanzala Arshad"

     age={21}

     greetings={
      <div>
        Asslam Alikum Hanzala Arshad
      </div>

     }
    
    
    >
      <p>Hobbies: Reading and Cricket</p>
      <button>Contact</button>
    </ProfileCard>

    <ProfileCard 

     name="fardeen pathan"

     age={22}

     greetings={
      <div>
        Asslam Alikum fardeen pathan
      </div>

     }
    
    
    >
      <p>Hobbies: php and laravel</p>
      <button>Contact</button>
    </ProfileCard>


    </div>

  )
}

export default Profile


// function ProfileCard(props){
//   return(
//     <div>
//       <h2>Name:{props.name}</h2>
//       <p>age:{props.age}</p>
//       <p>{props.greetings}</p>
//       <p>{props.children}</p>


//       </div>
//   )
// }