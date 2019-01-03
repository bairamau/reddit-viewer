import React from 'react';
import { getCommunityPosts } from '../utils/api';
import List from './List';
import Loading from './Loading';
import Post from './Post';

class Popular extends React.Component {
  componentDidMount() {
    this.updatePosts();
  }

  state = {
    posts: null
  }

  updatePosts = async () => {
    const posts = await getCommunityPosts('popular');
    this.setState(() => ({ posts }));
  }

  render() {
    return (
      !this.state.posts
        ? <Loading />
        :
        <List items={this.state.posts}>
          {(data) => <Post data={data} />}
        </List>
    )
  }
}

export default Popular;
