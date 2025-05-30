import {useContext} from 'react'
import UserContext from '../Context/UserContext.js'
function Profile() {
   
    const {user} = useContext(UserContext);
    if (!user) return <div className="bg-red-600 p-5">please login</div>
  return (
    <div className="bg-green-600 p-5">
      Welcome {user.userName} !
    </div>
  )
}

export default Profile
