import { useState } from "react";
import "./App.css";
import FormPost from "./components/FormPost";
import PostList from "./components/PostList";

function Ejercicio1() {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      <FormPost setPosts={setPosts} posts={posts}></FormPost>
      <PostList posts={posts}></PostList>
    </div>
  );
}

export default Ejercicio1;
