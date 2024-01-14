import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPosts } from 'src/Rdux/PostSlice';

function AddBlog() {
  const [Title, setTitle] = useState('');
  const [Author, setAuthor] = useState('');
  const [Category, setCategory] = useState('');
  const [Description, setDescription] = useState('');
  const [file, setFile] = useState('');

  const dispatch = useDispatch();
  const datas = { Title, Category, Author, Description };
  const navigate = useNavigate();

  const addPost = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('Title', Title);
    formData.append('Author', Author);
    formData.append('Category', Category);
    formData.append('Description', Description);
    formData.append('file', file);
    axios
      .post('http://localhost:7000/post', formData, {
        headers: { 'Content-Type': 'multipart/formdata' },
      })
      .then((res) => {
        // dispatch(addPosts(res.data.success));
        console.log(res.data);
      })
      .catch((error) => {
        // Handle error
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error('Response error:', error.response.status, error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Request error:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error:', error.message);
        }
      });
    navigate('/admin/view_posts');
  };
  return (
    <div>
      <form onSubmit={addPost} encType="multipart/formdata">
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Title of Post"
              aria-label="Title of Post"
            />
          </div>
          <div className="col">
            <input
              type="text"
              value={Author}
              onChange={(e) => setAuthor(e.target.value)}
              className="form-control"
              placeholder="Category"
              aria-label="Category"
            />
          </div>
        </div>
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-control"
              placeholder="Category"
              aria-label="Category"
            />
          </div>
          <div className="col">
            <input
              type="file"
              onChange={(e) => setFile(e.target.files)}
              className="form-control"
              placeholder="Category"
              aria-label="Category"
              name="file"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Description
            </label>
            <textarea
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
        <button className="btn btn-primary">Add Post</button>
      </form>
    </div>
  );
}

export default AddBlog;
