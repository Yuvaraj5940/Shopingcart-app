import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../product';
import axiosInstance from '../../utils/axiosInstance';
// import clsx from 'clsx';
// import { CartContext } from '../../context/cartContext';
// import { useLoading } from '../../context/loadingContext';
// import { ProductsContext } from '../../context/productsContext';

function Home() {
  // const {
  //   addToCart,
  //   updateCartItem,
  //   deleteCartItem,
  // } = useContext(CartContext);

  // const { error } = useError();
  const { products, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(data);

  const loadProducts = useCallback(async () => {
    const type = 'LOAD_PRODUCTS';
    try {
      dispatch({
        type: `${type}_REQUEST`,
        payload: { message: 'Products are loading...' },
      });
      const res = await axiosInstance.get('products');
      dispatch({
        type: `${type}_SUCCESS`,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: `${type}_FAIL`,
        payload: {
          message: err.message,
          title: 'Load Products Failed',
        },
      });
    }
  }, []);

  const loadCart = useCallback(async () => {
    const type = 'LOAD_CART';
    try {
      dispatch({
        type: `${type}_REQUEST`,
        payload: { message: 'Products are loading...' },
      });
      const res = await axiosInstance.get('cart');
      dispatch({
        type: `${type}_SUCCESS`,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: `${type}_FAIL`,
        payload: {
          message: err.message,
          title: 'Load Products Failed',
        },
      });
    }
  }, []);

  useEffect(() => {
    loadProducts();
    loadCart();
  }, [loadProducts, loadCart]);

  if (loading.LOAD_PRODUCTS || loading.LOAD_CART) {
    return (
      <div>
        <p>{loading.LOAD_PRODUCTS?.message}</p>
        <p>{loading.LOAD_CART?.message}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      {products.map((product) => <Product key={product.id} product={product} />)}
    </div>
  );
}

export default Home;
