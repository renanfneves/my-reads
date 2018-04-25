import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Shelf from './shelf';

it('renders an empty shelf', () => {
  const renderer = new ShallowRenderer();

  renderer.render(
    <Shelf
      title="mockedTitle"
      books={[]}
      changeShelf={() => {}}
    />,
  );

  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});


it('renders a shelf filled with a book', () => {
  const renderer = new ShallowRenderer();

  renderer.render(
    <Shelf
      title="mockedTitle"
      books={
        [
          {
            id: 'mockedId',
            title: 'mockedTitle',
            authors: [],
            imageLinks: {
              smallThumbnail: 'mockedLink',
              thumbnail: 'mockedLink',
            },
          },
        ]
      }
      changeShelf={() => {}}
    />,
  );

  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
