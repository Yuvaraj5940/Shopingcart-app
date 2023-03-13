import React, { useContext } from 'react';
// import { Field, Formik, Form } from 'formik';
// import { useNavigate } from 'react-router-dom';
// import Input from '../../components/input';
import {
  registerFields,
  registerInitialValues,
} from './registerField';
import CoustomForm from '../../components/costumForm';
import { AuthContext } from '../../context/authContext';
// import axiosInstance from '../../utils/axiosInstance';

// const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

function Register() {
  const { register } = useContext(AuthContext);

  // const navigat = useNavigate();
  // const register = async (values, actions) => {
  //   try {
  //     const { ConfirmPassword, ...rest } = values;
  //     const res = await axiosInstance.post(
  //       'register',
  //       rest,
  //     );
  //     console.log(res.data);
  //     localStorage.setItem('token', JSON.stringify(res.data));

  //     actions.resetForm();
  //     navigat('/', { replace: true });
  //   } catch (error) {
  //     console.log(error);
  //     actions.setErrors({
  //       serverError: error.message,
  //     });
  //   }
  // };
  return (
    <CoustomForm
      initialValues={registerInitialValues}
      fields={registerFields}
      onSubmit={register}
      btnprops={{
        children: 'Sign Up',
      }}
    />
  // <Formik
  //   initialValues={registerInitialValues}
  //   onSubmit={async (values) => {
  //     await wait(3000);
  //     console.log(values);
  //   }}
  //   // validate={(values) => {
  //   //   const errors = {};

  //   //   if (!values.email) {
  //   //     errors.email = 'Required..';
  //   //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) { errors.email = 'invalid email.'; }
  //   //   if (!values.password) {
  //   //     errors.password = 'Required..';
  //   //   }
  //   //   if (!values.ConfirmPassword) {
  //   //     errors.ConfirmPassword = 'Required..';
  //   //   } else if (values.password !== values.ConfirmPassword) { errors.ConfirmPassword = 'Password should match with each other'; }
  //   //   return errors;
  //   // }}
  // >

  //   {({
  //     isValid, dirty, isSubmitting,
  //   }) => (
  //     <Form className="mt-8 space-y-6">
  //       <input type="hidden" name="remember" defaultValue="true" />
  //       <div className="-space-y-px rounded-md shadow-sm">
  //         {
  //           registerFields.map((x) => (
  //             <Field
  //               key={x.name}
  //               {...x}
  //             />
  //           ))
  //         }
  //         {/* <Field
  //           component={Input}
  //           id="name"
  //           name="name"
  //           autoComplete="name"
  //           placeholder="name"
  //         />
  //         <Field
  //           component={Input}
  //           id="email-address"
  //           name="email"
  //           type="email"
  //           autoComplete="email"
  //           placeholder="Email address"
  //         /> */}
  //         {/* <Field
  //           component={Input}
  //           id="password"
  //           name="password"
  //           type="password"
  //           autoComplete="new-password"
  //           placeholder="Password"
  //         /> */}
  //         {/* <Field
  //           component={Input}
  //           id="ConfirmPassword"
  //           name="ConfirmPassword"
  //           type="Password"
  //           autoComplete="new-ConfirmPassword"
  //           placeholder="ConfirmPassword"
  //         /> */}
  //         {/* <div>
  //           <label htmlFor="name" className="sr-only">
  //             name
  //           </label>
  //           <input
  //             id="name"
  //             name="name"
  //             type="text"
  //             autoComplete="name"
  //             className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
  //             placeholder="name"
  //             value={values.name}
  //             onChange={handleChange}
  //             onBlur={handleBlur}
  //           />
  //           {errors.name && touched.name && (<p className="text-sm text-red-500 my-2 font-semibold">{errors.name}</p>)}
  //         </div> */}
  //         {/* <div>
  //           <label htmlFor="email-address" className="sr-only">
  //             Email address
  //           </label>
  //           <input
  //             name="email"

  //             className="relative block w-full appearance-none rounded-none   border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
  //             value={values.email}
  //             onChange={handleChange}
  //             onBlur={handleBlur}
  //           />
  //           {errors.email && touched.email && (<p className="text-sm text-red-500 my-2 font-semibold">{errors.email}</p>)}
  //         </div> */}
  //         {/* <div>
  //           <label htmlFor="password" className="sr-only">
  //             Password
  //           </label>
  //           <input

  //             className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
  //             value={values.password}
  //             onChange={handleChange}
  //             onBlur={handleBlur}
  //           />
  //           {errors.password && touched.password && (<p className="text-sm text-red-500 my-2 font-semibold">{errors.password}</p>)}
  //         </div> */}
  //         {/* <div>
  //           <label htmlFor="Confirm password" className="sr-only">
  //             Confirm Password
  //           </label>
  //           <input

  //             className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
  //             value={values.ConfirmPassword}
  //             onChange={handleChange}
  //             onBlur={handleBlur}
  //           />
  //           {errors.ConfirmPassword && touched.ConfirmPassword && (<p className="text-sm text-red-500 my-2 font-semibold">{errors.ConfirmPassword}</p>)}
  //         </div> */}

  //       </div>

  //       <div>
  //         <button
  //           disabled={isSubmitting || !(isValid && dirty)}
  //           type="submit"
  //           className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
  //         >

  //           Sign in
  //         </button>
  //       </div>
  //     </Form>
  //   )}
  // </Formik>

  );
}

export default Register;
