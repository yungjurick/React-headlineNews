import React from 'react';
import '../Styles/NewsItem.scss';

const NewsItem = ({ article }) => {
  const { author, title, description, url, urlToImage } = article;
  return (
    <div className="NewsItem">
      {urlToImage && <img src={urlToImage} alt="news-thumbnail" />}
      <h2>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </h2>
      <p>{description}</p>
      <div className="author">{author}</div>
    </div>
  );
};

export default NewsItem;