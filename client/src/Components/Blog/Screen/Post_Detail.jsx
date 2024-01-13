import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

function Post_Detail() {
  const { id } = useParams();
  const [datas, setDatas] = useState({});
  const navigate = useNavigate();
  const post_id = useSelector((state) => state.posts.posts);
  const [paginateThree, setPaginateThree] = useState([]);
  const [paginateAnotherThree, setPaginateAnotherThree] = useState([]);
  const [paginateFour, setPaginatepaginateFour] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [description, setDescription] = useState();
  const [comments, setComments] = useState([]);
  const p_id = post_id.find((p) => p.id == id);

  const getSingleData = async () => {
    await axios.get('http://localhost:7000/post/' + id).then((res) => {
      setDatas(res.data);
    });
    const rrRRR = await axios.get('http://localhost:7000/post/getOnePaginatedPost?page=1&limit=4').then((res) => {
      setPaginatepaginateFour(res.data);
    });
    const r = await axios.get('http://localhost:7000/post/getOnePaginatedPost?page=2&limit=3').then((res) => {
      setPaginateThree(res.data);
    });

    const rr = await axios.get('http://localhost:7000/post/getOnePaginatedPost?page=3&limit=3').then((res) => {
      setPaginateAnotherThree(res.data);
    });
  };

  const createCommentHandler = () => {
    axios.post('http://localhost:7000/comment/' + id, {
      name,
      email,
      description,
    });
  };

  const getComments = () => {
    axios.get('http://localhost:7000/details/' + id).then((res) => {
      setComments(res.data);
    });
  };

  useEffect(() => {
    getSingleData();
    getComments();
  }, [navigate, datas, paginateThree, paginateAnotherThree, paginateFour, comments]);

  // const getFirstLetter = (str) => str.charAt(0);
  return (
    <>
      <main id="main">
        <section className="single-post-content">
          <div className="container">
            <div className="row">
              <div className="col-md-9 post-content" data-aos="fade-up">
                {/* ======= Single Post Content ======= */}
                <div className="single-post">
                  <figure className="my-4">
                    <img src="/newAsset/assets/img/post-landscape-1.jpg" alt="" className="img-fluid" />
                    <figcaption>{datas.Title}</figcaption>
                  </figure>
                  <div className="post-meta">
                    <span className="date">{datas.Category}</span> <span className="mx-1">•</span>{' '}
                    <span>{new Date(datas.createdAt).toLocaleString()}</span>
                  </div>
                  <h1 className="mb-5">{datas.Title}</h1>
                  <p style={{ textAlign: 'justify' }}>
                    <span className="firstcharacter"></span>
                    {datas.Description}
                  </p>
                </div>
                {/* End Single Post Content */}
                {/* ======= Comments ======= */}
                <div className="comments">
                  <h5 className="comment-title py-4">{comments.length} Comments</h5>

                  <div className="comment d-flex">
                    {comments.map((comment) => {
                      return (
                        <>
                          <div className="flex-shrink-0">
                            <div className="avatar avatar-sm rounded-circle">
                              <img className="avatar-img" src="/newAsset/assets/img/person-2.jpg" alt="" />
                            </div>
                          </div>
                          <div className="flex-shrink-1 ms-2 ms-sm-3">
                            <div className="comment-meta d-flex">
                              <h6 className="me-2">{comment.name}</h6>
                              <span className="text-muted">{new Date(comment.createdAt).toLocaleString()}</span>
                            </div>
                            <div className="comment-body">{comment.description}</div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                {/* End Comments */}
                {/* ======= Comments Form ======= */}
                <form action="">
                  <div className="row justify-content-center mt-5">
                    <div className="col-lg-12">
                      <h5 className="comment-title">Leave a Comment</h5>
                      <div className="row">
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="comment-name">Name</label>
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                            id="comment-name"
                            placeholder="Enter your name"
                          />
                        </div>
                        <div className="col-lg-6 mb-3">
                          <label htmlFor="comment-email">Email</label>
                          <input
                            type="text"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            id="comment-email"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="col-12 mb-3">
                          <label htmlFor="comment-message">Message</label>
                          <textarea
                            className="form-control"
                            id="comment-message"
                            placeholder="Enter your name"
                            cols={30}
                            rows={10}
                            defaultValue={''}
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                        <div className="col-12">
                          <input
                            type="submit"
                            onClick={createCommentHandler}
                            className="btn btn-primary"
                            defaultValue="Post comment"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                {/* End Comments Form */}
              </div>
              <div className="col-md-3">
                {/* ======= Sidebar ======= */}
                <div className="aside-block">
                  <ul className="nav nav-pills custom-tab-nav mb-4" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="pills-popular-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-popular"
                        type="button"
                        role="tab"
                        aria-controls="pills-popular"
                        aria-selected="true"
                      >
                        Popular
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-trending-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-trending"
                        type="button"
                        role="tab"
                        aria-controls="pills-trending"
                        aria-selected="false"
                      >
                        Trending
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="pills-latest-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-latest"
                        type="button"
                        role="tab"
                        aria-controls="pills-latest"
                        aria-selected="false"
                      >
                        Latest
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    {/* Popular */}
                    <div
                      className="tab-pane fade show active"
                      id="pills-popular"
                      role="tabpanel"
                      aria-labelledby="pills-popular-tab"
                    >
                      {paginateFour.map((item) => {
                        return (
                          <>
                            <div className="post-entry-1 border-bottom">
                              <div className="post-meta">
                                <span className="date">{item.Category}</span> <span className="mx-1">•</span>{' '}
                                <span>{new Date(item.createdAt).toLocaleString()}</span>
                              </div>
                              <h2 className="mb-2">
                                <a href="#">{item.Title}</a>
                              </h2>
                              <span className="author mb-3 d-block">{item.Author}</span>
                            </div>
                          </>
                        );
                      })}
                    </div>{' '}
                    {/* End Popular */}
                    {/* Trending */}
                    <div
                      className="tab-pane fade"
                      id="pills-trending"
                      role="tabpanel"
                      aria-labelledby="pills-trending-tab"
                    >
                      {paginateThree.map((item) => {
                        return (
                          <>
                            <div className="post-entry-1 border-bottom">
                              <div className="post-meta">
                                <span className="date">{item.Category}</span> <span className="mx-1">•</span>{' '}
                                <span>{new Date(item.createdAt).toLocaleString()}</span>
                              </div>
                              <h2 className="mb-2">
                                <a href="#">
                                  17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut
                                </a>
                              </h2>
                              <span className="author mb-3 d-block">Jenny Wilson</span>
                            </div>
                          </>
                        );
                      })}
                    </div>{' '}
                    {/* End Trending */}
                    {/* Latest */}
                    <div className="tab-pane fade" id="pills-latest" role="tabpanel" aria-labelledby="pills-latest-tab">
                      {paginateAnotherThree.map((item) => {
                        return (
                          <>
                            <div className="post-entry-1 border-bottom">
                              <div className="post-meta">
                                <span className="date">{item.Category}</span> <span className="mx-1">•</span>{' '}
                                <span>{new Date(item.createdAt).toLocaleString()}</span>
                              </div>
                              <h2 className="mb-2">
                                <a href="#">{item.Title}</a>
                              </h2>
                              <span className="author mb-3 d-block">{item.Author}</span>
                            </div>
                          </>
                        );
                      })}
                    </div>{' '}
                    {/* End Latest */}
                  </div>
                </div>

                {/* End Categories */}
                <div className="aside-block">
                  <h3 className="aside-title">Tags</h3>
                  <ul className="aside-tags list-unstyled">
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Culture</a>
                    </li>
                    <li>
                      <a href="#">Sport</a>
                    </li>
                    <li>
                      <a href="#">Food</a>
                    </li>
                    <li>
                      <a href="#">Politics</a>
                    </li>
                    <li>
                      <a href="#">Celebrity</a>
                    </li>
                    <li>
                      <a href="#">Startups</a>
                    </li>
                    <li>
                      <a href="#">Travel</a>
                    </li>
                  </ul>
                </div>
                {/* End Tags */}
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* End #main */}
    </>
  );
}

export default Post_Detail;
