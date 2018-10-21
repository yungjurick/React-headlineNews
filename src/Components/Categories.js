import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  text-align: center;
  background-color: black;
`;
const Item = styled(Link)`
  margin-right: 0.5rem;
  padding: 0.6rem;
  color: white;
  border: 0.25rem solid white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const categories = [
  {
    name: 'All',
    text: '전체'
  },
  {
    name: 'Business',
    text: '비지니스'
  },
  {
    name: 'Entertainment',
    text: '엔터테인먼트'
  },
  {
    name: 'Health',
    text: '건강'
  },
  {
    name: 'Science',
    text: '과학'
  },
  {
    name: 'Sports',
    text: '스포츠'
  },
  {
    name: 'Technology',
    text: '기술'
  }
];
const Categories = ({ onSelect }) => {
  return (
    <Container>
      {categories.map(category => (
        <Item
          key={category.name}
          to={`/categories/${category.name}`}
          onClick={() => onSelect(category.name)}
        >
          {category.name}
        </Item>
      ))}
    </Container>
  );
};

export default Categories;