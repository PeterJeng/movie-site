import Button from "../Button";
import Input from "../Input";
import { FcGoogle } from "react-icons/fc";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface LoginFormProps {
    toggleMode: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({
    toggleMode
}) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        signIn('credentials', {
            ...data,
            redirect: false,
            callbackUrl: '/'
        })
        .then((callback) => {
            if (callback?.error) {
                toast.error(callback.error);
            } else {
                router.push('/');
            }   
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    return ( 
        <div className="flex flex-col gap-4">
            <Input 
                id="email"
                label="Email"
                type="email"
                register={register}
                disabled={isLoading}
                errors={errors}
                required
            />
            <Input 
                id="password"
                label="Password"
                type="password"
                register={register}
                disabled={isLoading}
                errors={errors}
                required
            />
            <Button
                label="Sign In"
                onClick={handleSubmit(onSubmit)}
                disabled={isLoading}
            />
            <hr />
            <Button
                label="Continue with Google"
                onClick={() => signIn('google')}
                outline
                icon={FcGoogle}
            />
            <div className="text-neutral-500 mt-12">
                    New to Netflix?
                    <span onClick={toggleMode} className="text-white ml-1 hover:underline cursor-pointer">
                        Sign up now.
                    </span>
                </div>
        </div>
     );
}
 
export default LoginForm;