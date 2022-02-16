import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"

function App() {
  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <About image={blogData.image} aboutText={blogData.about}/>
      <ArticleList />
    </div>
  );
}

export default App;
