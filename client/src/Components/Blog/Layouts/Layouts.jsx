import React from 'react';
import { Outlet } from 'react-router-dom';

import '../../../newAsset/assets/vendor/bootstrap/css/bootstrap.css';
import '../../../newAsset/assets/vendor/swiper/swiper-bundle.min.css';
import '../../../newAsset/assets/vendor/glightbox/css/glightbox.css';
// import '../../../newAsset/assets/vendor/aos/'
import '../../../newAsset/assets/css/main.css';
import '../../../newAsset/assets/css/variables.css';
import '../../../newAsset/assets/js/main';

function Layouts({ children }) {
  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            {/* Uncomment the line below if you also wish to use an image logo */}
            {/* <img src="newAsset/assets/img/logo.png" alt=""> */}
            <h1>ZenBlog</h1>
          </a>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="">Single Post</a>
              </li>
              <li className="dropdown">
                <a href="">
                  <span>Categories</span> <i className="bi bi-chevron-down dropdown-indicator" />
                </a>
                <ul>
                  <li>
                    <a href="">Search Result</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator" />
                    </a>
                    <ul>
                      <li>
                        <a href="#">Deep Drop Down 1</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 4</a>
                      </li>
                      <li>
                        <a href="#">Deep Drop Down 5</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Drop Down 2</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 3</a>
                  </li>
                  <li>
                    <a href="#">Drop Down 4</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
          {/* .navbar */}
          <div className="position-relative">
            <a href="#" className="mx-2">
              <span className="bi-facebook" />
            </a>
            <a href="#" className="mx-2">
              <span className="bi-twitter" />
            </a>
            <a href="#" className="mx-2">
              <span className="bi-instagram" />
            </a>
            <a href="#" className="mx-2 js-search-open">
              <span className="bi-search" />
            </a>
            <i className="bi bi-list mobile-nav-toggle" />
            {/* ======= Search Form ======= */}
            <div className="search-form-wrap js-search-form-wrap">
              <form action="" className="search-form">
                <span className="icon bi-search" />
                <input type="text" placeholder="Search" className="form-control" />
                <button className="btn js-search-close">
                  <span className="bi-x" />
                </button>
              </form>
            </div>
            {/* End Search Form */}
          </div>
        </div>
      </header>
      {/* End Header */}

      {children}
      <Outlet />
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-4">
                <h3 className="footer-heading">About ZenBlog</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab, perspiciatis beatae autem deleniti
                  voluptate nulla a dolores, exercitationem eveniet libero laudantium recusandae officiis qui aliquid
                  blanditiis omnis quae. Explicabo?
                </p>
                <p>
                  <a href="" className="footer-link-more">
                    Learn More
                  </a>
                </p>
              </div>
              <div className="col-6 col-lg-2">
                <h3 className="footer-heading">Navigation</h3>
                <ul className="footer-links list-unstyled">
                  <li>
                    <a href="/">
                      <i className="bi bi-chevron-right" /> Home
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="bi bi-chevron-right" /> Blog
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="bi bi-chevron-right" /> Categories
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="bi bi-chevron-right" /> Single Post
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="bi bi-chevron-right" /> About us
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="bi bi-chevron-right" /> Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-lg-2">
                <h3 className="footer-heading">Categories</h3>
                <ul className="footer-links list-unstyled">
                  <li>
                    <a href="">
                      <i className="bi bi-chevron-right" /> Business
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="bi bi-chevron-right" /> Culture
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="bi bi-chevron-right" /> Sport
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="bi bi-chevron-right" /> Food
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="bi bi-chevron-right" /> Politics
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="bi bi-chevron-right" /> Celebrity
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="bi bi-chevron-right" /> Startups
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="bi bi-chevron-right" /> Travel
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h3 className="footer-heading">Recent Posts</h3>
                <ul className="footer-links footer-blog-entry list-unstyled">
                  <li>
                    <a href="" className="d-flex align-items-center">
                      <img src="newAsset/assets/img/post-sq-1.jpg" alt="" className="img-fluid me-3" />
                      <div>
                        <div className="post-meta d-block">
                          <span className="date">Culture</span> <span className="mx-1">•</span> <span>Jul 5th '22</span>
                        </div>
                        <span>5 Great Startup Tips for Female Founders</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="" className="d-flex align-items-center">
                      <img src="newAsset/assets/img/post-sq-2.jpg" alt="" className="img-fluid me-3" />
                      <div>
                        <div className="post-meta d-block">
                          <span className="date">Culture</span> <span className="mx-1">•</span> <span>Jul 5th '22</span>
                        </div>
                        <span>What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="" className="d-flex align-items-center">
                      <img src="newAsset/assets/img/post-sq-3.jpg" alt="" className="img-fluid me-3" />
                      <div>
                        <div className="post-meta d-block">
                          <span className="date">Culture</span> <span className="mx-1">•</span> <span>Jul 5th '22</span>
                        </div>
                        <span>Life Insurance And Pregnancy: A Working Mom’s Guide</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="" className="d-flex align-items-center">
                      <img src="newAsset/assets/img/post-sq-4.jpg" alt="" className="img-fluid me-3" />
                      <div>
                        <div className="post-meta d-block">
                          <span className="date">Culture</span> <span className="mx-1">•</span> <span>Jul 5th '22</span>
                        </div>
                        <span>How to Avoid Distraction and Stay Focused During Video Calls?</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <div className="copyright">
                  © Copyright{' '}
                  <strong>
                    <span>ZenBlog</span>
                  </strong>
                  . All Rights Reserved
                </div>
                <div className="credits">
                  Designed by{' '}
                  <a href="https://oviasuyiosagioduwa.vercel.app/" target="_blank">
                    Osagioduwa
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="social-links mb-3 mb-lg-0 text-center text-md-end">
                  <a href="#" className="twitter">
                    <i className="bi bi-twitter" />
                  </a>
                  <a href="#" className="facebook">
                    <i className="bi bi-facebook" />
                  </a>
                  <a href="#" className="instagram">
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="#" className="google-plus">
                    <i className="bi bi-skype" />
                  </a>
                  <a href="#" className="linkedin">
                    <i className="bi bi-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layouts;
