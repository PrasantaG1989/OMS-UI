import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ReturnForm from './return-form';

describe('ReturnForm', () => {
  it('should render successfully', async() => {
    const { baseElement } = render(
    <BrowserRouter>
      <ReturnForm />
    </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
