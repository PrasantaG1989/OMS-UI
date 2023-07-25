import { render } from '@testing-library/react';

import UseScrollDepth from './use-scroll-depth';

describe('UseScrollDepth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseScrollDepth />);
    expect(baseElement).toBeTruthy();
  });
});
