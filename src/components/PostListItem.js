import React from 'react';
import styled from 'styled-components';
import { number, string } from 'prop-types';

const PostContainer = styled.div`
  border: 1px solid lightgrey;
  padding: 30px;
`;

class PostListItem extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.id !== nextProps.id &&
           this.props.title !== nextProps.title &&
           this.props.body !== nextProps.body;
  }

  render() {
    const { title, body } = this.props;
    return (
      <PostContainer>
        <h3>{title}</h3>
        <p>{body}</p>
      </PostContainer>
    );
  }
}

PostListItem.propTypes = {
  id: number,
  title: string,
  body: string,
};

export default PostListItem;