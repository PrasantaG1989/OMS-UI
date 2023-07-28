import { render } from '@testing-library/react';
import { MemoryRouter, createMemoryRouter, RouterProvider } from 'react-router-dom';
import AddNewReturnForm from './add-new-return-form';
import { routeConfig } from '../../main';
const mockUseSubmit = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useSubmit: () => mockUseSubmit,
}));

describe('AddNewReturnForm', () => {
  it('should render successfully', () => {
    const router = createMemoryRouter(routeConfig, {
      initialEntries: ['/return']
    })
    const { baseElement } = render(
      <RouterProvider router={router}/>
    )
    expect(baseElement).toBeTruthy();
  });
});
