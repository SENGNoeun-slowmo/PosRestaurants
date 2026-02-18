import React, { useState } from 'react';
import { saveAs } from 'file-saver';

const MoveTableComponent = () => {
  // Initial data for Table A and Table B with completed status
  const [tableA, setTableA] = useState([
    { id: 1, name: 'Item 1', completed: false },
    { id: 2, name: 'Item 2', completed: false },
    { id: 3, name: 'Item 3', completed: false },
  ]);
  const [tableB, setTableB] = useState([]);
  // State to track selected items in each table
  const [selectedA, setSelectedA] = useState([]);
  const [selectedB, setSelectedB] = useState([]);
  // State to track saved data history
  const [savedHistory, setSavedHistory] = useState([]);
  // State to control which table's selected data to show
  const [showSelectedTable, setShowSelectedTable] = useState(null);

  // Function to move individual item from Table A to Table B and mark as completed
  const moveToTableB = (itemId) => {
    const itemToMove = tableA.find((item) => item.id === itemId);
    if (itemToMove) {
      setTableA(tableA.filter((item) => item.id !== itemId));
      setTableB([...tableB, { ...itemToMove, completed: true }]);
      setSelectedA(selectedA.filter((id) => id !== itemId));
    }
  };

  // Function to move individual item from Table B to Table A and mark as not completed
  const moveToTableA = (itemId) => {
    const itemToMove = tableB.find((item) => item.id === itemId);
    if (itemToMove) {
      setTableB(tableB.filter((item) => item.id !== itemId));
      setTableA([...tableA, { ...itemToMove, completed: false }]);
      setSelectedB(selectedB.filter((id) => id !== itemId));
    }
  };

  // Function to merge all items from Table A to Table B and mark as completed
  const mergeTableAToB = () => {
    const confirmMerge = window.confirm('Are you sure you want to merge all items from Table A to Table B?');
    if (confirmMerge) {
      setTableB([...tableB, ...tableA.map((item) => ({ ...item, completed: true }))]);
      setTableA([]);
      setSelectedA([]);
    }
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

  // Function to delete selected items from Table A
  const deleteSelectedA = () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${selectedA.length} selected item(s) from Table A?`);
    if (confirmDelete) {
      setTableA(tableA.filter((item) => !selectedA.includes(item.id)));
      setSelectedA([]);
    }
  };

  // Function to delete selected items from Table B
  const deleteSelectedB = () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${selectedB.length} selected item(s) from Table B?`);
    if (confirmDelete) {
      setTableB(tableB.filter((item) => !selectedB.includes(item.id)));
      setSelectedB([]);
    }
  };

  // Function to save selected items from Table A to history and file
  const saveSelectedA = () => {
    if (selectedA.length === 0) {
      window.alert('No items selected in Table A to save.');
      return;
    }
    const selectedItems = tableA.filter((item) => selectedA.includes(item.id)).map((item) => ({ ...item, source: 'TableA' }));
    setSavedHistory((prev) => [...prev, ...selectedItems]);
    const blob = new Blob([JSON.stringify(selectedItems, null, 2)], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'tableA_selected.txt');
  };

  // Function to save selected items from Table B to history and file
  const saveSelectedB = () => {
    if (selectedB.length === 0) {
      window.alert('No items selected in Table B to save.');
      return;
    }
    const selectedItems = tableB.filter((item) => selectedB.includes(item.id)).map((item) => ({ ...item, source: 'TableB' }));
    setSavedHistory((prev) => [...prev, ...selectedItems]);
    const blob = new Blob([JSON.stringify(selectedItems, null, 2)], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'tableB_selected.txt');
  };

  // Function to save all items from Table A to history and file
  const saveAllA = () => {
    if (tableA.length === 0) {
      window.alert('No items in Table A to save.');
      return;
    }
    const items = tableA.map((item) => ({ ...item, source: 'TableA' }));
    setSavedHistory((prev) => [...prev, ...items]);
    const blob = new Blob([JSON.stringify(items, null, 2)], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'tableA_all.txt');
  };

  // Function to save all items from Table B to history and file
  const saveAllB = () => {
    if (tableB.length === 0) {
      window.alert('No items in Table B to save.');
      return;
    }
    const items = tableB.map((item) => ({ ...item, source: 'TableB' }));
    setSavedHistory((prev) => [...prev, ...items]);
    const blob = new Blob([JSON.stringify(items, null, 2)], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, 'tableB_all.txt');
  };

  // Function to show selected data for Table A
  const showSelectedAData = () => {
    setShowSelectedTable('TableA');
  };

  // Function to show selected data for Table B
  const showSelectedBData = () => {
    setShowSelectedTable('TableB');
  };

  // Function to cancel display and clear selection for the displayed table
  const cancelDisplay = () => {
    setShowSelectedTable(null);
  };

  // Function to cancel an individual item from displayed selection
  const cancelItem = (itemId, table) => {
    if (table === 'TableA') {
      setSelectedA((prev) => prev.filter((id) => id !== itemId));
    } else if (table === 'TableB') {
      setSelectedB((prev) => prev.filter((id) => id !== itemId));
    }
    // If no items remain selected, clear the display
    if ((table === 'TableA' && selectedA.filter((id) => id !== itemId).length === 0) ||
        (table === 'TableB' && selectedB.filter((id) => id !== itemId).length === 0)) {
      setShowSelectedTable(null);
    }
  };

  // Get selected data based on showSelectedTable
  const displayedSelectedData = showSelectedTable === 'TableA'
    ? tableA.filter((item) => selectedA.includes(item.id))
    : showSelectedTable === 'TableB'
    ? tableB.filter((item) => selectedB.includes(item.id))
    : [];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Table A */}
        <div>
          <h2>Table A (To Do)</h2>
          <button
            onClick={showSelectedAData}
            disabled={selectedA.length === 0}
            style={{ marginBottom: '10px' }}
          >
            Show Selected Table A Data
          </button>
          <table border="1">
            <thead>
              <tr>
                <th>Select</th>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
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
                  <td>{item.completed ? 'Completed' : 'Not Completed'}</td>
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
            <button
              onClick={saveSelectedA}
              disabled={selectedA.length === 0}
              style={{ marginLeft: '10px' }}
            >
              Save Selected to File
            </button>
            <button
              onClick={saveAllA}
              disabled={tableA.length === 0}
              style={{ marginLeft: '10px' }}
            >
              Save All to File
            </button>
          </div>
        </div>

        {/* Table B */}
        <div>
          <h2>Table B (Completed)</h2>
          <button
            onClick={showSelectedBData}
            disabled={selectedB.length === 0}
            style={{ marginBottom: '10px' }}
          >
            Show Selected Table B Data
          </button>
          <table border="1">
            <thead>
              <tr>
                <th>Select</th>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
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
                  <td>{item.completed ? 'Completed' : 'Not Completed'}</td>
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
            <button
              onClick={saveSelectedB}
              disabled={selectedB.length === 0}
              style={{ marginLeft: '10px' }}
            >
              Save Selected to File
            </button>
            <button
              onClick={saveAllB}
              disabled={tableB.length === 0}
              style={{ marginLeft: '10px' }}
            >
              Save All to File
            </button>
          </div>
        </div>
      </div>

      {/* Display Selected Data */}
      {displayedSelectedData.length > 0 && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <h2>Displayed Selected Data (Table {showSelectedTable})</h2>
          <button onClick={cancelDisplay} style={{ marginBottom: '10px' }}>
            Cancel
          </button>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {displayedSelectedData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.completed ? 'Completed' : 'Not Completed'}</td>
                  <td>
                    <button onClick={() => cancelItem(item.id, showSelectedTable)}>
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MoveTableComponent;