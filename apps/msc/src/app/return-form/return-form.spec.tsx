import { render } from '@testing-library/react';

import ReturnForm from './return-form';

describe('ReturnForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReturnForm />);
    expect(baseElement).toBeTruthy();
  });
});
