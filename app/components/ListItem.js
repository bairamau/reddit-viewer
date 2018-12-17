import React from 'react';
import PropTypes from 'prop-types';

function Community(props) {
  const {
    icon_img,
    community_icon,
    public_description,
    title,
    url,
    display_name_prefixed
  } = props.data;
  return (<section className='list-item'>
    <div className='list-item-left'>
      <img width='128' src={community_icon || icon_img || 'http://icons-for-free.com/free-icons/png/512/1646919.png'} alt={`${display_name_prefixed} community icon`}></img>
    </div>
    <div className='list-item-right'>
      <h2>
        <a className='list-item-title-link' target='_blank' href={`https://www.reddit.com${url}`}>{title}</a>
      </h2>
      <div className='list-item-subreddit'>{display_name_prefixed}</div>
      <div className='list-item-author'>{public_description}</div>
    </div>
  </section>)

}

function Post(props) {
  const {subreddit_name_prefixed, title, url, score, author} = props.data;
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
  </section >)
}

class ListItem extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    kind: PropTypes.string.isRequired
  }

  render() {
    return (
      this.props.kind === 't3'
      ? <Post data={this.props.data}/>
      : <Community data={this.props.data}/>)
  }
}

export default ListItem;
