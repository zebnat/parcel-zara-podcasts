import React from "react";

interface FilterBoxProps {
  total: number;
  placeholder: string;
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FilterBox(props: FilterBoxProps) {
  const { total, placeholder, onFilterChange } = props;
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 flex gap-2 ml-auto my-5">
      <span className="bg-blue-500 text-white px-1 rounded-lg font-bold min-w-[30px] text-center flex items-center justify-center">
        {total}
      </span>
      <input
        className="border border-gray-400 grow p-1 rounded-md"
        type="text"
        placeholder={placeholder}
        onChange={onFilterChange}
      ></input>
    </div>
  );
}
