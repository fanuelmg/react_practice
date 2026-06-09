import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
export default function ProductDetail() {
  const { id } = useParams();
  const {
    data: product,
    loading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-sm mx-auto p-4">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mx-auto"
      />
      <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
      <p className="text-blue-600 font-bold">${product.price}</p>
      <p className="text-sm text-gray-600 mt-2">{product.description}</p>
    </div>
  );
}
