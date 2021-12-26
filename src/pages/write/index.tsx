import axios from "axios";
import { NextPage } from "next";
import React, { useState } from "react";

const write = (title: string, post: string) => {
  axios.post('http://localhost:1337/api/posts/',{
    "data":  {
      "author": "승연",
      "title": title,
      "contents": post,
    }
  }).then((res) => {
    if(res.status === 200) {
      location.href = '/posts'
    }
  })
}


const WritePage:NextPage = () => {
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');

  const handleTextAreaChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.target.value);
  }

  const handleTitleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    write(title, post);
  }

  return (
    <div>
      <h1>글 작성하기</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleTitleChange} value={title} />
        <textarea onChange={handleTextAreaChange} value={post} />
        <button type="submit">발행하기</button>
      </form>
    </div>
  )
}

export default WritePage;

