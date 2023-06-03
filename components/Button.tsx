import React, { ButtonHTMLAttributes } from 'react';
import { ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    icon?: ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    icon,
    className,
    children,
    ...props
}) => {
    const getButtonStyle = () => {
        switch (variant) {
            case 'primary':
                return 'bg-theme-dark-cyan-500 hover:bg-theme-dark-cyan-600 text-white';
            case 'secondary':
                return 'bg-gray-300 hover:bg-gray-400 text-gray-700';
            default:
                return '';
        }
    };

    return (
        <button
            className={`flex items-center justify-center py-3 px-4 rounded-lg ${getButtonStyle()} ${className}`}
            {...props}
        >
            {icon && <span className="mr-3">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;