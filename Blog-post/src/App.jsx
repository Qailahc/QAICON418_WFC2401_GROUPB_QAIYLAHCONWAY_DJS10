import React, { useEffect, useState } from 'react';

function App() {
  // Define state for storing blog posts and error
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  // useEffect hook to fetch data when component mounts
  useEffect(() => {
    // Fetch data from API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data); // Update state with fetched data
      })
      .catch(error => {
        setError(error.toString()); // Save error to state
      });
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      {error && <div>Error: {error}</div>} {/* Display error if any */}
      {posts.map(post => (
        <div key={post.id} className="post">
          <h2>{post.title}</h2> {/* Render post title */}
          <p>{post.body}</p> {/* Render post body */}
        </div>
      ))}
    </div>
  );
}

export default App;