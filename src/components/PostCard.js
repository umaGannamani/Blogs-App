import React from "react";
import "./PostCard.css";

function PostCard({ post, onEdit, onDelete }) {
  return (
    <div className="post-card">
      <img className="post-image" src={post.image_url} alt={post.title} />
      <div className="post-content">
        <h3>{post.title}</h3>
        <p className="description">{post.description}</p>
        <p><strong>Category:</strong> {post.category}</p>
        <p><strong>Date:</strong> {post.date}</p>
        <p><strong>Tags:</strong> {post.tags}</p>
        <div className="card-buttons">
          <button className="edit-btn" onClick={() => onEdit(post.postId)}>Edit</button>
          <button className="delete-btn" onClick={() => onDelete(post.postId)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
