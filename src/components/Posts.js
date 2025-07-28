import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import "./Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("all");
  const [searchTag, setSearchTag] = useState("");

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://blogs-backend-smx4.onrender.com/posts/");
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleEdit = (postId) => {
    window.location.href = `/edit/${postId}`;
  };

  const handleDelete = async (postId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this post?");
    if (confirmDelete) {
      try {
        const response = await fetch(`https://blogs-backend-smx4.onrender.com/posts/${postId}`, {
          method: "DELETE",
        });

        if (response.ok) {
          setPosts((prevPosts) => prevPosts.filter((post) => post.postId !== postId));
          alert("Post deleted successfully!");
        } else {
          alert("Failed to delete the post. Try again.");
        }
      } catch (error) {
        console.error("Error deleting post:", error);
        alert("An error occurred while deleting.");
      }
    }
  };

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = filteredCategory === "all" || post.category === filteredCategory;
    const matchesTag = searchTag === "" || post.tags.toLowerCase().includes(searchTag.toLowerCase());
    return matchesCategory && matchesTag;
  });

  return (
    <div className="bg-posts-container">
      <div className="posts-container">
        <h2>All Blog Posts</h2>

        <div className="filter-bar">
          <select onChange={(e) => setFilteredCategory(e.target.value)} value={filteredCategory}>
            <option value="all">All</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
          </select>
          <input
            type="text"
            placeholder="Search by tags"
            value={searchTag}
            onChange={(e) => setSearchTag(e.target.value)}
          />
        </div>

        {filteredPosts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          <div className="post-list">
            {filteredPosts.map((post) => (
              <div key={post.postId} className="post-card">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="post-image"
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "8px 8px 0 0"
                    }}
                  />
                )}
                <div className="post-content">
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  <p><strong>Category:</strong> {post.category}</p>
                  <p><strong>Date:</strong> {post.date}</p>
                  <p><strong>Tags:</strong> {post.tags}</p>
                  <button className="btn-edit" onClick={() => handleEdit(post.postId)}>Edit</button>
                  <button className="btn-delete" onClick={() => handleDelete(post.postId)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Posts;
