import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Review from '../components/Review';
import axiosInstance from '../utils/axiosInstance';

function Product({ product }) {

  const { cart: cartItem, loading } = useSelector((state) => ({
    cart: state.cart.find(
      (item) => item.productId === product.id,
    ),
    loading: state.loading,
  }));
  console.log('cartItem', cartItem);
  const dispatch = useDispatch();

  const addToCart = useCallback(
    async (data) => {
      const type = 'ADD_CART';
      try {
        dispatch({
          type: `${type}_REQUEST`,
          payload: {
            message: 'Cart Item is adding...',
          },
        });
        const res = await axiosInstance.post('cart', data);
        dispatch({
          type: `${type}_SUCCESS`,
          payload: res.data,
          loadingId: data.productId,
        });
      } catch (error) {
        dispatch({
          type: `${type}_FAIL`,
          payload: {
            message: error.message,
            title: 'Add Cart Failed',
          },

        });
      }
    },
    [product.id],
  );

  const updateCartItem = useCallback(
    async (data) => {
      const type = 'UPDATE_CART';
      try {
        dispatch({
          type: `${type}_REQUEST`,
          payload: { message: 'Cart Item is updating...' },

        });
        const res = await axiosInstance.put(
          `cart/${data.id}`,
          data,
        );
        dispatch({
          type: `${type}_SUCCESS`,
          payload: res.data,

        });
      } catch (err) {
        dispatch({
          type: `${type}_FAIL`,
          payload: {
            message: err.message,
            title: 'Update Cart Failed',
          },

        });
      }
    },
    [],
  );
  const deleteCartItem = useCallback(
    async (data) => {
      const type = 'DELETE_CART';
      try {
        dispatch({
          type: `${type}_REQUEST`,
          payload: { message: 'Cart Item is deleting...' },
        });
        await axiosInstance.delete(`cart/${data.id}`);

        dispatch({
          type: `${type}_SUCCESS`,
          payload: data,
        });
      } catch (err) {
        dispatch({
          type: `${type}_FAIL`,
          payload: {
            message: err.message,
            title: 'Delete Cart Failed',
          },

        });
      }
    },
    [],
  );

  return (
    <div
      key={product.id}
      className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8 my-8"
    >
      <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-3">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover object-center"
        />
      </div>
      <div className="sm:col-span-8 lg:col-span-9">
        <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
          {product.title}
        </h2>

        <section
          aria-labelledby="information-heading"
          className="mt-2"
        >
          <h3 id="information-heading">
            {product.description}
          </h3>

          <p className="text-2xl text-gray-900">
            {product.price}
          </p>

          {/* Reviews */}
          {/* <div className="mt-6">
            <h4 className="sr-only">Reviews</h4>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={clsx(
                      'h-5 w-5 flex-shrink-0 text-gray-900',
                      {
                        'text-gray-200':
                                product.rating.rate <
                                rating,
                      },
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">
                {product.rating.rate}
                {' '}
                out of 5 stars
              </p>
              <a
                href="/"
                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                {product.rating.count}
                {' '}
                reviews
              </a>
            </div>
          </div> */}
          <Review {...Product.rating} />
        </section>

        <section
          aria-labelledby="options-heading"
          className="mt-10"
        >
          <h3
            id="options-heading"
            className="sr-only"
          >
            Product options
          </h3>

          {cartItem ? (
            <div className="flex items-center">
              <button
                type="button"
                disabled={
                        loading[`UPDATE_CART`]
                      }
                onClick={() => updateCartItem({
                  ...cartItem,
                  quantity: cartItem.quantity + 1,
                })}
                className="flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait"
              >
                +
              </button>
              <p className="flex-1 text-center text-2xl font-bold">
                {cartItem.quantity}
              </p>
              <button
                type="button"
                disabled={
                        cartItem.quantity > 1 ?
                          loading[
                            `UPDATE_CART`
                          ] :
                          loading[
                            `DELETE_CART`
                          ]
                      }
                onClick={() => {
                  if (cartItem.quantity > 1) {
                    updateCartItem({
                      ...cartItem,
                      quantity: cartItem.quantity - 1,
                    });
                  } else {
                    deleteCartItem(cartItem);
                  }
                }}
                className="flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait"
              >
                -
              </button>
            </div>
          ) : (
            <button
              type="button"
              disabled={
                      loading[`ADD_CART`]
                    }
              onClick={() => addToCart({
                productId: product.id,
                quantity: 1,
              })}
              className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-400 disabled:cursor-wait"
            >
              Add to bag
            </button>
          )}
        </section>
      </div>
    </div>
  );
}

export default Product;
