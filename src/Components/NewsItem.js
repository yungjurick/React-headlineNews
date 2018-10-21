import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-size: 0.65rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3vh;
  height: 40vh;
  width: 28vw;
  /* box-shadow: 2px 2px; */
  /* border: 1px solid rgb(200, 200, 200); */
`;
const LinkTag = styled.a`
  color: black;
  text-decoration: none;
`;
const Image = styled.img`
  width: 10vw;
  height: 15vh;
`;

const NoImage = styled.div`
  background-color: black;
  width: 10vw;
  height: 15vh;
`;


const NewsItem = ({ article }) => {
  const { author, title, description, url, urlToImage } = article;
  return (
    <Container>
      {urlToImage ? <Image src={urlToImage} /> : <NoImage />}
      <h2>
        <LinkTag href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </LinkTag>
      </h2>
      <p>{description}</p>
      <div className="author">{author}</div>
    </Container>
  );
};

export default NewsItem;