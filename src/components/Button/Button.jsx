import React from "react";

export default function Button({
  value,
  variant = "contained",
  size = "fullwidth",
  isDisabled = false,
}) {
  const getVariant = () => {
    if (variant === "contained") {
      return isDisabled
        ? "bg-blue-100 text-white rounded-md"
        : "bg-blue-400 text-white rounded-md hover:bg-blue-800";
    } else if (variant === "outline") {
      return isDisabled
        ? "bg-blue-100 text-white rounded-md"
        : "border-blue-400 text-blue-400 border-[2px] rounded-md hover:bg-blue-400 hover:text-white";
    }
  };
  return (
    <button
      className={`py-1 h-[40px] ${
        size === "fullwidth"
          ? "w-full"
          : size === "medium"
          ? "w-[50%]"
          : size === "small"
          ? "px-4"
          : ""
      } ${getVariant()}`}
    >
      {value}
    </button>
  );
}
