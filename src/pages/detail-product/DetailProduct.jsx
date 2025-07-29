import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { FaStar } from "react-icons/fa";


const DetailProduct = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/products/${id}`);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  if (loading) return <p className="text-center mt-4">Yuklanmoqda...</p>;
  if (error) return <p className="text-red-600 mt-4 text-center">Xatolik yuz berdi: {error.message}</p>;
  if (!data) return <p className="text-center mt-4">Ma'lumot topilmadi</p>;

  const product = data;
  const images = product.images || [product.thumbnail];
  const activeImage = selectedImage || images[0];

  const Stars = () => {
    return (
      <div style={{ display: "flex", gap: "4px" }}>
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} color="gold" size={20} />
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 pt-[100px]">
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
        {images.map((img) => (
          <img
            key={img} 
            src={img}
            alt=""
            className={`w-20 h-20 object-cover rounded cursor-pointer border ${activeImage === img ? 'border-black' : 'border-gray-300'}`}
            onClick={() => setSelectedImage(img)}
          />
             ))}
        </div>
        <div className="flex-1">
          <img src={activeImage} alt="Main" className="w-full rounded-lg object-cover" />
        </div>
      </div>

     
      <div>
        <nav className="text-sm text-gray-400 mb-2">
          Home / Shop / <span className="text-black">{product.title}</span>
        </nav>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-xl text-gray-700 mt-2">Rs. <span>{product.price} USD</span></p>

        <div className="flex items-center mt-2 gap-2">
          <span><Stars /></span>
          <span className="text-sm text-gray-500">5 Customer Review</span>
        </div>

        <p className="mt-4 text-gray-600">{product.description}</p>

        <div className="mt-6">
          <h4 className="font-semibold mb-2">Size</h4>
          <div className="flex gap-3">
            {["L", "XL", "XS"].map(size => (
              <button key={size} className="border px-4 py-1 rounded hover:bg-gray-100">{size}</button>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold mb-2">Color</h4>
          <div className="flex gap-3">
            {["#7E33E0", "#000", "#FFD700"].map(color => (
              <div
                key={color}
                className="w-6 h-6 rounded-full border cursor-pointer"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-6">
          <div className="flex border rounded">
              <button className='px-3 py-1' onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</button>
              <span className='px-4 py-1'>{quantity}</span>
              <button className='px-3 py-1' onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className="px-6 py-2 border rounded hover:bg-gray-100">Add To Cart</button>
          <button className="px-6 py-2 border rounded hover:bg-gray-100">+ Compare</button>
        </div>

        <div className="mt-6 text-sm text-gray-600 space-y-1">
          <p><span className="font-semibold">SKU</span> : SS00{id}</p>
          <p><span className="font-semibold">Category</span> : {product.category}</p>
          <p><span className="font-semibold">Brand</span> : {product.brand}</p>
          <p><span className="font-semibold">Tags</span> : Furniture, Home</p>
        </div>
      </div>
    </div>
    
  );
};

export default  DetailProduct