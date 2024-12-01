const BASE_URL = "https://fakestoreapi.com";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw Error("Failed getting products");
  const data = await res.json();
  return data;
}
