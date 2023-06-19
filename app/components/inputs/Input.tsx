import clsx from 'clsx';
import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from 'react-hook-form';

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean;
}
const Input: React.FC<InputProps> = ({
    label,
    id,
    type,
    required,
    register,
    errors,
    disabled}
) =>{
    return(
        <div>
            <label className='block text-lg font-bold leading-6 text-gray-900' htmlFor={id}>{label}</label>
            <div className='mt-2'>
                <input
                id={id}
                type={type}
                autoComplete={id}
                disabled={disabled}
                {...register(id,{required})}
                className={clsx(`
                peer
                invalid:border-pink-500
                invalid:text-pink-600
                focus:invalid:border-pink-500
                focus:invalid:ring-pink-500
                form-input
                block
                w-full
                h-11
                rounded-full
                border-0
                py-1.5
                text-gray-900
                shadow-sm
                ring-1
                ring-inset
                ring-gray-300
                placeholder:text-gray-400
                focus:ring-2
                focus:ring-inset
                focus:ring-sky-600
                sm:text-md
                sm:leading-6,
                errors[id] && "focus:ring-rose-500",
                disabled[id] && "opacity-50 cursor-default"
                `)}
                />
                 <p className="mt-0 mb-0 invisible peer-invalid:visible text-pink-600 text-sm">
                    Please provide a valid email address.
                </p>
            </div>
        </div>
    );
}

export default Input;