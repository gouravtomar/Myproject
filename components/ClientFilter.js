'use client'
import { useState } from 'react'


export default function ClientFilter({ initialItems }) {
const [filtered, setFiltered] = useState(initialItems)


function handleFilter(keyword) {
setFiltered(initialItems.filter(i => i.name.toLowerCase().includes(keyword.toLowerCase())))
}


function resetList() {
setFiltered(initialItems)
}


return (
<div className="mt-4">
<div className="flex gap-2">
<input onChange={e => handleFilter(e.target.value)} placeholder="Search items..." className="flex-1 p-2 border rounded" />
<button onClick={resetList} className="px-3 py-2 bg-slate-200 rounded">Reset</button>
</div>


<ul className="mt-4 space-y-2">
{filtered.map(item => (
<li key={item.id} className="p-3 bg-white rounded shadow-sm">{item.name}</li>
))}


{filtered.length === 0 && <div className="text-slate-500">No items found.</div>}
</ul>
</div>
)
}