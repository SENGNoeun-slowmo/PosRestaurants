import React, { useState } from 'react';

const MoveTableComponentSelectDelete = () => {
  // Initial data for Table A and Table B
  const [tableA, setTableA] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);
  const [tableB, setTableB] = useState([]);
  // State to track selected items in each table
  const [selectedA, setSelectedA] = useState([]);
  const [selectedB, setSelectedB] = useState([]);

  // Function to move individual item from Table A to Table B
  const moveToTableB = (itemId) => {
    const itemToMove = tableA.find((item) => item.id === itemId);
    if (itemToMove) {
      setTableA(tableA.filter((item) => item.id !== itemId));
      setTableB([...tableB, itemToMove]);
      setSelectedA(selectedA.filter((id) => id !== itemId)); // Clear selection
    }
  };

  // Function to move individual item from Table B to Table A
  const moveToTableA = (itemId) => {
    const itemToMove = tableB.find((item) => item.id === itemId);
    if (itemToMove) {
      setTableB(tableB.filter((item) => item.id !== itemId));
      setTableA([...tableA, itemToMove]);
      setSelectedB(selectedB.filter((id) => id !== itemId)); // Clear selection
    }
  };

  // Function to merge all items from Table A to Table B
  const mergeTableAToB = () => {
    setTableB([...tableB, ...tableA]);
    setTableA([]);
    setSelectedA([]); // Clear selection
  };

  // Function to handle checkbox selection for Table A
  const handleSelectA = (itemId) => {
    setSelectedA((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  // Function to handle checkbox selection for Table B
  const handleSelectB = (itemId) => {
    setSelectedB((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  // Function toDdelete selected items from Table A
  const deleteSelectedA = () => {
    setTableA(tableA.filter((item) => !selectedA.includes(item.id)));
    setSelectedA([]); // Clear selection after deletion
  };

  // Function to delete selected items from Table B
  const deleteSelectedB = () => {
    setTableB(tableB.filter((item) => !selectedB.includes(item.id)));
    setSelectedB([]); // Clear selection after deletion
  };

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      {/* Table A */}
      <div>
        <h2>Table A</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Select</th>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableA.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedA.includes(item.id)}
                    onChange={() => handleSelectA(item.id)}
                  />
                </td>
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
        <div style={{ marginTop: '10px' }}>
          <button
            onClick={mergeTableAToB}
            disabled={tableA.length === 0}
          >
            Merge All to Table B
          </button>
          <button
            onClick={deleteSelectedA}
            disabled={selectedA.length === 0}
            style={{ marginLeft: '10px' }}
          >
            Delete Selected
          </button>
        </div>
      </div>

      {/* Table B */}
      <div>
        <h2>Table B</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Select</th>
              <th>ID</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableB.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedB.includes(item.id)}
                    onChange={() => handleSelectB(item.id)}
                  />
                </td>
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
        <div style={{ marginTop: '10px' }}>
          <button
            onClick={deleteSelectedB}
            disabled={selectedB.length === 0}
          >
            Delete Selected
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoveTableComponentSelectDelete;