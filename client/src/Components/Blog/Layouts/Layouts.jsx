import React from 'react';
import { Outlet } from 'react-router-dom';

import '../../../static/css/bootstrap.min.css';
import '../../../static/css/jquery.mCustomScrollbar.css';
// import '../../../static/css/owl-carousel/owl.carousel.css';
// import '../../../static/css/owl-carousel/owl.theme.css';
// import '../../../static/css/owl-carousel/owl.transitions.css';
// import '../../../static/owl-carousel/owl.carousel.css';
import '../../../static/owl-carousel/owl.theme.css';
import '../../../static/owl-carousel/owl.transitions.css';
import '../../../static/css/RYPP.css';
import '../../../static/css/jquery-ui.css';
import '../../../static/css/animate.min.css';
import '../../../static/css/Pe-icon-7-stroke.css';
import '../../../static/css/flaticon.css';
import '../../../static/css/style.css';
import '../../../static/font-awesome/css/font-awesome.min.css';
import '../../../static/js/jquery.min';
function Layouts({ children }) {
  return (
    <>
      {/* <div className="se-pre-con" /> */}
      <header>
        {/* Mobile Menu Start */}
        <div className="mobile-menu-area navbar-fixed-top hidden-sm hidden-md hidden-lg">
          <nav className="mobile-menu" id="mobile-menu">
            <div className="sidebar-nav">
              <ul className="nav side-menu">
                <li className="sidebar-search">
                  <div className="input-group custom-search-form">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                      <button className="btn mobile-menu-btn" type="button">
                        <i className="fa fa-search" />
                      </button>
                    </span>
                  </div>
                  {/* /input-group */}
                </li>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <ul className="nav nav-second-level">
                    <li>
                      <a href="">
                        Home <span className="fa arrow" />
                      </a>
                      {/* /.nav-third-level */}
                    </li>
                  </ul>
                  {/* /.nav-second-level */}
                </li>
                <li>
                  <a href="">Fashion</a>
                </li>
                <li>
                  <a href="">Education</a>
                </li>
                <li>
                  <a href="">Sports</a>
                </li>
                <li>
                  <a href="">Travel</a>
                </li>
                <li>
                  <a href="">Food</a>
                </li>
                <li>
                  <a href="">Lifestyle</a>
                </li>
                {/* social icon */}
                <li>
                  <div className="social">
                    <ul>
                      <li>
                        <a href="#" className="facebook">
                          <i className="fa  fa-facebook" />{' '}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fa  fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="google">
                          <i className="fa  fa-google-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <div className="top_header_icon">
              <span className="top_header_icon_wrap">
                <a target="_blank" href="#" title="Twitter">
                  <i className="fa fa-twitter" />
                </a>
              </span>
              <span className="top_header_icon_wrap">
                <a target="_blank" href="#" title="Facebook">
                  <i className="fa fa-facebook" />
                </a>
              </span>
              <span className="top_header_icon_wrap">
                <a target="_blank" href="#" title="Google">
                  <i className="fa fa-google-plus" />
                </a>
              </span>
              <span className="top_header_icon_wrap">
                <a target="_blank" href="#" title="Vimeo">
                  <i className="fa fa-vimeo" />
                </a>
              </span>
              <span className="top_header_icon_wrap">
                <a target="_blank" href="#" title="Pintereset">
                  <i className="fa fa-pinterest-p" />
                </a>
              </span>
            </div>
            <div id="showLeft" className="nav-icon">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        {/* Mobile Menu End */}
        {/* top header */}
        {/* <div class="top_banner_wrap">
      <div class="container">
          <div class="row">
          </div>
      </div>
  </div> */}
        {/* navber */}
        <div className="container hidden-xs">
          <nav className="navbar">
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="/" className="category01">
                    HOME
                  </a>
                </li>
                <li className="dropdown">
                  <a href="" className="dropdown-toggle category02">
                    Education <span className="" />
                  </a>
                </li>
                <li className="dropdown">
                  <a href="" className="dropdown-toggle category03">
                    Sports <span className="" />
                  </a>
                </li>
                <li>
                  <a href="" className="category04">
                    FASHION
                  </a>
                </li>
                <li>
                  <a href="" className="category05">
                    TRAVEL
                  </a>
                </li>
                <li>
                  <a href="" className="category06">
                    FOOD
                  </a>
                </li>
                <li>
                  <a href="" className="category08">
                    LIFESTYLE
                  </a>
                </li>
              </ul>
            </div>
            {/* navbar-collapse */}
          </nav>
        </div>
      </header>
      {children}
      <Outlet />

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="footer-box">
                <h3 className="category-headding">POPULAR TAGS</h3>
                <div className="headding-border" />
                <a className="tag" href="" title="">
                  EDUCATION
                </a>
                <a className="tag" href="" title="">
                  ENTERTAINMENT
                </a>
                <a className="tag" href="" title="">
                  BLOG
                </a>
                <div className="newsletter-inner">
                  {/* newsletter */}
                  <h3 className="category-headding ">NEWSLETTER</h3>
                  <div className="headding-border" />
                  <p>Enter your email address for our mailing list!</p>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required=""
                  />
                  <button type="button" className="btn btn-style">
                    Subscribe
                  </button>
                </div>
                {/* /.newsletter */}
              </div>
            </div>
            <div className="col-sm-4">
              <div className="footer-box">
                {/* featured news */}
                <h3 className="category-headding "> NEWS</h3>
                <div className="headding-border bg-color-2" />
                {'{'}% for blog in blogs %{'}'}
                <div className="box-item wow fadeIn" data-wow-duration="2s">
                  <div className="img-thumb">
                    {'{'}% if blog.Image %{'}'}
                    <a href="#" rel="bookmark">
                      <img className="entry-thumb" src='alt=""' height={80} width={100} />
                    </a>
                    {'{'}% endif %{'}'}
                  </div>
                  <div className="item-details">
                    <h6 className="sub-category-title bg-color-1">
                      <a href="#">
                        {'{'}
                        {'{'}blog.Category{'}'}
                        {'}'}
                      </a>
                    </h6>
                    <h3 className="td-module-title">
                      <a href="#">
                        {'{'}
                        {'{'}blog.Title{'}'}
                        {'}'}
                      </a>
                    </h3>
                    <div className="post-editor-date">
                      {/* post date */}
                      <div className="post-date">
                        <i className="pe-7s-clock" /> {'{'}
                        {'{'} blog.Date_Created {'}'}
                        {'}'}
                      </div>
                      {/* post comment */}
                      <div className="post-author-comment">
                        <i className="pe-7s-comment" /> 13{' '}
                      </div>
                    </div>
                  </div>
                </div>
                {'{'}% endfor %{'}'}
              </div>
              {/* /.featured news */}
            </div>
            <div className="col-sm-4">
              <div className="footer-box">
                <h3 className="category-headding ">Popular NEWS</h3>
                <div className="headding-border bg-color-2" />
                {'{'}% for post in posts %{'}'}
                <div className="box-item wow fadeIn" data-wow-duration="2s">
                  <div className="img-thumb">
                    {'{'}% if post.Image %{'}'}
                    <a href="#" rel="bookmark">
                      <img className="entry-thumb" src='alt=""' height={80} width={100} />
                    </a>
                    {'{'}% endif %{'}'}
                  </div>
                  <div className="item-details">
                    <h6 className="sub-category-title bg-color-1">
                      <a href="#">
                        {'{'}
                        {'{'}post.Category{'}'}
                        {'}'}
                      </a>
                    </h6>
                    <h3 className="td-module-title">
                      <a href="#">
                        {'{'}
                        {'{'}post.Title{'}'}
                        {'}'}
                      </a>
                    </h3>
                    <div className="post-editor-date">
                      {/* post date */}
                      <div className="post-date">
                        <i className="pe-7s-clock" /> {'{'}
                        {'{'} post.Date_Created {'}'}
                        {'}'}
                      </div>
                      {/* post comment */}
                      <div className="post-author-comment">
                        <i className="pe-7s-comment" /> 13{' '}
                      </div>
                    </div>
                  </div>
                </div>
                {'{'}% endfor %{'}'}
              </div>
            </div>
            {/* /.top rated  */}
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <div className="footer-box footer-logo-address">
                {/* address  */}
                <img src="{% static 'images/footer-logo.png' %}" className="img-responsive" alt="" />
                <address>
                  Nigeria
                  <br /> Tel: +2348162942636
                  <br /> Email: codewithsastech@gmail.com
                </address>
              </div>
              {/* /.address  */}
            </div>
            <div className="col-sm-3">
              <div className="footer-box">
                <h3 className="category-headding">categories</h3>
                <div className="headding-border bg-color-4" />
                <ul>
                  <li>
                    <i className="fa fa-dot-circle-o" />
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <i className="fa fa-dot-circle-o" />
                    <a href="">News</a>
                  </li>
                  <li>
                    <i className="fa fa-dot-circle-o" />
                    <a href="">Education</a>
                  </li>
                  <li>
                    <i className="fa fa-dot-circle-o" />
                    <a href="">Football</a>
                  </li>
                  <li>
                    <i className="fa fa-dot-circle-o" />
                    <a href="">Entertainment</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-box">
                <h3 className="category-headding">Trending STORIES</h3>
                <div className="headding-border bg-color-5" />
                <ul>
                  {'{'}% for post in posts%{'}'}
                  <li>
                    <i className="fa fa-dot-circle-o" />
                    <a href="#">
                      {'{'}
                      {'{'}post.Title|slice:20{'}'}
                      {'}'}...
                    </a>
                  </li>
                  {'{'}%endfor%{'}'}
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="footer-box">
                <h3 className="category-headding ">POPULAR STORIES</h3>
                <div className="headding-border" />
                <ul>
                  {'{'}% for blog in blogs%{'}'}
                  <li>
                    <i className="fa fa-dot-circle-o" />
                    <a href="#">
                      {'{'}
                      {'{'}blog.Title|slice:20{'}'}
                      {'}'}...
                    </a>
                  </li>
                  {'{'}%endfor%{'}'}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="sub-footer">
        {/* sub footer */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p>
                <a href="#" className="color-1">
                  Klog
                </a>{' '}
                | All right Reserved 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layouts;
