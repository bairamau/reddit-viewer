import React from 'react';
import List from './List';
import Loading from './Loading';
import {getSearchPosts, getSearchCommunities} from '../utils/api';

class Search extends React.Component {
  state = {
    posts: null,
    communities: null
  }

  componentDidMount() {
    this.updateData();
  }

  updateData = async () => {
    const query = this.props.location.search;
    const [posts, communities] = await Promise.all([getSearchPosts(query), getSearchCommunities(query)]);
    this.setState(() => ({
      posts,
      communities
    }));
  }

  render() {
    return (
      !this.state.posts && !this.state.communities
      ? <Loading/>
    : <div className='list-container'><List items={this.state.posts}/><List items={this.state.communities}/></div>)
  }
}

export default Search;
