import React from "react";
import User from "./User";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user, index) => {
        const {
          picture: { large },
          name: { first, last },
          dob: { age },
        } = user;
        return (
          <User
            key={index}
            image={large}
            name={first + " " + last}
            age={age}
          ></User>
        );
      })}
    </div>
  );
};

export default UserList;
