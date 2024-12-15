import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'soft' | 'default'; // You can add more variants as needed
}

const Button: React.FC<ButtonProps> = ({ variant = 'default', children, ...props }) => {
  const baseStyles = 'px-4 py-2 rounded font-medium transition focus:outline-none';
  const variantStyles =
    variant === 'soft'
      ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
      : 'bg-gray-200 text-black hover:bg-gray-300';

  return (
    <button className={`${baseStyles} ${variantStyles}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
