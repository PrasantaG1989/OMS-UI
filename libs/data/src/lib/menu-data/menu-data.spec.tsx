import { render } from '@testing-library/react';

import MenuData from './menu-data';

describe('MenuData', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuData />);
    expect(baseElement).toBeTruthy();
  });
});
