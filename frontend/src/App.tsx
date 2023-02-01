import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Route, Routes, Navigate } from "react-router-dom"
import { AddProduct } from './pages/addProduct';
import { ListProducts } from './pages/listProducts';



function App() {
  return (
    <Routes>
      <Route path="product/new" element={<AddProduct />} />
      <Route path="product/list" element={<ListProducts />} />
      <Route
        path="*"
        element={<Navigate to="product/list" replace />}
      />
    </Routes>
  )

}

export default App;
