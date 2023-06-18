import Button from "../Button";
import Input from "../Input";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form';
import axios from 'axios';

interface RegisterFormProps {
    toggleMode: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
    toggleMode
}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        },
    });
    
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const { email, name, password } = data

        try {
          await axios.post('/api/register', {
            email,
            name,
            password
          });
    
        } catch (error) {
            console.error(error);
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
                />
                <Input 
                    id="name"
                    label="Name"
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
                    label="Create Account"
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