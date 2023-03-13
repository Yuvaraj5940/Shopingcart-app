import React, { useContext, useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Errors from '../components/Errors';
import Header from '../components/header';
import { AuthContext } from '../context/authContext';
import { CartProvider } from '../context/cartContext';
import { CounterProvider } from '../context/countercontext';
import { ProductsProvider } from '../context/productsContext';
// import { AuthContext } from '../../context/authContext';
// import { CartProvider } from '../../context/cartContext';
// import { CounterProvider } from '../../context/countercontext';
// import { ProductProvider } from '../../context/productsContext';

// function Dashbordlayout() {
//   const { user } = useContext(AuthContext);
//   if (!user) {
//     return <Navigate to="/auth" replace />;
//   }

//   // const navigat = useNavigate();
//   // useEffect(() => {
//   //   const token = localStorage.getItem('token');

//   //   if (!token) {
//   //     navigat('/auth', { replace: true });
//   //   }
//   // }, []);
//   return (
//     <ProductProvider>
//       <CartProvider>
//         <CounterProvider>
//           <Header />
//           <Outlet />
//         </CounterProvider>
//       </CartProvider>
//     </ProductProvider>
//   );
// }

function DashboardLayout() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <ProductsProvider>
      <CartProvider>
        <CounterProvider>
          <Header />
          <Outlet />
          <Errors />
        </CounterProvider>
      </CartProvider>
    </ProductsProvider>
  );
}

export default DashboardLayout;
