import Button from "../Button";
import Input from "../Input";
import { FcGoogle } from "react-icons/fc";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import axios from 'axios';

interface LoginFormProps {
    toggleMode: () => void
}

const LoginForm: React.FC<LoginFormProps> = ({
    toggleMode
}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        },
    });

    return ( 
        <div className="flex flex-col gap-4">
            <Input 
                id="email"
                label="Email"
                type="email"
                register={register}
                errors={errors}
                required
            />
            <Input 
                id="password"
                label="Password"
                type="password"
                register={register}
                errors={errors}
                required
            />
            <Button
                label="Sign In"
                onClick={() => {}}
            />
            <hr />
            <Button
                label="Continue with Google"
                onClick={() => {}}
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