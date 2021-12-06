import { useState } from 'react/cjs/react.development';
import './App.css';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import Modal from './components/Modal'

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  console.log('selectedProduct', selectedProduct)
  return (
    <div className="App">
      {selectedProduct ? <ProductDetail product={selectedProduct} /> : <ProductList setSelectedProduct={setSelectedProduct}/>}
    </div>
  );
}

export default App;
