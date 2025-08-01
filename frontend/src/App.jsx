import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FindProduct from './components/FindProduct';
import { AddProduct } from './components/AddProduct';
import { ProductList } from './components/ProductList';

function Home() {
  return (
    <div className="home-wrapper">
      <h2 className="home-title">Product Catalog Dashboard</h2>
      <div className="home-buttons">
        <Link to="/products" className="custom-btn blue">List All Products</Link>
        <Link to="/add-product" className="custom-btn green">Add New Product</Link>
        <Link to="/find-product" className="custom-btn dark">Find Product</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/find-product" element={<FindProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
