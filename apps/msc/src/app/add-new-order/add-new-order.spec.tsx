import { render } from '@testing-library/react';

import AddNewOrder from './add-new-order';

describe('AddNewOrder', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddNewOrder />);
    expect(baseElement).toBeTruthy();
  });
});
