import React from "react";

const Post = ({ title, body }) => {
  return (
    <>
      <div className="row">
        <h3>{title}</h3>
      </div>
      <div className="row">
        <p>{body}</p>
      </div>
    </>
  );
};

export default Post;
