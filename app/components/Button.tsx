'use client';
import clsx from 'clsx';

interface ButtonProps{
    type?: 'button' |'submit'|'reset'| undefined;
    //fullWidth?:boolean;
    halfWidth?:boolean;
    children?:React.ReactNode;
    onClick?:() => void;
    secondary?:boolean;
    danger?:boolean;
    disabled?:boolean;
}

const Button:React.FC<ButtonProps> = ({
    type,
    halfWidth,
    //fullWidth,
    children,
    onClick,
    secondary,
    danger,
    disabled
}) =>{
    return(
        <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={clsx(`flex justify-center rounded-full px-3 py-3 text-xl mx-auto font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4`,
        disabled && "opacity-50 cursor-default",
        halfWidth ? 'w-2/3' : 'w-2/3',
        //fullWidth && "w-full",
        secondary ? 'text-gray-900' : 'text-white',
        danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !secondary && !danger && "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600 shadow-lg shadow-cyan-500/50",
        )}>
            {children}
        </button>
    );
    
}

export default Button;