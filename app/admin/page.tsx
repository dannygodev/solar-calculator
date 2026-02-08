"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import Navigation from "../components/Navigation";

interface Product {
  id: number;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: string;
  image: string;
  category: string;
  categoryEn: string;
  brand: string;
}

export default function AdminPanel() {
  const { t } = useLanguage();
  const { isAdmin } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [formData, setFormData] = useState<Partial<Product>>({});

  useEffect(() => {
    if (!isAdmin) {
      router.push("/");
      return;
    }
    loadProducts();
  }, [isAdmin, router]);

  const loadProducts = () => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    }
  };

  const saveProducts = (updatedProducts: Product[]) => {
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddNew = () => {
    setIsAddingNew(true);
    setEditingProduct(null);
    setFormData({
      name: "",
      nameEn: "",
      description: "",
      descriptionEn: "",
      price: "",
      image: "/solar-panel-1.jpg",
      category: "",
      categoryEn: "",
      brand: "SRNE",
    });
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsAddingNew(false);
    setFormData(product);
  };

  const handleSave = () => {
    if (isAddingNew) {
      const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
      const newProduct = { ...formData, id: newId } as Product;
      saveProducts([...products, newProduct]);
    } else if (editingProduct) {
      const updatedProducts = products.map(p =>
        p.id === editingProduct.id ? { ...formData, id: editingProduct.id } as Product : p
      );
      saveProducts(updatedProducts);
    }
    setEditingProduct(null);
    setIsAddingNew(false);
    setFormData({});
  };

  const handleDelete = (id: number) => {
    if (confirm(t.admin.confirmDelete)) {
      const updatedProducts = products.filter(p => p.id !== id);
      saveProducts(updatedProducts);
    }
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setIsAddingNew(false);
    setFormData({});
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation currentPage="admin" variant="dark" />

      <main className="container mx-auto px-4 py-12 max-w-7xl">
        <Link
          href="/"
          className="inline-flex items-center text-png-orange hover:text-png-orange-dark dark:text-png-orange-light dark:hover:text-png-orange-light mb-8 font-medium"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          {t.admin.backToHome}
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
            {t.admin.title}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
            {t.admin.subtitle}
          </p>
          <button
            onClick={handleAddNew}
            className="bg-gradient-to-r from-png-orange to-png-orange-light text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105"
          >
            {t.admin.addProduct}
          </button>
        </div>

        {/* Edit Form */}
        {(editingProduct || isAddingNew) && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {isAddingNew ? t.admin.addProduct : t.admin.editProduct}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t.admin.productName}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t.admin.productNameEn}
                </label>
                <input
                  type="text"
                  name="nameEn"
                  value={formData.nameEn || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t.admin.description}
                </label>
                <textarea
                  name="description"
                  value={formData.description || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t.admin.descriptionEn}
                </label>
                <textarea
                  name="descriptionEn"
                  value={formData.descriptionEn || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t.admin.category}
                </label>
                <input
                  type="text"
                  name="category"
                  value={formData.category || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t.admin.categoryEn}
                </label>
                <input
                  type="text"
                  name="categoryEn"
                  value={formData.categoryEn || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t.admin.price}
                </label>
                <input
                  type="text"
                  name="price"
                  value={formData.price || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t.admin.brand}
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  {t.admin.image}
                </label>
                <input
                  type="text"
                  name="image"
                  value={formData.image || ""}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleSave}
                className="bg-gradient-to-r from-png-orange to-png-orange-light text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
              >
                {t.admin.saveProduct}
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-400 dark:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-500 dark:hover:bg-gray-700 transition-all duration-300"
              >
                {t.admin.cancel}
              </button>
            </div>
          </div>
        )}

        {/* Products List */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Products ({products.length})
          </h2>
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {product.nameEn}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{product.descriptionEn}</p>
                    <div className="mt-2 flex items-center gap-4 text-sm">
                      <span className="text-png-orange dark:text-png-orange-light font-bold">
                        {product.price}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {product.categoryEn}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        Brand: {product.brand}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 ml-4">
                    <button
                      onClick={() => handleEdit(product)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors whitespace-nowrap"
                    >
                      {t.admin.editProduct}
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors whitespace-nowrap"
                    >
                      {t.admin.deleteProduct}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
