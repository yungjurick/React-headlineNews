import React, { Component } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import '../Styles/NewsList.scss';

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
        `https://newsapi.org/v2/top-headlines?country=kr${
          category === 'all' ? '' : `&category=${category}`
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
    if (!articles) return <h1>로딩중...</h1> // articles 를 아직 안불러왔으면 아무것도 보여주지 않음
    const newsList = articles.map(article => (
      <NewsItem article={article} key={article.title} />
    ));
    return <div className="NewsList">{newsList}</div>;
  }
}

export default NewsList;