import React from "react";

const Robot = ({ data }) => {
  const { email, username, uid, avatar } = data;
  return (
    <div className="carta">
      <div>
        <img src={avatar} alt="" width={100} height={100} />
      </div>
      <div>
        <h2>{username}</h2>
        <p>{uid}</p>
        <small>{email}</small>
      </div>
    </div>
  );
};

export default Robot;
