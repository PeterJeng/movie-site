import Button from "../Button";
import Input from "../Input";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import axios from 'axios';
import { useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";


interface RegisterFormProps {
    toggleMode: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
    toggleMode
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const params = useSearchParams();

    const currentQuery = qs.parse(params.toString());
    let email = ""

    if (currentQuery.email) {
        email = currentQuery.email.toString();
    }

    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: email,
            password: ''
        },
    });
    
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true);
        const { email, name, password } = data

        try {
          await axios.post('/api/register', {
            email,
            name,
            password
          });

          signIn('credentials', {
            ...data,
            redirect: false
            })
            .then((callback) => {
                if (callback?.error) {
                    toast.error(callback.error);
                } else {
                    router.push('/browse');
                }   
            });
        } catch (error) {
            toast.error("Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    };

    return ( 
        <div className="flex flex-col gap-4">
                <Input 
                    id="email"
                    label="Email"
                    type="email"
                    register={register}
                    errors={errors}
                    required
                    disabled={isLoading}
                />
                <Input 
                    id="name"
                    label="Name"
                    register={register}
                    errors={errors}
                    disabled={isLoading}
                    required
                />
                <Input 
                    id="password"
                    label="Password"
                    type="password"
                    register={register}
                    errors={errors}
                    disabled={isLoading}
                    required
                />
                <Button
                    label="Create Account"
                    disabled={isLoading}
                    onClick={handleSubmit(onSubmit)}
                />
                <hr />
                <div className="text-neutral-500 mt-12">
                    Already have an account?
                    <span onClick={toggleMode} className="text-white ml-1 hover:underline cursor-pointer">
                        Sign In.
                    </span>
                </div>  
            </div>
     );
}
 
export default RegisterForm;