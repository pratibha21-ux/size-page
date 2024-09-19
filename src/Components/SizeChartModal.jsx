import React from 'react';
import './SizeChartModal.css'; 

const SizeChartModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
     
        <h2 className="modal-title">Size Chart</h2>
        <table className="size-chart-table">
          <thead>
            <tr>
              <th>Size</th>
              <th>Bust</th>
              <th>Shoulder</th>
              <th>Bottom Waist</th>
              <th>Bottom Length</th>
              <th>Brand Size</th>
              <th>Sleeve Length</th> 
              <th>Top Waist</th> 
              <th>Top Length</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>S</td>
              <td>36</td>
              <td>13.5</td>
              <td>26</td>
              <td>39</td>
              <td>S</td>
              <td>18</td>
              <td>32</td>
              <td>44</td>
            </tr>
            <tr>
              <td>M</td>
              <td>38</td>
              <td>14</td>
              <td>28</td>
              <td>39</td>
              <td>M</td>
              <td>18</td>
              <td>34</td>
              <td>44</td>
            </tr>
            <tr>
              <td>L</td>
              <td>40</td>
              <td>14.5</td>
              <td>30</td>
              <td>39</td>
              <td>L</td>
              <td>18</td>
              <td>36</td>
              <td>44</td>
            </tr>
            <tr>
              <td>XL</td>
              <td>42</td>
              <td>15</td>
              <td>32</td>
              <td>39</td>
              <td>XL</td>
              <td>18</td>
              <td>38</td>
              <td>44</td>
            </tr>
            <tr>
              <td>XXL</td>
              <td>44</td>
              <td>15.5</td>
              <td>34</td>
              <td>39</td>
              <td>XXL</td>
              <td>18</td>
              <td>40</td>
              <td>44</td>
            </tr>
          </tbody>
        </table>
        
      </div>
      <button className="close-button" onClick={onClose}>
          X
        </button>
    </div>
  );
};

export default SizeChartModal;
