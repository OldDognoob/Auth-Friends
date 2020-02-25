import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-dom";
import axiosWithAuth from "../axiosWithAuth";
import Loader from "react-loader-spinner";

// const Login = props => {
//   // console.log("Login", props);
//   const [credentials, setCredentials] = useState({
//     username: "",
//     password: ""
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const history = useHistory();
//   // console.log("Cred",credentials);

//   const handleChange = event => {
//     setCredentials({
//       ...credentials,
//       [event.target.name]: event.target.value
//     });
//   };

//   const login = event => {
//     event.preventDefault();
//     setIsLoading(false);
//     axios
//       .post("http:localhost:5000/api/login", credentials)
//       .then(response => {
//         localStorage.setItem("token", response.data.payload);
//         history.push("/friends");
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };
//   return (
//     <div>
//       <form className="login"  onSubmit={login}>
//       <div className="username">Username</div>
//         <input
//           name="username"
//           type="text"
//           onChange={handleChange}
//           value={credentials.username}
//         />
//         <div className="password">Password</div>
//         <input
//           name="password"
//           type="password"
//           onChange={handleChange}
//           value={credentials.password}
//         />
//        <button className="login-button">Log in</button>
//       </form>
//       <div className="loading">
//           {isLoading && (
//             <>
//               <h2>Loading....</h2>
//               <Loader type="Hearts" color="red" height={80} width={80} />
//             </>
//           )}
//         </div>
//     </div>
//   );
// };
// export default Login;

const Login = props => {
    //   console.log("Login", props);
    const [credentials, setCredentials] = useState({
      username: "",
      password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
  
    //   console.log("Cred", credentials);
    const handleChange = e => {
      setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
      });
    };
  
    const login = e => {
      e.preventDefault();
      setIsLoading(true);
      axiosWithAuth()
        .post("/login", credentials)
        .then(res => {
          localStorage.setItem("token", res.data.payload);
          props.history.push("/friends");
        })
        .catch(err => console.log(err));
    };
  
      return (
        <div>
          <form className="login" onSubmit={login}>
            <div className="username">Username</div>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
            />
            <div className="password">Password</div>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
            />
            <button className="login-button">Log in</button>
          </form>
          <div className="loading">
        {isLoading && (
          <>
            <h2>Loading...</h2>
            <Loader type="Hearts" color="red" height={80} width={80} />
          </>
        )}
      </div>
        </div>
      );
    }
  
  
  export default Login;
  
  

