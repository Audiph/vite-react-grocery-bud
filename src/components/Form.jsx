import { nanoid } from 'nanoid';

const Form = ({ setItems, items }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let newItem = Object.fromEntries(formData);
    newItem.completed = false;
    newItem.id = nanoid();
    const newItems = [...items, newItem];
    setItems(newItems);
    console.log(newItems);
    e.currentTarget.reset();
    localStorage.setItem('list', JSON.stringify(newItems));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input type="text" className="form-input" name="name" id="name" />
        <button className="btn" type="submit">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
