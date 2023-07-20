import { render } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  it(" i am testing", ()=>{
    expect([1,2,3]).toHaveLength(3);

  })
 it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  // it('should have a greeting as the title', () => {
  //   const { getByText } = render(<App />);
  //   expect(getByText(/Order Summary/gi)).toBeTruthy();
  // }); 
});
