'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    onChange: any;
    // register: UseFormRegister<FieldValues>;
    // errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = 'text',
    disabled,
    required,
    onChange
    // register,
    // errors
}) => {
    return ( 
        <div className="w-full relative">
            <input 
                onChange={onChange}
                id={id}
                disabled={disabled}
                placeholder=" "
                type={type}
                required={required}
                className="
                    block
                    rounded-md
                    px-6
                    pt-6
                    pb-1
                    w-full
                    text-md
                    text-white
                    bg-neutral-700
                    appearance-none
                    focus:outline-none
                    focus:ring-0
                    peer
                "
            />
            <label
                className={`
                    absolute
                    text-md
                    duration-150
                    transform
                    -translate-y-3
                    top-4
                    z-10
                    origin-[0]
                    text-zinc-400
                    left-6
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-4
                `}
            >
                {label}
            </label>
        </div>
     );
}
 
export default Input;