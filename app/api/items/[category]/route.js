import { items } from "../../../../data/items";



export async function GET(request, { params }) {
  const { category } = params;

  const filtered = items.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return Response.json(filtered);
}
