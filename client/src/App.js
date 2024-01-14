import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

// routes
import Router from './routes';
// theme
// import ThemeProvider from './theme';
// components
// import { StyledChart } from './components/chart';
// import ScrollToTop from './components/scroll-to-top';
import store from './Store/store';
import MasterLayout from './Components/Admin/Layouts/MasterLayout';
import AddBlog from './Components/Admin/Screens/AddBlog';
import ViewBlog from './Components/Admin/Screens/ViewBlog';
import EditPost from './Components/Admin/Screens/EditPost';
import Layouts from './Components/Blog/Layouts/Layouts';
import Index from './Components/Blog/Screen/Index';
import Post_Detail from './Components/Blog/Screen/Post_Detail';
import Register from './Components/Admin/Screens/Register';
import Login from './Components/Admin/Screens/Login';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="admin" element={<MasterLayout />}>
            <Route
              path="add_posts"
              element={localStorage.getItem('user') ? <AddBlog /> : <Navigate to="/admin/login" />}
            />
            <Route path="view_posts" element={localStorage.getItem('user') ? <ViewBlog /> : <Login />} />
            <Route path="edit_post/:id" element={localStorage.getItem('user') ? <EditPost /> : <Login />} />
          </Route>
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/login" element={<Login />} />

          <Route path="/" element={<Layouts />}>
            <Route index element={<Index />} />
            <Route path="post_detail/:id" element={<Post_Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
