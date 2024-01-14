import React, { useEffect } from 'react';
import '../../../assets/js/scripts';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from 'src/Rdux/PostSlice';
import { NavLink } from 'react-router-dom';

function ViewBlog() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const fetchAllPosts = async () => {
    try {
      const response = await axios.get('http://localhost:7000/post').then((res) => {
        console.log(res.data);
        dispatch(getAllPosts(res.data));
      });
    } catch (error) {
      console.log(error);
    }
  };
  const deletePost = (id) => {
    axios
      .delete('http://localhost:7000/post/' + id)
      .then((res) => {
        dispatch(deletePost({ id }));
      })
      .catch((err) => console.log(err));
  };
  const getTwentyWords = (text) => {
    const wrds = text.split(' ');
    return wrds.slice(0, 20).join(' ');
  };
  useEffect(() => {
    fetchAllPosts();
  }, []);
  return (
    <div class="table-responsive">
      <table class="table caption-top">
        <caption>All Posts</caption>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Image</th>
            <th scope="col">edit</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <>
                <tr>
                  <td>{post.title}</td>
                  <td>{post.author}</td>
                  <td>{post.category}</td>
                  <td>{getTwentyWords(post.description)}...</td>
                  <td>
                    <img src={`http://localhost:3000/my-uploads/${post.img}`} width={200} alt="img" />
                  </td>
                  <td>
                    <NavLink className="btn btn-info" to={`/admin/edit_post/${post.id}`}>
                      Edit
                    </NavLink>
                  </td>
                  <td>
                    {' '}
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewBlog;
