import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ShelvesOptions from './shelves-options';

const defaultProps = {
  id:"mockedId",
  changeShelf:() => {}
};

it('renders shelf with default value', () => {
  const renderer = new ShallowRenderer();

  renderer.render(
    <ShelvesOptions
      {...defaultProps}
    />,
  );

  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

it('renders shelf with read value', () => {
  const renderer = new ShallowRenderer();

  renderer.render(
    <ShelvesOptions
      {...defaultProps}
      currentShelf="read"
    />,
  );

  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

it('renders shelf with currentlyReading value', () => {
  const renderer = new ShallowRenderer();

  renderer.render(
    <ShelvesOptions
      {...defaultProps}
      currentShelf="currentlyReading"
    />,
  );

  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});

it('renders shelf with wantToRead value', () => {
  const renderer = new ShallowRenderer();

  renderer.render(
    <ShelvesOptions
      {...defaultProps}
      currentShelf="wantToRead"
    />,
  );

  const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot();
});
