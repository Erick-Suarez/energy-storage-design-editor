import React, {useState, useEffect} from 'react';
import api from '../api'

const Grid = ({ batteries }) => {
    const grid = []
    Object.keys(batteries).forEach((name) => {
        for (let i = 0; i < batteries[name].quantity; i++) {
            grid.push(<div
                className={`${batteries[name].color}`}
              ></div>);
        }
    });

      
    return (
        <div className="flex justify-center items-center">
          <div className="w-96 h-96 bg-gray-300 border border-gray-300 grid grid-cols-10 grid-rows-10 gap-1">
            {grid}
          </div>
          <div className="ml-4">
            {/* Render legend */}
            <h3 className="font-semibold mb-2">Legend</h3>
            {Object.keys(batteries).map((name, index) => {
              const legendColorClass = batteries[name].color;

              return (
                <div key={name} className="flex items-center mb-2">
                  <div
                    className={`w-4 h-4 rounded-full mr-2 ${legendColorClass}`}
                  ></div>
                  <span className="text-black">{name}</span>
                </div>
              );
            })}
          </div>
        </div>
    );
};

const Sidebar = () => {
    const [batteries, setBatteries] = useState(api.getBatteries());
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalLandDimension, setTotalLandDimension] = useState(0);
    const [totalEnergyDensity, setTotalEnergyDensity] = useState(0);

    useEffect(() => {
        setTotalPrice(calculateTotalPrice());
        setTotalLandDimension(calculateTotalLandDimension());
        setTotalEnergyDensity(calculateTotalEnergyDensity());
      }, [batteries]);
    
    const handleQuantityChange = (e) => {
      const { id, value } = e.target;
      setBatteries((prevConfig) => ({ ...prevConfig, [id]: {...prevConfig[id], quantity: parseInt(value)} }));
      const totalBatteries = Object.keys(batteries).reduce(
        (total, name) => total + batteries[name].quantity,
        0
      );
      const totalTransformers = Math.ceil(totalBatteries / 4);
      setBatteries((prevConfig) => ({
        ...prevConfig,
        ['Transformer']: { ...prevConfig['Transformer'], quantity: totalTransformers}
      }));
    };
    
    // Calculate the total price, land dimension, and energy density
    const calculateTotalPrice = () => {
        return Object.keys(batteries).reduce((total, name) => {
        return total + batteries[name].cost * batteries[name].quantity;
        }, 0);
    };

    const calculateTotalLandDimension = () => {
        return Object.keys(batteries).reduce((total, name) => {
        return total + batteries[name].width * batteries[name].length * batteries[name].quantity;
        }, 0);
    };

    const calculateTotalEnergyDensity = () => {
        return Object.keys(batteries).reduce((total, name) => {
        return total + batteries[name].energy * batteries[name].quantity;
        }, 0);
    };

    return (
      <div className="flex p-4 text-white">
        <div className="w-1/4 bg-black rounded-xl shadow-lg">
          <div className="p-4">
            <div className="text-xl font-semibold mb-4">Enter Product Quantity</div>
            {Object.keys(batteries).map((name) => (
              <div key={name} className="mb-4">
                <label className="block font-semibold mb-1">{name}</label>
                <input
                  type="number"
                  min={0}
                  className="w-full px-2 py-1 border border-gray-300 rounded text-black"
                  placeholder="Enter quantity"
                  id={name}
                  value={batteries[name].quantity}
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
        <div className="w-3/4">
            <Grid batteries={batteries} />
        </div>
      </div>
    );
  };
  

export default Sidebar;
