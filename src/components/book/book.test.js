import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Book from './book';

const defaultProps = {
  id:"test-id",
  title:"mockedName",
  authors:["mockedAuthor"],
  imageLinks:{
    smallThumbnail: "mockedSmallThumbnail",
    thumbnail: "mockedThumbnail",
  },
  changeShelf: () => {},
};

it('renders book on none shelf', () => {
  const renderer = new ShallowRenderer();

  renderer.render(
    <Book
      {...defaultProps}
      shelf="none"
    />,
  );

  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

it('renders book on currentlyReading shelf', () => {
  const renderer = new ShallowRenderer();

  renderer.render(
    <Book
      {...defaultProps}
      shelf="currentlyReading"
    />,
  );

  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

it('renders book on wantToRead shelf', () => {
  const renderer = new ShallowRenderer();

  renderer.render(
    <Book
      {...defaultProps}
      shelf="wantToRead"
    />,
  );

  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

it('renders book on read shelf', () => {
  const renderer = new ShallowRenderer();

  renderer.render(
    <Book
      {...defaultProps}
      shelf="read"
    />,
  );

  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
