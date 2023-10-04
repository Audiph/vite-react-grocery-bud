import Item from './Item';
import { nanoid } from 'nanoid';

const List = ({ items, handleRemoveItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <Item
            key={item.id || nanoid()}
            {...item}
            handleRemoveItem={handleRemoveItem}
          />
        );
      })}
    </div>
  );
};

export default List;
