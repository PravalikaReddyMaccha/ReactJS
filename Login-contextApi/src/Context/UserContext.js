import {createContext} from 'react';
import {useState} from 'react';
// import UserContext from './UserContext';

const UserContext = createContext();

export default UserContext;

// function UserContextProvider({children}){

//     const [user,setUser] = useState(null);
//     return (
//     <UserContext.Provider value = {{user,setUser}}> 
//       {children}
//     </UserContext.Provider>
//    )
    
// }

// export default UserContextProvider;
