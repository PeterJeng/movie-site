'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = 'text',
    disabled,
    required,
    register,
    errors
}) => {
    const registerOptions = {
        required,
        ...(type === 'email') && { pattern: {
                value: /\S+@\S+\.\S+/,
                message: ""
            }
        }
    }

    return ( 
        <div className="w-full relative">
            <input 
                {...register(id, registerOptions)}
                id={id}
                disabled={disabled}
                placeholder=" "
                type={type}
                className={`
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
                    
                    ${errors[id] ? 'border-2 border-red-700' : ''}
                    ${errors[id] ? 'focus:border-red-700' : ''}
                `}
                    
                
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
                    left-6
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-4
                    ${errors[id] ? 'text-red-500' : 'text-zinc-400'}
                `}
            >
                {label}
            </label>
        </div>
     );
}
 
export default Input;