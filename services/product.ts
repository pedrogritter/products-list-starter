// TODO: Export product query function
// Get data from the API - https://dummyjson.com/docs/products
export async function getProducts(): Promise<unknown[]> {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Error fetching products");
  }
  return res.json();
}
