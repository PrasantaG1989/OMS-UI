

import { render } from '@testing-library/react';
import MscSummary from './msc-summary';
import { BrowserRouter } from 'react-router-dom';

describe('MscSummary', () => {
  it('should render successfully', async() => {
    const { baseElement } = render(
    <BrowserRouter>
      <MscSummary />
    </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
