import React, { useState, useEffect } from "react";
import "./AddEditPost.css";
import { useNavigate, useParams } from "react-router-dom";

const AddEditPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    author: "",
    date: "",
    tags: "",
    image_url: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); // get id from URL

  // Fetch post data for editing
  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        try {
          const response = await fetch(`http://localhost:3000/posts/${id}`);
          if (response.ok) {
            const data = await response.json();
            setFormData(data);
          } else {
            console.error("Failed to fetch post data");
          }
        } catch (error) {
          console.error("Error fetching post:", error);
        }
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isEdit = Boolean(id);
    const method = isEdit ? "PUT" : "POST";
    const url = isEdit
      ? `http://localhost:3000/posts/${id}`
      : "http://localhost:3000/posts";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowPopup(true);

        setTimeout(() => {
          setShowPopup(false);
          navigate("/posts");
        }, 1500);

        // Reset only on adding new post
        if (!isEdit) {
          setFormData({
            title: "",
            category: "",
            description: "",
            author: "",
            date: "",
            tags: "",
            image_url: "",
          });
        }
      } else {
        console.error("Failed to submit post");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleBack = () => {
    navigate("/posts");
  };

  return (
    <div className="add-edit-post-container">
      <div className="add-post-container">
        <h2 className="add-post-heading">
          {id ? "Edit Post" : "Add New Post"}
        </h2>
        <form className="add-post-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
          </select>
          <textarea
            placeholder="Enter description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
          <input
            type="text"
            placeholder="Enter author name"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Enter tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter image URL"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
          />
          <button type="submit">
            {id ? "Update Post" : "Add Post"}
          </button>
          <button type="button" onClick={handleBack} className="back-button">
            Back
          </button>
        </form>

        {showPopup && (
          <div className="popup-message">
            Successfully {id ? "updated" : "posted"}!
          </div>
        )}
      </div>
    </div>
  );
};

export default AddEditPost;
