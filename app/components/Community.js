import React from 'react';

function Community(props) {
  const {
    icon_img,
    community_icon,
    public_description,
    title,
    url,
    display_name_prefixed,
  } = props.data;
  return (
    <section className='list-item'>
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
    </section>
  )
}

export default Community;