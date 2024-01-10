const { createSlice } = require('@reduxjs/toolkit');

const postSlice = createSlice({
  name: 'Post',
  initialState: {
    posts: [],
  },
  reducers: {
    getAllPosts: (state, action) => {
      state.posts = action.payload.map((post) => {
        return {
          id: post._id,
          title: post.Title,
          description: post.Description,
          author: post.Author,
          category: post.Category,
        };
      });
    },

    addPosts: (state, action) => {
      state.posts.push(action.payload);
    },
    updatePost: (state, action) => {
      const index = state.posts.findIndex((x) => x.id === action.payload.id);

      state.posts[index] = {
        id: action.payload.id,
        Title: action.payload.title,
        Category: action.payload.category,
        Author: action.payload.author,
        Description: action.payload.description,
      };
    },

    deletePost: (state, action) => {
      const id = action.payload.id;
      state.posts = state.posts.filter((post) => post.id !== id);
    },
  },
});

export const { getAllPosts, addPosts, updatePost, deletePost } = postSlice.actions;

export default postSlice;
