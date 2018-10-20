import React from 'react';
import '../Styles/Categories.scss';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체보기'
  },
  {
    name: 'business',
    text: '비지니스'
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트'
  },
  {
    name: 'health',
    text: '건강'
  },
  {
    name: 'science',
    text: '과학'
  },
  {
    name: 'sports',
    text: '스포츠'
  },
  {
    name: 'technology',
    text: '기술'
  }
];
const Categories = ({ onSelect }) => {
  return (
    <div className="Categories">
      {categories.map(category => (
        <Link
          className="category-item"
          key={category.name}
          to={`/categories/${category.name}`}
          onClick={() => onSelect(category.name)}
        >
          {category.text}
        </Link>
      ))}
    </div>
  );
};

export default Categories;