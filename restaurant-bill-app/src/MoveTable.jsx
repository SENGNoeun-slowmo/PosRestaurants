import React, { useState } from 'react';

const MoveTable = () => {
  // Initial data for Table A and Table B
  const [tableA, setTableA] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);
  const [tableB, setTableB] = useState([]);

  // Function to move item from Table A to Table B
  const moveToTableB = (itemId) => {
    // Find the item in Table A
    const itemToMove = tableA.find((item) => item.id === itemId);
    
    if (itemToMove) {
      // Remove item from Table A
      setTableA(tableA.filter((item) => item.id !== itemId));
      // Add item to Table B
      setTableB([...tableB, itemToMove]);
    }
  };

  // Function to move item from Table B to Table A (optional, for two-way movement)
  const moveToTableA = (itemId) => {
    const itemToMove = tableB.find((item) => item.id === itemId);
    
    if (itemToMove) {
      setTableB(tableB.filter((item) => item.id !== itemId));
      setTableA([...tableA, itemToMove]);
    }
  };

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {/* Table A */}
      <div>
        <h2>Table A</h2>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableA.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <button onClick={() => moveToTableB(item.id)}>
                    Move to Table B
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table B */}
      <div>
        <h2>Table B</h2>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableB.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <button onClick={() => moveToTableA(item.id)}>
                    Move to Table A
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoveTable;