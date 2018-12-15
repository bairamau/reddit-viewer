import React from 'react';
import PropTypes from 'prop-types';
export default class Post extends React.Component {

  static propTypes = {
    data: PropTypes.object.isRequired
  }
  render() {
    const { subreddit_name_prefixed, title, url, score, author } = this.props.data;
    return (
      <section className='post'>
        <div className='post-left'>
          <div className='post-score'>{score}</div>
        </div>
        <div className='post-right'>
          <h2><a className='post-title-link' target='_blank' href={url}>{title}</a></h2>
          <div className='post-subreddit'>{subreddit_name_prefixed}</div>
          <div className='post-author'>Posted by {author}</div>
        </div>
      </section>
    )
  }
}