import React from 'react';
import {render, fireEvent, cleanup, wait} from 'react-testing-library'

import List from './containers/Dogs/components/List';

jest.mock('./containers/Dogs/requests');

afterEach(cleanup);

test('List renders correct number of rows', async () => {
  const { getByText, queryByTestId } = render(
    <List />
  )

  await wait( () => {
    ['breed1', 'breed2', 'sub1 breed3', 'sub2 breed3'].forEach(text => {
      expect(getByText(text)).toBeTruthy();
    })    
    expect(queryByTestId('breed3')).toBeNull();
  });
});