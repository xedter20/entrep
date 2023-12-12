import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import Icon from '../Icon/index.tsx';

const MyTextInput = ({
  label,
  icons,
  hasTextareaHeight,
  labelFor,
  options,
  ...props
}) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);

  let controlClassName = [
    'px-3 py-2 max-w-full border-gray-700 rounded w-full dark:placeholder-gray-400',
    meta.touched && meta.error
      ? 'px-3 py-2 max-w-full border-2 border-red-600 rounded w-full dark:placeholder-red-600'
      : '',
    'focus:ring focus:ring-blue-600 focus:border-blue-600 focus:outline-none',
    props.hasTextareaHeight ? 'h-24' : 'h-12',
    props.isBorderless ? 'border-0' : 'border',
    props.isTransparent ? 'bg-transparent' : 'bg-white dark:bg-slate-800',

    ''
  ].join(' ');

  return (
    <>
      <div
        className={
          meta.touched && meta.error
            ? `border-solid border-2 border-red-500`
            : ``
        }>
        {/* border-solid border-2 border-red-500 */}
        {options.map(({ label, value }) => {
          return (
            <div className="flex">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  className="radio checked:bg-blue-500"
                  {...field}
                  {...props}
                  checked={meta.value === value}
                  value={value}
                  onChange={() => {
                    props.setFieldValue('amulet_package', value);
                  }}
                />
                <span className="label-text ml-2">{label}</span>
              </label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyTextInput;
