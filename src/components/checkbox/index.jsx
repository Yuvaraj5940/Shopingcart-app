import React from 'react';
import clsx from 'clsx';

function Checkbox({
  field, // { name, value, onChange, onBlur }
  meta,
  className,
  label,
  ...props
}) {
  return (
    <div className="flex items-center">
      <input
        className={clsx(
          'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500',
          {
            [className]: !!className,
          },
        )}
        type="checkbox"
        {...props}
        {...field}
      />
      {/* {errors.checkbox && touched.checkbox && (<p className="text-sm text-red-500 my-2 font-semibold">{errors.checkbox}</p>)} */}
      <label htmlFor={props.id} className="ml-2 block text-sm text-gray-900">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
