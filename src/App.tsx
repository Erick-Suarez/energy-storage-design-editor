import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Grid from './components/grid';
import Product from './components/product';
import api from './api';

interface ProductDetails {
  width: number;
  length: number;
  cost: number;
  energy: number;
  quantity: number;
  color: string;
}

interface Products {
  [key: string]: ProductDetails;
}

const App = () => {
    const [products, setProducts] = useState<Products>(api.getProducts());
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [totalLandDimension, setTotalLandDimension] = useState<number>(0);
    const [totalEnergyDensity, setTotalEnergyDensity] = useState<number>(0);

    useEffect(() => {
      // Calculate the total price, land dimension, and energy density
      const calculateTotalPrice = () => {
          return Object.keys(products).reduce((total, name) => {
          return total + products[name].cost * products[name].quantity;
          }, 0);
      };

      const calculateTotalLandDimension = () => {
          return Object.keys(products).reduce((total, name) => {
          return total + products[name].width * products[name].length * products[name].quantity;
          }, 0);
      };

      const calculateTotalEnergyDensity = () => {
          return Object.keys(products).reduce((total, name) => {
          return total + products[name].energy * products[name].quantity;
          }, 0);
      };
      setTotalPrice(calculateTotalPrice());
      setTotalLandDimension(calculateTotalLandDimension());
      setTotalEnergyDensity(calculateTotalEnergyDensity());
    }, [products]);
    
    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      if(!value) {
        return;
      }
    
      const updatedProducts = {...products, [id]: {...products[id], quantity: parseInt(value)} }
      setProducts(updatedProducts);
      const totalBatteries = Object.keys(updatedProducts)
        .filter((name) => name !== 'Transformer')
        .reduce((total, name) => total + updatedProducts[name].quantity, 0);
      const totalTransformers = Math.ceil((totalBatteries) / 4);
      setProducts((prevConfig) => ({
        ...prevConfig,
        Transformer: { ...prevConfig['Transformer'], quantity: totalTransformers}
      }));
    };

    return (
      <div className="flex justify-between p-4 text-white">
        <div className="h-full w-80 bg-stone-900 rounded-xl shadow-lg">
          <div className="p-4">
            <div className="text-xl font-semibold mb-4">Enter Product Quantity</div>
            {Object.keys(products).map((name) => (
              <div key={name} className="flex justify-between m-4">
                  <label className="block font-semibold mb-1" htmlFor={name}>{name}</label>
                  <input
                    type="number"
                    min={0}
                    className="w-16 px-2 py-1 rounded text-black"
                    placeholder="Enter quantity"
                    id={name}
                    value={products[name].quantity}
                    onChange={handleQuantityChange}
                    disabled={name === "Transformer"}
                  />
              </div>
            ))}
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-2">Summary</h3>
              <p>Total Price: ${totalPrice}</p>
              <p>Total Land Dimension: {totalLandDimension} sq. ft</p>
              <p>Total Energy Density: {totalEnergyDensity} kWh</p>
            </div>
          </div>
        </div>
        <div className="flex flex-grow justify-center">
            <Grid />
        </div>
        <div className="h-100 w-80 bg-stone-900 rounded-xl shadow-lg">
          <div className="flex flex-col p-4">
            <div className="text-xl font-semibold mb-4">Products</div>
            <div>
                {Object.keys(products).map((name, _) => {
                  const stack = [];
                  stack.push(<Product
                    key={`${name}-${uuidv4()}`}
                    width={products[name].width}
                    color={products[name].color}
                    disabled
                  />)
                  Array(products[name].quantity).fill(null).map(() => {
                    stack.push(<Product
                      key={`${name}-${uuidv4()}`}
                      width={products[name].width}
                      color={products[name].color}
                    />)
                    return null
                  });

                  return (
                    <div className="flex flex-col">
                      <span className="text-white">{name}</span>
                      <div className="relative w-64 h-16">
                        {stack}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default App;