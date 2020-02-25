import React, { useState, useEffect } from "react";
import axiosWithAuth  from "../axiosWithAuth";

//component
import Friend from "../components/Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  console.log("friends", friends);

  useEffect(() => {
    getFriends();
  }, []);

  const getFriends = () => {
    axiosWithAuth()
      .get("/friends")
      .then(response => {
        console.log(response);
        setFriends(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div className="friends-list">
      {friends.map((friend, id) => {
        return <Friend
          key={id}
          name={friend.name}
          age={friend.age}
          email={friend.email}
        />;
      })}
    </div>
  );
};
export default Friends;
