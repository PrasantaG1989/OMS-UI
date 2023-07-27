import { render } from '@testing-library/react';

import LeftPannel from './left-pannel';

describe('LeftPannel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LeftPannel />);
    expect(baseElement).toBeTruthy();
  });
});
