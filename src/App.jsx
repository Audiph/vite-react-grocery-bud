import 'react-toastify/dist/ReactToastify.css';
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
    const getList = localStorage.getItem('list');
    const parsedArr = JSON.parse(getList);
    if (parsedArr) {
      setItems(parsedArr);
    }
  }, []);

  return (
    <section className="section-center">
      <div className="Toastify" />
      <Form setItems={setItems} items={items} />
      <List items={items} handleRemoveItem={handleRemoveItem} />
    </section>
  );
};

export default App;
