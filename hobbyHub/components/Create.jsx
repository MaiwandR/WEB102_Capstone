import React from "react";
import { useState, useEffect } from "react";
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] =  useState("");
    const [content, setContent] = useState("");
    const [img, setImg] = useState("");
    const [author, setAuthor] = useState("");
    const navigate = useNavigate();

    const createPost = async (e) => {
        e.preventDefault()
        await supabase.from('posts').insert({ title: title, content: content, img: img, author: author }).select();
        navigate('/');
    }


    return(
        <div className="create">
            <h1 className="pageTitle">Share Your Favorite piece of Fiction!</h1>
            <form className="createForm">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} 
               placeholder="Title" required/>
                
                <label htmlFor="img">Image URL:</label>
                <input type="text" id="img" value={img} onChange={(e) => setImg(e.target.value)} 
                placeholder="Image URL" required/>
                <label htmlFor="author">Author:</label>
                <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} 
                placeholder="Author" required/>
                <label htmlFor="content">Content:</label>
                <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} 
                placeholder="Content" required></textarea>
                <button className="btn" onClick={createPost}>Create</button>
            </form>
        </div>
    )

}

export default Create