import React, { useState } from 'react';
import SizeChartModal from './SizeChartModal';

const CartPage = () => {
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

  const handleSizeChartOpen = () => {
    setIsSizeChartOpen(true);
  };

  const handleSizeChartClose = () => {
    setIsSizeChartOpen(false);
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>
    
      
      <button onClick={handleSizeChartOpen} className="size-chart-button">
        View Size Chart
      </button>

     
      <SizeChartModal isOpen={isSizeChartOpen} onClose={handleSizeChartClose} />
    </div>
  );
};

export default CartPage;
