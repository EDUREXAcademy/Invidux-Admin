import React from 'react';
import { UseFormRegister, FieldValues, DeepMap, FieldError, UseFormSetValue } from 'react-hook-form';
import { NumericFormat } from 'react-number-format';

// Define the props interface for the NumericInput component
interface NumericInputProps {
  label: string;
  name: string;
  placeholder: string;
  suffix?: string;
  prefix?: string;
  thousandSeparator?: string;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>
  errors: DeepMap<FieldValues, FieldError>;
  required?: string;
}

const FormattedNumericInput: React.FC<NumericInputProps> = ({
  label,
  name,
  placeholder,
  suffix = "",
  prefix = "",
  thousandSeparator,
  register,
  setValue,
  errors,
  required
}) => {
  return (
    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-normal mb-1.5 leading-tight">
        {label}
      </label>
      <NumericFormat
        id={name}
        {...register(name, {
          required: required ? `${label} is required` : undefined,
        })}
        className="inline-flex justify-start items-center gap-2 w-full h-12 px-2 bg-white rounded-[7px] border border-zinc-500 text-zinc-500 text-base font-normal leading-normal appearance-none outline-none focus:bg-white disabled:opacity-50 disabled:hover:cursor-not-allowed"
        suffix={suffix}
        thousandSeparator={thousandSeparator}
        placeholder={placeholder}
        onValueChange={(values, sourceInfo) => {
          setValue(name, values.value, { shouldValidate: true });
        }}
      />
      {errors?.[name] && (
        <span className="text-red-500 text-xs mt-1">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default FormattedNumericInput;