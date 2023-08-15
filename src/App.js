
import { useEffect, useState } from 'react';
import './App.css';
import {db} from './firebase-config'
import {collection, getDocs , addDoc , updateDoc, deleteDoc , doc} from 'firebase/firestore'

function App() {
  const [newUser, setNewUser] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [users, setUsers] = useState([]);

 const usercollectionRef =  collection(db, 'users')

 const saveUser = async () => {
   await addDoc(usercollectionRef, {name: newUser, age: Number(newAge) })
     setNewAge(0)
     setNewUser("")
  }
  
   useEffect(() => {
  const getUsers = async () => {
   const data =   await getDocs(usercollectionRef)
       setUsers(data.docs.map((doc) => ({...doc.data() , id: doc.id })))
         
   console.log(data)
  }
   
    
  getUsers()
   }, [])

   const updateUser = async (id, age) => {
    const userdoc =   doc(db, 'users', id)
      const ageField = {age: age + 1}
      await updateDoc(userdoc, ageField)
   }

   const DeleteUser = (id) => {
     const userDoc =  doc(db, 'users', id);
       deleteDoc(userDoc)
   }
   
  return (
    <div className="App">
 <div>
  <input onChange={(e) => setNewUser(e.target.value)} value={newUser} placeholder='name' type='text'/>
  <input onChange={(e) => setNewAge(e.target.value)} value={newAge}  placeholder='age' type='number'/>
  <button onClick={saveUser}>Save</button>
 </div>

  {users.map((user) => (
        <div>
          <h2>Name: {user.name} <span> Age: {user.age}</span> <button onClick={() => {updateUser(user.id, user.age)}}>Increase Age</button> <button onClick={() => {DeleteUser(user.id)}}>delete</button> </h2>
           
        </div>
  ))}
    </div>
  );
}

export default App;
