import React from 'react';

interface SliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

export default function Slider({ label, value, min, max, onChange }: SliderProps) {
  return (
    <div className="flex items-center flex-1">
      <span className="mr-4 whitespace-nowrap">{label}</span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
}