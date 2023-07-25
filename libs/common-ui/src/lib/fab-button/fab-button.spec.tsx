import { render } from '@testing-library/react';

import FabButton from './fab-button';

describe('FabButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FabButton />);
    expect(baseElement).toBeTruthy();
  });
});
