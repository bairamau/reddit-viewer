import React from 'react';
import List from './List';
import Loading from './Loading';
import Post from './Post';
import Community from './Community'
import { NavLink, Route } from 'react-router-dom'
import { getSearchPosts, getSearchCommunities } from '../utils/api';

class Search extends React.Component {
  state = {
    posts: null,
    communities: null,
  }

  componentDidMount() {
    this.updateData();
  }

  updateData = async () => {
    const query = this.props.location.search;
    const [posts, communities] = await Promise.all([getSearchPosts(query), getSearchCommunities(query)]);
    this.setState(() => ({
      posts,
      communities,
    }));
  }

  render() {
    const { match, location } = this.props
    return (
      !this.state.posts && !this.state.communities
        ? <Loading />
        :
        <div>
          <nav>
            <ul className='nav-list nav-results'>
              <li>
                <NavLink
                  className='nav-results-link'
                  activeClassName='nav-results-link-active'
                  to={
                    {
                      pathname: `${match.path}/communities`,
                      search: location.search
                    }
                  }
                >
                  Communities
                </NavLink>
              </li>
              <li>
                <NavLink
                  className='nav-results-link'
                  activeClassName='nav-results-link-active'
                  to={
                    {
                      pathname: `${match.path}/posts`,
                      search: location.search
                    }
                  }
                >
                  Posts
                </NavLink>
              </li>
            </ul>
          </nav>
          <Route path={`${match.path}/communities`} render={() => (
            <List items={this.state.communities}>
              {(data) => <Community data={data} />}
            </List>
          )} />

          <Route path={`${match.path}/posts`} render={() => (
            <List items={this.state.posts}>
              {(data) => <Post data={data} />}
            </List>
          )} />
        </div>
    )
  }
}

export default Search;
