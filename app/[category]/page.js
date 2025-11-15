import { items } from '../data/items'
import ClientFilter from '../../components/ClientFilter'


export default function CategoryPage({ params }) {
const { category } = params
const serverFiltered = items.filter(i => i.category === category)


return (
<div>
<h2 className="text-2xl font-semibold capitalize">Category: {category}</h2>


{serverFiltered.length === 0 ? (
<p className="mt-4 text-slate-600">No items in this category.</p>
) : (
<ClientFilter initialItems={serverFiltered} />
)}
</div>
)
}