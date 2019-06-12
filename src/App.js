import React, { useState, useEffect } from "react";
import zupage from "zupage";
import "./App.css";

export default function App() {
  const [post, setPost] = useState({ images: [] });
  const [lines, setLines] = useState([]);

  useEffect(() => {
    async function getPost() {
      const post = await zupage.getCurrentPost();
      setLines(post.body.split("\n"));
      setPost(post);
    }
    getPost();
  }, []);

  return post.images.map((image, index) => (
    <div className="item row" key={image.id}>
      <img alt="meme" src={image.url} />
      <h3>{lines[index]}</h3>
    </div>
  ));
}
