import React from 'react';
import styled from 'styled-components';

import PostList from './components/PostList';
import MoreButton from './components/MoreButton';
import SearchBar from './components/SearchBar';
import Loading from './components/Loadinggg';

const AppContainer = styled.div`
`;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.allPosts = [];
    this.state = {
      listPosts: [],
      filteredPosts: [],
      amount: 10,
      isLoading: true,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => this.allPosts = posts)
      .then(
        (allPosts) => this.setState({
          listPosts: allPosts.slice(0, 10),
          filteredPosts: allPosts,
          isLoading: false,
        })
      );
  }

  updateAmount() {
    const { filteredPosts, amount } = this.state;
    const newAmount = Math.min(amount + 10, filteredPosts.length);
    const newListPosts = filteredPosts.slice(0, newAmount);
    this.setState({
      listPosts: newListPosts,
      amount: newAmount,
    });
  }

  filterPosts(query) {
    const filteredPosts = this.allPosts.filter(({ title, body }) => title.match(query) || body.match(query))
    this.setState({
      filteredPosts,
      listPosts: filteredPosts.slice(0, 10),
      amount: 10,
    });
  }

  render() {
    const { listPosts, filteredPosts, amount, isLoading } = this.state;
    return (
      <AppContainer>
        {isLoading ? <Loading /> :
          <React.Fragment>
            <SearchBar onChange={(e) => this.filterPosts(e.target.value)}/>
            <PostList posts={listPosts}/>
            {filteredPosts.length && filteredPosts.length > amount
              ? <MoreButton onClick={() => this.updateAmount()}/>
              : ''
            }
          </React.Fragment>
        }
      </AppContainer>
    );
  }
}

export default App;
