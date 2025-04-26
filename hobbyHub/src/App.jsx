import { useState, useEffect, use } from 'react'
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../client';
import './App.css'

const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const {data} = await supabase.from('posts')
      .select().order('created_at', { ascending: false });
      setPosts(data);
    }
    fetchPosts();
  }, []);



  return(
    

    <div className="App">
      <h1 className="title">FictionHub</h1>
      {posts.length === 0 ? (
        <p>No Posts Yet</p>

      ) : (
        <div className="postGrid">
          {posts.map((post) => {
            return(
              <Link to={`/detail/${post.id}`}>
                <div className="postCard"
                      key={post.id}
                >
                  <h2 className="cardTitle">{post.title}</h2>
                  <img src={post.img} alt="Post Image" />
                  <h2 className="cardLikes">👍{post.like}</h2>
                  <h2 className="cardDislike">👎{post.dislike}</h2>
                </div>
              </Link>
            )
              
             
          })}
        </div>
      )}
    </div>
  )
}

export default App
