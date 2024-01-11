import React from 'react';

function Data({ id, title, category, author, description }) {
  return (
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
          <span className="color-1">{category}</span>
          <h3 className="post-title post-title-size">
            <a href="" rel="bookmark">
              {/*  {'{'}
          {'{'} blog.Title {'}'}
          {'}'} */}
              {title}
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
  );
}

export default Data;
