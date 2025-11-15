import { items } from '../../data/items';
import ClientFilter from '../../components/ClientFilter'


export default function CategoryPage({ params }) {
  const category = params.category?.toLowerCase();

  // Debug (optional)
  console.log("Category from URL:", category);

  const filtered = items.filter(
    (item) => item.category.toLowerCase() === category
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Category: {category}</h1>

      {filtered.length === 0 ? (
        <p>No items in this category.</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {filtered.map((item) => (
            <li key={item.id} className="p-2 border rounded">
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
