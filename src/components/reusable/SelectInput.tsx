import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  options: string[];
  label?: string;
  placeholder?: string;
};

const SelectInput = ({ options, label, placeholder }: Props) => {
  return (
    <>
      <label htmlFor={label} className="block text-neutral-950 text-sm font-normal mb-[6px]">
        {label}
      </label>
      <Select>
        <SelectTrigger className="border border-zinc-500 outline-none focus-within appearance-none w-full h-12 px-2 bg-white rounded-[7px] text-zinc-500 text-base font-normal leading-normal focus:bg-white disabled:opacity-75 disabled:hover:cursor-not-allowed mb-4">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {options.map((option, key) => (
              <SelectItem key={key} value={option}>{option}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectInput;
