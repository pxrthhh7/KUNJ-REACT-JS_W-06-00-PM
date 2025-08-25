import React, { useState } from 'react';
import { addDoc, collection } from "firebase/firestore";
import { db } from './firebase';
import { useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';

const AdminPanel = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    image: null,
  });

  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handelAdd = async () => {
    try {
      const docRef = await addDoc(collection(db, "product"), {
        name: `${product.name}`,
        description: `${product.description}`,
        price: `${product.price}`,
        category: `${product.category}`,
        image: preview,
      });

      console.log("Document written with ID: ", docRef.id);
      alert("Product Added Successfully!");
      navigate('/product');
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const [content, setContent] = useState('Add')

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-full md:w-64 bg-[#3c7682] text-white shadow-md p-4 md:h-screen">
          <h2 className="text-xl font-bold mb-6 text-center">Admin Menu</h2>
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => setContent('Add')}
              className="bg-white text-[#3c7682] hover:bg-orange-200 font-semibold py-2 px-4 rounded-md text-left"
            >
              ➕ Add Product
            </button>

            <button
              onClick={() => setContent('Delete')}
              className="bg-white text-red-600 hover:bg-red-100 font-semibold py-2 px-4 rounded-md text-left"
            >
              🗑️ Delete Products
            </button>
          </div>
        </div>

        {/* Main Content */}

        {(() => {
          switch (content) {
            case 'Add':
              return (
                <div className="flex-grow p-6">
                  <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-8 mx-auto">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add New Product</h2>
                    <form className="space-y-5">
                      <div>
                        <label className="block mb-1 text-gray-700">Product Name</label>
                        <input
                          value={product.name}
                          onChange={(e) => setProduct({ ...product, name: e.target.value })}
                          type="text"
                          placeholder="Enter product name"
                          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                      </div>

                      <div>
                        <label className="block mb-1 text-gray-700">Description</label>
                        <textarea
                          value={product.description}
                          onChange={(e) => setProduct({ ...product, description: e.target.value })}
                          placeholder="Enter product description"
                          rows="4"
                          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        ></textarea>
                      </div>

                      <div>
                        <label className="block mb-1 text-gray-700">Price (₹)</label>
                        <input
                          value={product.price}
                          onChange={(e) => setProduct({ ...product, price: e.target.value })}
                          type="number"
                          placeholder="Enter price"
                          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                      </div>

                      <div>
                        <label className="block mb-1 text-gray-700">Category</label>
                        <select
                          value={product.category}
                          onChange={(e) => setProduct({ ...product, category: e.target.value })}
                          className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        >
                          <option value="" disabled>Select a category</option>
                          <option value="Diwali">Diwali</option>
                          <option value="Holi">Holi</option>
                          <option value="Rakshabandhan">Rakshabandhan</option>
                          <option value="janmashtami">Janmashtami</option>
                          <option value="uttrayan">Uttrayan</option>
                        </select>
                      </div>

                      <div>
                        <label className="block mb-1 text-gray-700">Product Image</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                              setProduct({ ...product, image: file });
                              const reader = new FileReader();
                              reader.onloadend = () => setPreview(reader.result);
                              reader.readAsDataURL(file);
                            }
                          }}
                          className="w-full border rounded-md px-4 py-2 focus:outline-none"
                        />
                        {preview && (
                          <div className="mt-3">
                            <img src={preview} alt="Preview" className="h-32 w-32 object-cover rounded-md border" />
                          </div>
                        )}
                      </div>

                      <button
                        onClick={handelAdd}
                        type="button"
                        className="w-full bg-[#3c7682] hover:bg-[#21606e] text-white font-semibold py-2 rounded-md transition"
                      >
                        Add Product
                      </button>
                    </form>
                  </div>
                </div>
              );

            case 'Delete':
              return (
                <div className="flex-grow p-6">
                  <h1>Delete Product Page (Comming Soon)</h1>
                </div>
              );

            default:
              return 'Add';
          }
        })()}




      </div>
    </>
  );
};

export default AdminPanel;
