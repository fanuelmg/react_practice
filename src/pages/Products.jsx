import { useFetch } from "../hooks/useFetch";
import Product from "../components/Product";
function Products() {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <h1>Products Page</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </>
  );
}
export default Products;
