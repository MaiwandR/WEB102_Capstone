import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

const Detail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    const handleLike = async () => {
        const updatedLike = (post.like || 0) + 1;
        await supabase.from('posts').update({ like: updatedLike }).eq('id', id);
        setPost({ ...post, like: updatedLike });
    };

    const handleDislike = async () => {
        const updatedDislike = (post.dislike || 0) + 1;
        await supabase.from('posts').update({ dislike: updatedDislike }).eq('id', id);
        setPost({ ...post, dislike: updatedDislike });
    };

    useEffect(() => {
        async function fetchPost() {
            const { data } = await supabase.from('posts').select().eq('id', id).single();
            setPost(data);
        }
        fetchPost();
    }, [id]);

    if (!post){
        return <div className="error">Error retreiving Post!</div>
    }

    const handleDelete = async () => {
        await supabase.from('posts').delete().eq('id', id);
        navigate('/');
    };

    return(
        <div className="deatail">
            <div className="postDetail">
                <h1 className="title">{post.title}</h1>
                <img src={post.img} alt="image URL" />
                <h2 className="postContent">Content:</h2>
                <p>{post.content}</p>
                <h2 className="postAuthor">Author: {post.author}</h2>
                <div className="likesDislikes">
                    <button onClick={handleLike}>👍 {post.like || 0}</button>
                    <button onClick={handleDislike}>👎 {post.dislike || 0}</button>
                </div>
                <Link to={`/edit/${post.id}`} className="btn">Edit</Link>
                <button className="deletePost" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Detail