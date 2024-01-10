import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost } from 'src/Rdux/PostSlice';

function EditPost() {
  const { id } = useParams();

  const post_id = useSelector((state) => state.posts.posts);

  const p_id = post_id.find((p) => p.id == id);

  const [Title, setTitle] = useState(p_id.title);
  const [Author, setAuthor] = useState(p_id.author);
  const [Category, setCategory] = useState(p_id.category);
  const [Description, setDescription] = useState(p_id.description);

  const dispatch = useDispatch();
  const datas = { Title, Category, Author, Description };
  const navigate = useNavigate();
  const updateHandler = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:7000/post/' + id, datas)
      .then((res) => {
        dispatch(updatePost({ id, Title, Category, Author, Description }));
        console.log(res);
      })
      .catch((err) => console.log(err));
    navigate('/admin/view_posts');
  };

  return (
    <div>
      <form onSubmit={updateHandler}>
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
        <button className="btn btn-primary">Update Post</button>
      </form>
    </div>
  );
}

export default EditPost;
