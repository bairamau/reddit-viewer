import React from 'react';
import { fetchPopularPosts } from '../utils/api';
import Post from './Post';

export default class Popular extends React.Component {
  state = {
    posts: null
  }

  render() {
    return (
      !this.state.posts
        ? <div>Loading</div>
        : <ul>
          {this.state.posts.map(({ data }) => <li key={data.id}><Post data={data} /></li>)}
        </ul>
    )
  }

  updatePosts = async () => {
    const posts = await fetchPopularPosts();
    this.setState(() => ({ posts }));
  }

  componentDidMount() {
    this.updatePosts();
  }

}