import React from "react";
export function InputComponent({
  type,
  id,
  placeholder,
  label,
  className,
  handleChange,
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="form-label fw-bold">
        {label}
      </label>
      <input
        onChange={(e) => handleChange(e)}
        type={type}
        className="form-control"
        id={id}
        aria-describedby="emailHelp"
        placeholder={placeholder}
      />
    </div>
  );
}
