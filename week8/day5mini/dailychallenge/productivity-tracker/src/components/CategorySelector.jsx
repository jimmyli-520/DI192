// src/components/CategorySelector.jsx
import { useSelector } from 'react-redux';
import { selectAllCategories } from '../selectors/selectors';

const CategorySelector = ({ selectedId, onSelect }) => {
  const categories = useSelector(selectAllCategories);

  return (
    <div>
      <button
        onClick={() => onSelect(null)}
        style={{ fontWeight: !selectedId ? 'bold' : 'normal' }}
      >
        All
      </button>

      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          style={{ fontWeight: selectedId === cat.id ? 'bold' : 'normal' }}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;