import { render } from '@testing-library/react';

import LeftPanel from './left-panel';

describe('LeftPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LeftPanel />);
    expect(baseElement).toBeTruthy();
  });
});
