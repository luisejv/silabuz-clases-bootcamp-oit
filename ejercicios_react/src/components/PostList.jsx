import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div className="container bg-light">
      {posts.map((post, index) => {
        return <Post key={index} title={post.title} body={post.body}></Post>;
      })}
    </div>
  );
};

export default PostList;
