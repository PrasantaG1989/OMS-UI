import { render } from '@testing-library/react';

import MscSummary from './msc-summary';

describe('MscSummary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MscSummary />);
    expect(baseElement).toBeTruthy();
  });
});
