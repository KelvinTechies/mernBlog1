import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllPosts } from 'src/Rdux/PostSlice';
import Data from './Data';

function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [datas, setDatas] = useState([]);
  const posts = useSelector((state) => state.posts.posts);

  const getDatas = async () => {
    const response = await axios.get('http://localhost:7000/post').then((res) => {
      //   setDatas(res.data);
      dispatch(getAllPosts(res.data));
    });
  };
  useEffect(() => {
    getDatas();
  }, [navigate, posts]);

  return (
    <>
      <>
        <section className="news-feed">
          <div className="container">
            <div className="row row-margin">
              {/* {'{'}% for blog in blogs%{'}'} */}
              {posts.map((post) => {
                return (
                  <>
                    <div className="col-sm-3 hidden-xs col-padding">
                      <div className="post-wrapper wow fadeIn" data-wow-duration="2s">
                        <div className="post-thumb  img-zoom-in" id="">
                          {/* {'{'}% if blog.Image %{'}'} */}
                          <a href="">
                            <img className="entry-thumb" src="" alt="" />
                          </a>
                          {/* {'{'}% endif %{'}'} */}
                        </div>
                        <div className="post-info">
                          <span className="color-1">{post.category}</span>
                          <h3 className="post-title post-title-size">
                            <a href="" rel="bookmark">
                              {/*  {'{'}
          {'{'} blog.Title {'}'}
          {'}'} */}
                              {post.title}
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
                            {/* read more */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              {/* {'{'}% endfor %{'}'} */}
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-8">
              {/* left content inner */}
              {/* Politics Area
          ============================================ */}
              <section className="politics_wrapper">
                <h3 className="category-headding ">Latest Blog</h3>
                <div className="headding-border" />
                <div className="row">
                  <div id="content-slide-2" className="owl-carousel">
                    {/* item-1 */}
                    <div className="item">
                      <div className="row">
                        {/* main post */}
                        <div className="col-sm-6 col-md-6">
                          <div className="post-wrapper wow fadeIn" data-wow-duration="2s">
                            {/* post title */}
                            <h3>
                              <a href="{% url 'blog-details' singleView.id %}">
                                {'{'}
                                {'{'}singleView.Title{'}'}
                                {'}'}.
                              </a>
                            </h3>
                            {/* post image */}
                            <div className="post-thumb">
                              {'{'}% if singleView.Image %{'}'}
                              <a href="{% url 'blog-details' singleView.id %}">
                                <img src="" className="img-responsive" alt="" />
                              </a>
                              {'{'}% endif %{'}'}
                            </div>
                          </div>
                          <div className="post-title-author-details">
                            <div className="post-editor-date">
                              {/* post date */}
                              <div className="post-date">
                                <i className="pe-7s-clock" /> {'{'}
                                {'{'} singleView.Date_Created {'}'}
                                {'}'}
                              </div>
                              {/* post comment */}
                              <div className="post-author-comment">
                                <i className="pe-7s-comment" /> 13{' '}
                              </div>
                            </div>
                            <p>
                              {'{'}
                              {'{'} singleView.Description|slice:30{'}'}
                              {'}'}... <a href="{% url 'blog-details' singleView.id %}">Read more...</a>
                            </p>
                          </div>
                        </div>
                        {/* right side post */}
                        <div className="col-sm-6 col-md-6">
                          <div className="row rn_block">
                            {'{'}% for post in posts%{'}'}
                            <div className="col-xs-6 col-md-6 col-sm-6 post-padding">
                              {/* post image */}
                              <div className="post-thumb wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                {'{'}% if post.Image %{'}'}
                                <a href="{% url 'details' post.id %}">
                                  <img src="" className="img-responsive" alt="" />
                                </a>
                                {'{'}% endif %{'}'}
                              </div>
                              <div className="post-title-author-details">
                                {/* post image */}
                                <h5>
                                  <a href="{% url 'details' post.id %}">
                                    {'{'}
                                    {'{'}post.Title{'}'}
                                    {'}'}
                                  </a>
                                </h5>
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
                            {'{'}% endfor%{'}'}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* item-2 */}
                    <div className="item">
                      <div className="row">
                        {/* main post */}
                        <div className="col-sm-6 col-md-6">
                          <div className="post-wrapper wow fadeIn" data-wow-duration="1s">
                            {/* post title */}
                            <h3>
                              <a href="{% url 'details' singlepost.id %}">
                                {'{'}
                                {'{'}singlepost.Title{'}'}
                                {'}'}
                              </a>
                            </h3>
                            {/* post image */}
                            <div className="post-thumb">
                              {'{'}% if singlepost.Image %{'}'}
                              <a href="{% url 'details' singlepost.id %}">
                                <img src="" className="img-responsive" alt="" />
                              </a>
                              {'{'}% endif %{'}'}
                            </div>
                          </div>
                          <div className="post-title-author-details">
                            <div className="post-editor-date">
                              {/* post date */}
                              <div className="post-date">
                                <i className="pe-7s-clock" />
                                {'{'}
                                {'{'}singlepost.Date_Ceated{'}'}
                                {'}'}
                              </div>
                              {/* post comment */}
                              <div className="post-author-comment">
                                <i className="pe-7s-comment" /> 13{' '}
                              </div>
                            </div>
                            <p>
                              {'{'}
                              {'{'}singlepost.Description|slice:30{'}'}
                              {'}'}... <a href="{% url 'details' singlepost.id %}">Read more...</a>
                            </p>
                          </div>
                        </div>
                        {/* right side post */}
                        <div className="col-sm-6 col-md-6">
                          <div className="row rn_block">
                            {'{'}% for blog in blogs%{'}'}
                            <div className="col-xs-6 col-md-6 col-sm-6 post-padding">
                              {/* post image */}
                              <div className="post-thumb wow fadeIn" data-wow-duration="1s" data-wow-delay="0.2s">
                                {'{'}% if blog.Image %{'}'}
                                <a href="{% url 'blog-details' blog.id %}">
                                  <img src="" className="img-responsive" alt="" />
                                </a>
                                {'{'}% endif %{'}'}
                              </div>
                              <div className="post-title-author-details">
                                {/* post image */}
                                <h5>
                                  <a href="{% url 'blog-details' blog.id %}">
                                    {'{'}
                                    {'{'}blog.Title{'}'}
                                    {'}'}
                                  </a>
                                </h5>
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
                            {'{'}% endfor%{'}'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.row */}
              </section>
              {/* /.Politics */}
              <div className="ads">
                <a href="#">
                  <img src="{% static 'images/top-bannner2.jpg ' %}" className="img-responsive center-block" alt="" />
                </a>
              </div>
            </div>
            {/* /.left content inner */}
            <div className="col-md-4 col-sm-4 left-padding">
              {/* right content wrapper */}
              <div className="input-group search-area">
                {/* search area */}
                <input type="text" className="form-control" placeholder="Search articles here ..." name="q" />
                <div className="input-group-btn">
                  <button className="btn btn-search" type="submit">
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </div>
              </div>
              {/* /.twitter feed */}
              <div className="banner-add">
                {/* add */}
                <span className="add-title">- Advertisement -</span>
                <a href="#">
                  <img src="{% static 'images/ad-banner.jpg ' %}" className="img-responsive center-block" alt="" />
                </a>
              </div>
              <div className="tab-inner">
                <ul className="tabs">
                  <li>
                    <a href="#">POPULAR</a>
                  </li>
                  <li>
                    <a href="#">MOST VIEWED</a>
                  </li>
                </ul>
                <hr />
                {/* tabs */}
                <div className="tab_content">
                  <div className="tab-item-inner">
                    {'{'}% for post in posts %{'}'}
                    <div className="box-item wow fadeIn" data-wow-duration="1s">
                      <div className="img-thumb">
                        {'{'}% if post.Image %{'}'}
                        <a href="{% url 'details' post.id %}" rel="bookmark">
                          <img className="entry-thumb" src="" alt="" height={80} width={90} />
                        </a>
                        {'{'}% endif %{'}'}
                      </div>
                      <div className="item-details">
                        <h6 className="sub-category-title bg-color-1">
                          <a href="{% url 'details' post.id %}">
                            {'{'}
                            {'{'}post.Category{'}'}
                            {'}'}
                          </a>
                        </h6>
                        <h3 className="td-module-title">
                          <a href="{% url 'details' post.id %}">
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
                  {/* / tab item */}
                  <div className="tab-item-inner">
                    {'{'}% for blog in blogs %{'}'}
                    <div className="box-item">
                      <div className="img-thumb">
                        {'{'}% if blog.Image %{'}'}
                        <a href="{% url 'blog-details' blog.id %}" rel="bookmark">
                          <img className="entry-thumb" src='alt=""' height={80} width={100} />
                        </a>
                        {'{'}% endif %{'}'}
                      </div>
                      <div className="item-details">
                        <h6 className="sub-category-title bg-color-5">
                          <a href="{% url 'blog-details' blog.id %}">
                            {'{'}
                            {'{'}blog.Category{'}'}
                            {'}'}
                          </a>
                        </h6>
                        <h3 className="td-module-title">
                          <a href="{% url 'blog-details' blog.id %}">
                            {'{'}
                            {'{'} blog.Title {'}'}
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
                  {/* / tab item */}
                </div>
                {/* / tab_content */}
              </div>
              {/* / tab */}
            </div>
            {/* side content end */}
          </div>
          {/* row end */}
        </div>
        {/* container end */}
        {/* Weekly News Area
    ============================================ */}
        <section className="weekly-news-inner">
          <div className="container">
            <div className="row row-margin">
              <h3 className="category-headding ">WEEKLY NEWS</h3>
              <div className="headding-border bg-color-1" />
              <div id="content-slide-4" className="owl-carousel">
                {'{'}% for eachPost in Allposts%{'}'}
                <div className="item">
                  <div className="post-wrapper wow fadeIn" data-wow-duration="1s">
                    <div className="post-thumb img-zoom-in">
                      {'{'}% if eachPost.Image %{'}'}
                      <a href="{% url 'details' eachPost.id %}">
                        <img className="entry-thumb" src="" alt="" />
                      </a>
                      {'{'}% endif %{'}'}
                    </div>
                    <div className="post-info">
                      <span className="color-4">
                        {'{'}
                        {'{'} eachPost.Category {'}'}
                        {'}'}{' '}
                      </span>
                      <h3 className="post-title">
                        <a href="{% url 'details' eachPost.id %}" rel="bookmark">
                          {'{'}
                          {'{'}eachPost.Title{'}'}
                          {'}'}
                        </a>
                      </h3>
                      <div className="post-editor-date">
                        {/* post date */}
                        <div className="post-date">
                          <i className="pe-7s-clock" /> Oct 6, 2016
                        </div>
                        {/* post comment */}
                        <div className="post-author-comment">
                          <i className="pe-7s-comment" /> 13{' '}
                        </div>
                        {/* read more */}
                        <a className="readmore pull-right" href="#">
                          <i className="pe-7s-angle-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {'{'}% endfor%{'}'}
              </div>
            </div>
          </div>
        </section>
        {/* second content end */}
        {/* /.adds*/}
        {/* all category  news Area
    ============================================ */}
        <section className="all-category-inner">
          <div className="container">
            <div className="row">
              {'{'}% for post in posts %{'}'}
              <div className="col-md-4 col-sm-4">
                {/* sports */}
                <div className="sports-inner">
                  <h3 className="category-headding ">
                    {'{'}
                    {'{'}post.Category{'}'}
                    {'}'}
                  </h3>
                  <div className="headding-border bg-color-1" />
                  <div className="post-wrapper wow fadeIn" data-wow-duration="1s">
                    {/* post title */}
                    <h3>
                      <a href="{% url 'details' post.id %}">
                        {'{'}
                        {'{'} post.Title |slice:30 {'}'}
                        {'}'}...
                      </a>
                    </h3>
                    {/* post image */}
                    <div className="post-thumb" id="imgbbx">
                      {'{'}% if post.Image %{'}'}
                      <a href="{% url 'details' post.id %}">
                        <img src="" className="img-responsive" alt="" />
                      </a>
                      {'{'}% endif %{'}'}
                    </div>
                  </div>
                  <div className="post-title-author-details">
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
                    <p>
                      {'{'}
                      {'{'}post.Description|slice:20{'}'}
                      {'}'}...<a href="{% url 'details' post.id %}">Read more...</a>
                    </p>
                  </div>
                </div>
              </div>
              {'{'}% endfor %{'}'}
              {/* /.sports */}
              {/* /.travel */}
            </div>
            <div className="row">
              {'{'}% for b in threeblogs%{'}'}
              <div className="col-md-4 col-sm-4">
                {/* food */}
                <div className="food-inner">
                  <h3 className="category-headding ">
                    {'{'}
                    {'{'}b.Category{'}'}
                    {'}'}
                  </h3>
                  <div className="headding-border bg-color-4" />
                  <div className="post-wrapper wow fadeIn" data-wow-duration="1s">
                    {/* post title */}
                    <h3>
                      <a href="{% url 'blog-details' b.id %}">
                        {'{'}
                        {'{'}b.Title{'}'}
                        {'}'}
                      </a>
                    </h3>
                    {/* post image */}
                    <div className="post-thumb">
                      {'{'}% if b.Image %{'}'}
                      <a href="{% url 'blog-details' b.id %}">
                        <img src="" className="img-responsive" alt="" />
                      </a>
                      {'{'}% endif %{'}'}
                    </div>
                  </div>
                  <div className="post-title-author-details">
                    <div className="post-editor-date">
                      {/* post date */}
                      <div className="post-date">
                        <i className="pe-7s-clock" /> {'{'}
                        {'{'} b.Date_Created {'}'}
                        {'}'}
                      </div>
                      {/* post comment */}
                      <div className="post-author-comment">
                        <i className="pe-7s-comment" /> 13{' '}
                      </div>
                    </div>
                    <p>
                      {'{'}
                      {'{'} b.Description|slice:20{'}'}
                      {'}'}... <a href="{% url 'blog-details' b.id %}">Read more...</a>
                    </p>
                  </div>
                </div>
              </div>
              {/* /.food */}
              {'{'}% endfor %{'}'}
              {/* /.health */}
            </div>
          </div>
        </section>
      </>
    </>
  );
}

export default Index;
