import { render } from '@testing-library/react';

import Mockdata from './mockdata';

describe('Mockdata', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mockdata />);
    expect(baseElement).toBeTruthy();
  });
});
