import React from "react";
import blogData from "../data/blog"
import Article from "./Article"

function ArticleList(){
    return (
        <main>
            {
                blogData.posts.map((postObj) => {
                return <Article id ={postObj.id} title={postObj.title} date={postObj.date} preview={postObj.preview}/>
            })}
        </main>
    )
}

export default ArticleList;