import React, { useContext } from 'react';
import { Field, Formik } from 'formik';
import CoustomForm from '../../components/costumForm';
import { LoginFields, LoginInitialValues } from './registerFields';
import Checkbox from '../../components/checkbox';
import { AuthContext } from '../../context/authContext';
// import { useNavigate } from 'react-router-dom';
// import axiosInstance from '../../utils/axiosInstance';

// const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

function Login() {
  const { login } = useContext(AuthContext);

  // const navigate = useNavigate();
  // const navigat = useNavigate();
  // const login = async (values, actions) => {
  //   try {
  //     const { ConfirmPassword, ...rest } = values;
  //     const res = await axiosInstance.post(
  //       'login',
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
      initialValues={LoginInitialValues}
      fields={LoginFields}
      onSubmit={login}
      btnprops={{
        children: 'Sign Up',
      }}
    >

      <div className="flex items-center justify-between">
        <Field
          id="rememberMe"
          name="rememberMe"
          component={Checkbox}
          label="Remember Me"
        />

        <div className="text-sm">
          <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
            Forgot your password?
          </a>
        </div>
      </div>
    </CoustomForm>
  );

  // return (
  //   <Formik
  //     initialValues={
  // {
  //   email: '',
  //   password: '',
  //   // checkbox: '',
  // }
  //   }
  //     onSubmit={async (values) => {
  //       await wait(3000);
  //       navigate('/', {
  //         state: {
  //           email: 'yagnesh.modh@gmail.com',
  //           password: 'Password1!',
  //         },
  //         replace: true,
  //       });
  //       console.log(values);
  //     }}
  //     validate={(values) => {
  //       const errors = {};

  //       if (!values.email) {
  //         errors.email = 'Required..';
  //       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) { errors.email = 'invalid email.'; }
  //       if (!values.password) {
  //         errors.password = 'Required..';
  //       }

  //       return errors;
  //     }}
  //   >
  //     {({
  //       values, isValid, touched, handleChange, handleBlur, handleSubmit, errors, dirty, isSubmitting,
  //     }) => (
  //       <form
  //         className="mt-8 space-y-6"
  //         onSubmit={handleSubmit}
  //         noValidate
  //       >
  //         <input type="hidden" name="remember" defaultValue="true" />
  //         <div className="-space-y-px rounded-md shadow-sm">
  //           <div>
  //             <label htmlFor="email-address" className="sr-only">
  //               Email address
  //             </label>
  //             <input
  //               id="email-address"
  //               name="email"
  //               type="email"
  //               autoComplete="email"
  //               className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
  //               placeholder="Email address"
  //               value={values.email}
  //               onChange={handleChange}
  //               onBlur={handleBlur}
  //             />
  //             {errors.email && touched.email && (<p className="text-sm text-red-500 my-2 font-semibold">{errors.email}</p>)}
  //           </div>
  //           <div>
  //             <label htmlFor="password" className="sr-only">
  //               Password
  //             </label>
  //             <input
  //               id="password"
  //               name="password"
  //               type="password"
  //               autoComplete="current-password"
  //               className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
  //               placeholder="Password"
  //               value={values.password}
  //               onChange={handleChange}
  //               onBlur={handleBlur}
  //             />
  //             {errors.password && touched.password && (<p className="text-sm text-red-500 my-2 font-semibold">{errors.password}</p>)}
  //           </div>
  //         </div>

  //         <div className="flex items-center justify-between">
  //           <div className="flex items-center">
  //             <input
  //               id="remember-me"
  //               name="remember-me"
  //               type="checkbox"
  //               className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
  //             />
  //             {/* {errors.checkbox && touched.checkbox && (<p className="text-sm text-red-500 my-2 font-semibold">{errors.checkbox}</p>)} */}
  //             <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
  //               Remember me
  //             </label>
  //           </div>

  //           <div className="text-sm">
  //             <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">
  //               Forgot your password?
  //             </a>
  //           </div>
  //         </div>

  //         <div>
  //           <button
  //             disabled={isSubmitting || !(isValid && dirty)}
  //             type="submit"
  //             className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:bg-slate-500 disabled:cursor-wait"
  //           >

  //             Sign in
  //           </button>
  //         </div>
  //       </form>
  //     )}

  //   </Formik>

  // );
}

export default Login;
