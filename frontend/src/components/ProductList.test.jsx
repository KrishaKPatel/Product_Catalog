import { render, screen, waitFor } from '@testing-library/react';
import { ProductList } from './ProductList';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';

vi.mock('axios');

const mockProducts = [
  {
    productKey: 1,
    retailer: 'Test Retailer',
    brand: 'Test Brand',
    model: 'Model X',
    productName: 'Test Product',
    productDescription: 'This is a test description.',
    price: 99.99,
  },
];

// eslint-disable-next-line no-undef
describe('ProductList', () => {
  // eslint-disable-next-line no-undef
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockProducts });
  });

  // eslint-disable-next-line no-undef
  it('renders product list from API', async () => {
    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    );

    await waitFor(() => {
      // eslint-disable-next-line no-undef
      expect(screen.getByText(/Test Retailer/)).toBeInTheDocument();
      // eslint-disable-next-line no-undef
      expect(screen.getByText(/Test Brand/)).toBeInTheDocument();
      // eslint-disable-next-line no-undef
      expect(screen.getByText(/Test Product/)).toBeInTheDocument();
      // eslint-disable-next-line no-undef
      expect(screen.getByText(/₹ 99.99/)).toBeInTheDocument();
    });
  });
});
