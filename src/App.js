import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    { name: 'Laptop', price: 25000 },
    { name: 'iPhone', price: 65000 },
    { name: 'Watch', price: 5000 },
    { name: 'Webcam', price: 4100 },
  ]

  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name='Laptop' price='25000'></Product>
      <Product name='iPhone' price='65000'></Product>
      <Product name='Watch' price='5000'></Product>
      <Product name='Webcam' price='4100'></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name} </h3>
      <h5>Price: {props.price} </h5>
    </div>
  )
}

export default App;
