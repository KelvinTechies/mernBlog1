const { configureStore } = require('@reduxjs/toolkit');
const { default: postSlice } = require('./PostSlice');

const store = configureStore({
  reducer: {
    posts: postSlice.reducer,
  },
});

export default store;
