import { ToastContainer } from 'react-toastify';
import Form from './components/Form';
import List from './components/List';
import { useEffect, useState } from 'react';

const App = () => {
  const [items, setItems] = useState([]);

  const handleRemoveItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    localStorage.setItem('list', JSON.stringify(newItems));
    setItems(newItems);
  };

  useEffect(() => {
    let getList = localStorage.getItem('list');
    if (getList) {
      getList = JSON.parse(localStorage.getItem('list'));
      setItems(getList);
    } else {
      setItems([]);
    }
  }, []);

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form setItems={setItems} items={items} />
      <List items={items} handleRemoveItem={handleRemoveItem} />
    </section>
  );
};

export default App;
