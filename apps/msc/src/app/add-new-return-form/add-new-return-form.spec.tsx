import { render } from '@testing-library/react';

import AddNewReturnForm from './add-new-return-form';

describe('AddNewReturnForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddNewReturnForm />);
    expect(baseElement).toBeTruthy();
  });
});
