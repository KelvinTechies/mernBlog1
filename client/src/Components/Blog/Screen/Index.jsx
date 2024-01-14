import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllPosts } from 'src/Rdux/PostSlice';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Data from './Data';

function Index() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [datas, setDatas] = useState([]);
  const [paginateThree, setPaginateThree] = useState([]);
  const [paginateAnotherThree, setPaginateAnotherThree] = useState([]);
  const [paginateFour, setPaginatepaginateFour] = useState([]);
  const [paginateSingle, setPaginateSingle] = useState([]);
  const [paginateAnotherSingle, setPaginateAnotherSingle] = useState([]);
  // const posts = useSelector((state) => state.posts.posts);

  const getDatas = async () => {
    const response = await axios.get('http://localhost:7000/post').then((res) => {
      setPosts(res.data);
      dispatch(getAllPosts(res.data));
    });

    const ressy = await axios.get('http://localhost:7000/post/getOnePaginatedPost?page=1&limit=1').then((res) => {
      setDatas(res.data);
    });

    const r = await axios.get('http://localhost:7000/post/getOnePaginatedPost?page=2&limit=3').then((res) => {
      setPaginateThree(res.data);
    });

    const rr = await axios.get('http://localhost:7000/post/getOnePaginatedPost?page=3&limit=3').then((res) => {
      setPaginateAnotherThree(res.data);
    });
    const rrR = await axios.get('http://localhost:7000/post/getOnePaginatedPost?page=1&limit=4').then((res) => {
      setPaginatepaginateFour(res.data);
    });
    const rrRR = await axios.get('http://localhost:7000/post/getOnePaginatedPost?page=2&limit=2').then((res) => {
      setPaginateSingle(res.data);
    });
    const rrRRR = await axios.get('http://localhost:7000/post/getOnePaginatedPost?page=1&limit=4').then((res) => {
      setPaginateAnotherSingle(res.data);
    });
  };
  useEffect(() => {
    getDatas();
  }, [
    navigate,
    posts,
    datas,
    paginateThree,
    paginateAnotherThree,
    paginateFour,
    paginateSingle,
    paginateAnotherSingle,
  ]);
  // console.log(posts, datas);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getTwentyWords = (text) => {
    const wrds = text.split(' ');
    return wrds.slice(0, 20).join(' ');
  };
  return (
    <>
      <main id="main">
        {/* ======= Hero Slider Section ======= */}
        {/* <section id="hero-slider" className="hero-slider">
          <div className="container-md" data-aos="fade-in">
            <div className="row">
              <div className="col-12">
                <div className="swiper sliderFeaturedPosts">
                  <div className="swiper-wrapper">
                    {datas.map((data) => {
                      <div className="swiper-slide">
                        <a
                          href=""
                          className="img-bg d-flex align-items-end"
                          style={{
                            backgroundImage: 'url{`http://localhost:3000/my-uploads/${data.Image}`}',
                          }}
                        >
                          <div className="img-bg-inner">
                            <h2>{data.Title}</h2>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem neque est mollitia!
                              Beatae minima assumenda repellat harum vero, officiis ipsam magnam obcaecati cumque maxime
                              inventore repudiandae quidem necessitatibus rem atque.
                            </p>
                          </div>
                        </a>
                      </div>;
                    })}
                  </div>
                  <div className="custom-swiper-button-next">
                    <span className="bi-chevron-right" />
                  </div>
                  <div className="custom-swiper-button-prev">
                    <span className="bi-chevron-left" />
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* End Hero Slider Section */}
        {/* ======= Post Grid Section ======= */}
        <section id="posts" className="posts">
          <div className="container" data-aos="fade-up">
            <div className="row g-5">
              <div className="col-lg-4">
                {datas.map((data) => {
                  return (
                    <>
                      <div className="post-entry-1 lg" key={data._id}>
                        <a href={'/post_detail/' + data._id}>
                          <img src={`http://localhost:3000/my-uploads/${data.Image}`} alt="" className="img-fluid" />
                        </a>
                        <div className="post-meta">
                          <span className="date">{data.Category}</span> <span className="mx-1">•</span>{' '}
                          <span>{new Date(data.createdAt).toLocaleDateString()} </span>
                        </div>
                        <h2>
                          <a href={'/post_detail/' + data._id}>{data.Title}</a>
                        </h2>
                        <p className="mb-4 d-block">{getTwentyWords(data.Description)}...</p>
                        <div className="d-flex align-items-center author">
                          <div className="photo">
                            <img src="newAsset/assets/img/person-1.jpg" alt="" className="img-fluid" />
                          </div>
                          <div className="name">
                            <h3 className="m-0 p-0">{data.Author}</h3>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="col-lg-8">
                <div className="row g-5">
                  <div className="col-lg-4 border-start custom-border">
                    {paginateThree.map((item) => {
                      return (
                        <>
                          <div className="post-entry-1" key={item._id}>
                            <a href={'/post_detail/' + item._id}>
                              <img
                                src={`http://localhost:3000/my-uploads/${item.Image}`}
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                            <div className="post-meta">
                              <span className="date">{item.Category}</span> <span className="mx-1">•</span>{' '}
                              <span>{new Date(item.createdAt).toLocaleTimeString()}</span>
                            </div>
                            <h2>
                              <a href={'/post_detail/' + item._id}>{item.Title}</a>
                            </h2>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className="col-lg-4 border-start custom-border">
                    {paginateAnotherThree.map((item) => {
                      return (
                        <>
                          <div className="post-entry-1" key={item._id}>
                            <a href={'/post_detail' + item._id}>
                              <img
                                src={`http://localhost:3000/my-uploads/${item.Image}`}
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                            <div className="post-meta">
                              <span className="date">{item.Category}</span> <span className="mx-1">•</span>{' '}
                              <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                            </div>
                            <h2>
                              <a href={'/post_detail/' + item._id}>{item.Title}</a>
                            </h2>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  {/* Trending Section */}
                  <div className="col-lg-4">
                    <div className="trending">
                      <h3>Trending</h3>
                      <ul className="trending-post">
                        {paginateFour.map((item) => {
                          return (
                            <>
                              <li key={item._id}>
                                <a href={'/post_detail/' + item._id}>
                                  <span className="number">1</span>
                                  <h3>{item.Title}</h3>
                                  <span className="author">{item.Author}</span>
                                </a>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </div>
                  </div>{' '}
                  {/* End Trending Section */}
                </div>
              </div>
            </div>{' '}
            {/* End .row */}
          </div>
        </section>{' '}
        {/* End Post Grid Section */}
        {/* ======= Culture Category Section ======= */}
        <section className="category-section">
          <div className="container" data-aos="fade-up">
            <div className="section-header d-flex justify-content-between align-items-center mb-5">
              <h2>Recent </h2>
              <div>
                <a href="category.html" className="more">
                  See All Recent
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-9">
                {paginateSingle.map((item) => {
                  return (
                    <>
                      <div className="d-lg-flex post-entry-2">
                        <a href={'/post_detail/' + item._id} className="me-4 thumbnail mb-4 mb-lg-0 d-inline-block">
                          <img src={`http://localhost:3000/my-uploads/${item.Image}`} className="img-fluid" />
                        </a>
                        <div>
                          <div className="post-meta">
                            <span className="date">{item.Category}</span> <span className="mx-1">•</span>{' '}
                            <span>{new Date(item.createdAt).toLocaleTimeString()}</span>
                          </div>
                          <h3>
                            <a href={'/post_detail/' + item._id}>{item.Title}</a>
                          </h3>
                          <p>{getTwentyWords(item.Description)}...</p>
                          <div className="d-flex align-items-center author">
                            <div className="photo">
                              <img
                                src={`http://localhost:3000/my-uploads/${item.Image}`}
                                alt=""
                                className="img-fluid"
                              />
                            </div>
                            <div className="name">
                              <h3 className="m-0 p-0">{item.Author}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="col-md-3">
                {paginateAnotherSingle.map((item) => {
                  return (
                    <>
                      <div className="post-entry-1 border-bottom" key={item._id}>
                        <div className="post-meta">
                          <span className="date">{item.Category}</span> <span className="mx-1">•</span>{' '}
                          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                        </div>
                        <h2 className="mb-2">
                          <a href={'/post_detail/' + item._id}>{item.Title}</a>
                        </h2>
                        <span className="author mb-3 d-block"> {item.Author}</span>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        {/* End Culture Category Section */}
        {/* ======= Lifestyle Category Section ======= */}
        <section className="category-section">
          <div className="container" data-aos="fade-up">
            <div className="section-header d-flex justify-content-between align-items-center mb-5">
              <h2>Lifestyle</h2>
              <div>
                <a href="category.html" className="more">
                  See All Lifestyle
                </a>
              </div>
            </div>
            <div className="row g-5">
              <div className="col-lg-4">
                {paginateSingle.map((item) => {
                  <div className="post-entry-1 lg" key={item._id}>
                    <a href={'/post_detail/' + item._id}>
                      <img src={`http://localhost:3000/my-uploads/${item.Image}`} alt="" className="img-fluid" />
                    </a>
                    <div className="post-meta">
                      <span className="date">{item.Category}</span> <span className="mx-1">•</span>{' '}
                      <span>{new Date(item.createdAt).toLocaleTimeString()}</span>
                    </div>
                    <h2>
                      <a href={'/post_detail/' + item._id}>{item.Title}</a>
                    </h2>
                    <p className="mb-4 d-block">{getTwentyWords(item.Description)}...</p>
                    <div className="d-flex align-items-center author">
                      <div className="photo">
                        <img src={`http://localhost:3000/my-uploads/${item.Image}`} alt="" className="img-fluid" />
                      </div>
                      <div className="name">
                        <h3 className="m-0 p-0">{item.Author}</h3>
                      </div>
                    </div>
                  </div>;
                })}
                {paginateAnotherSingle.map((item) => {
                  return (
                    <>
                      <div className="post-entry-1 border-bottom" key={item._id}>
                        <div className="post-meta">
                          <span className="date">{item.Category}</span> <span className="mx-1">•</span>{' '}
                          <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                        </div>
                        <span className="author mb-3 d-block">{item.Author}</span>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="col-lg-8">
                <div className="row g-5">
                  <div className="col-lg-4 border-start custom-border">
                    {paginateAnotherThree.map((item) => {
                      return (
                        <>
                          <div className="post-entry-1" key={item.id}>
                            <a href={'/post_detail/' + item.id}>
                              <img
                                src={`http://localhost:3000/my-uploads/${item.Image}`}
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                            <div className="post-meta">
                              <span className="date">{item.Category}</span> <span className="mx-1">•</span>{' '}
                              <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                            </div>
                            <h2>
                              <a href={'/post_detail/' + item._id}>{item.Title}</a>
                            </h2>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className="col-lg-4 border-start custom-border">
                    {paginateThree.map((item) => {
                      return (
                        <>
                          <div className="post-entry-1" key={item._id}>
                            <a href={'/post_detail/' + item.id}>
                              <img
                                src={`http://localhost:3000/my-uploads/${item.Image}`}
                                alt=""
                                className="img-fluid"
                              />
                            </a>
                            <div className="post-meta">
                              <span className="date">{item.Category}</span> <span className="mx-1">•</span>{' '}
                              <span>{new Date(item.createdAt).toLocaleTimeString()}</span>
                            </div>
                            <h2>
                              <a href={'/post_detail/' + item._id}>{item.Title}</a>
                            </h2>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className="col-lg-4">
                    {paginateFour.map((item) => {
                      return (
                        <>
                          <div className="post-entry-1 border-bottom" key={item._id}>
                            <div className="post-meta">
                              <span className="date">{item.Category}</span> <span className="mx-1">•</span>{' '}
                              <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                            </div>
                            <h2 className="mb-2">
                              <a href={'/post_detail/' + item._id}>{item.Title}</a>
                            </h2>
                            <span className="author mb-3 d-block">{item.Author}</span>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>{' '}
            {/* End .row */}
          </div>
        </section>
        {/* End Lifestyle Category Section */}
      </main>
      {/* End #main */}
    </>
  );
}

export default Index;
