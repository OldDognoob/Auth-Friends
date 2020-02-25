import React, {useState} from "react";
import axiosWithAuth from '../axiosWithAuth';
import "../App.css";

// const FriendForm = props => {
//   console.log("Login", props);
//   const [friend, setFriend] = useState({
//     id: Date.now(),
//     name: "",
//     age: "",
//     email: ""
//   });

//   const handleChange = event => {
//     setFriend({ ...friend, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     axiosWithAuth()
//       .post("/friends", friend)
//       .then(response => {
//         console.log("new friend", response);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//     setFriend({
//       name: "",
//       age: "",
//       email: ""
//     });
//   };
//   return (
//     <div className="friend-form">
//       <form className="add" onSubmit={handleSubmit}>
//         <input
//           className="name"
//           name="name"
//           type="text"
//           placeholder="Friend's name"
//           value={friend.name}
//           onChange={handleChange}
//         />
//         <input
//           className="age"
//           name="age"
//           type="number"
//           placeholder="Friend's age"
//           value={friend.age}
//           onChange={handleChange}
//         />
//         <input
//           className="email"
//           name="email"
//           type="text"
//           placeholder="Friend's Email"
//           value={friend.email}
//           onChange={handleChange}
//         />
//         <button type="submit" className="add-friend">
//           Add a Friend
//         </button>
//       </form>
//     </div>
//   );
// };
// export default FriendForm;

const FriendForm = () => {
  const [ friend, setFriend ] = useState ({
      id: Date.now(),
      name: "",
      age: "",
      email: "",
  })

  const handleChange = event => {
      setFriend({...friend, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
      event.preventDefault();
      
      axiosWithAuth()
          .post("/friends", friend)
          .then(res => {
              console.log('new friend', res)
          })
          .catch(err => {
              console.log(err);
          })
          setFriend({
              name: "",
              age: "",
              email: ""
          })
  }


  return (
      <div className="friend-form" >
         <form className="add" onSubmit={handleSubmit}>
          <input 
              className="name"
              placeholder="Friend's Name"
              type="text"
              name="name"
              value={friend.name}
              onChange={handleChange}
          /> 
          <input 
              className="age"
              placeholder="Friend's Age"
              type="number"
              name="age"
              value={friend.age}
              onChange={handleChange}
          /> 
          <input 
              className="email"
              placeholder="Friends Email"
              type="text"
              name="email"
              value={friend.email}
              onChange={handleChange}
          /> 
          <button type="submit" className="add-friend" >Add Friend</button>
          </form>
      </div>
  )
}

export default FriendForm;