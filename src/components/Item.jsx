import React, { useState } from 'react';

const Item = ({ id, name, completed, handleRemoveItem }) => {
  const [complete, setComplete] = useState(completed);

  const handleCompleted = (e) => {
    const newIsComplete = e.target.checked;
    let newList = JSON.parse(localStorage.getItem('list'));
    const index = newList.findIndex((obj) => obj.id === id);
    newList[index].completed = newIsComplete;
    localStorage.setItem('list', JSON.stringify(newList));
    setComplete(newIsComplete);
  };

  return (
    <div className="single-item">
      <input type="checkbox" checked={complete} onChange={handleCompleted} />
      <p
        style={
          complete
            ? { textTransform: 'capitalize', textDecoration: 'line-through' }
            : { textTransform: 'capitalize' }
        }
      >
        {name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => handleRemoveItem(id)}
      >
        delete
      </button>
    </div>
  );
};

export default Item;
