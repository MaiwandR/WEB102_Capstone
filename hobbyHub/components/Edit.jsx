import React from "react";
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';


const Edit = () => {
    const { id } = useParams();
    const [post, setPost] = useState({
        title: '',
        content: '',
        img: '',
        author: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchPost() {
            const { data } = await supabase.from('posts').select().eq('id', id).single();
            setPost(data);
        }
        fetchPost();
    }, [id]);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await supabase.from('posts').update({
            title: post.title,
            content: post.content,
            author: post.author,
            img: post.img
          }).eq('id', id);
        navigate(`/detail/${id}`);
    };


    return(
        <div className="edit">
            <h1>Edit Post</h1>
            <form className="createForm">
    <label htmlFor="title">Title:</label>
    <input
        type="text"
        id="title"
        name="title"
        value={post.title}
        onChange={handleChange}
        placeholder="Title"
        required
    />

    <label htmlFor="img">Image URL:</label>
    <input
        type="text"
        id="img"
        name="img"
        value={post.img}
        onChange={handleChange}
        placeholder="Image URL"
        required
    />

    <label htmlFor="author">Author:</label>
    <input
        type="text"
        id="author"
        name="author"
        value={post.author}
        onChange={handleChange}
        placeholder="Author"
        required
    />

    <label htmlFor="content">Content:</label>
    <textarea
        id="content"
        name="content"
        value={post.content}
        onChange={handleChange}
        placeholder="Content"
        required
    ></textarea>

    <button className="btn" onClick={handleSubmit}>Update</button>
</form>

        </div>
    )
}

export default Edit