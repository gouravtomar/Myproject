export default function Home() {
return (
<div className="space-y-6">
<h1 className="text-3xl font-bold">Dynamic Filter Project</h1>
<p className="text-slate-600">Select a category to view server-filtered items (and then try client-side search).</p>


<div className="space-x-3">
<a className="inline-block px-4 py-2 bg-indigo-600 text-white rounded" href="/fruits">Fruits</a>
<a className="inline-block px-4 py-2 bg-emerald-600 text-white rounded" href="/vegetables">Vegetables</a>
<a className="inline-block px-4 py-2 bg-red-600 text-white rounded" href="/meat">Meat</a>
</div>


<div className="mt-6 text-sm text-slate-500">Tip: After the page loads, use the search box to filter the already-loaded list client-side (no extra server calls).</div>
</div>
)
}