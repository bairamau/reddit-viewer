import React from 'react';

function Post(props) {
  const {
    subreddit_name_prefixed,
    title,
    url,
    score,
    author,
  } = props.data;
  return (
    <section className='list-item'>
      <div className='list-item-left'>
        <div className='list-item-score'>
          {score}
        </div>
      </div>
      <div className='list-item-right'>
        <h2>
          <a className='list-item-title-link' target='_blank' href={url}>{title}
          </a>
        </h2>
        <div className='list-item-subreddit'>
          {subreddit_name_prefixed}
        </div>
        <div className='list-item-author'>
          Posted by {author}
        </div>
      </div>
    </section >
  )
}

export default Post;