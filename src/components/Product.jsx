import { Link } from "react-router-dom";
function Product({ product }) {
  return (
    <div className="border rounded p-4 flex flex-col items-center gap-2">
      <img
        src={product.image}
        alt={product.title}
        className="h-32 object-contain"
      />
      <h3 className="text-sm font-semibold text-center">{product.title}</h3>
      <p className="text-blue-600 font-bold">${product.price}</p>
      <Link
        to={`/products/${product.id}`}
        className="text-sm text-white bg-blue-500 px-3 py-1 rounded hover:bg-blue
600"
      >
        More Detail
      </Link>
    </div>
  );
}
export default Product;
