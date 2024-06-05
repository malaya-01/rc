import React from 'react'

export function Square({ value, onSquareClick }) {
    return (
      <button className="bg-white border border-gray-400 float-left text-2xl font-bold leading-[80px] h-[80px] mr-[-1px] mt-[-1px] p-0 text-center w-[80px]" onClick={onSquareClick}>
        {value}
      </button>
    );
  }
