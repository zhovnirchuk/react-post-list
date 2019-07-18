import React from 'react';
import styled from 'styled-components';
import { arrayOf, shape, number, string } from 'prop-types';

import PostListItem from './PostListItem';

const PostListContainer = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 44px;
`;

const PostList = ({ posts }) => (
  <PostListContainer>
    {posts.map(
      ({ id, title, body }) => <PostListItem 
          key={id} 
          id={id} 
          title={title} 
          body={body}
      />
    )}
  </PostListContainer>
);

PostList.propTypes = {
  posts: arrayOf(shape({
    id: number,
    title: string,
    body: string,
  })),
};

export default PostList;