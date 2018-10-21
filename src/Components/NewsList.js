import React, { Component } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import spinner from '../Assets/spinner.svg'

const Loading = styled.img`
  
  height: 10vh;
  padding: 40vh 45vw;
`;

const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
  }
`;

class NewsList extends Component {
  state = {
    articles: null
  };

  initialize = async () => {
    const { category } = this.props.match.params;
    // match.param 으로 받아서 category 설정*
    try {
      // category 유뮤에 따라 주소가 바뀜
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us${
          category === 'All' ? '' : `&category=${category}`
        }&apiKey=5bc3f55a77874ccb804448cdd570542c`
      );
      // articles 를 state 에 담기
      this.setState({
        articles: response.data.articles
      });
    } catch (e) {}
  };
  componentDidMount() {
    this.initialize();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params !== this.props.match.params) {
      // 카테고리가 바뀌면 initialize 재호출
      this.setState({
        articles: null
      })
      this.initialize();
    }
  }

  render() {
    const { articles } = this.state;
    if (!articles) return <Loading src={spinner} /> // articles 를 아직 안불러왔으면 아무것도 보여주지 않음
    const newsList = articles.map(article => (
      <NewsItem article={article} key={article.title} />
    ));
    return <List>{newsList}</List>;
  }
}

export default NewsList;