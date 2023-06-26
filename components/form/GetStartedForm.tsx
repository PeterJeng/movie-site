'use client';

import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "../Input";
import Button from "../Button";
import qs from "query-string";

const GetStartedForm = () => {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            email: '',
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const { email } = data
        const query = { email }
        const url = qs.stringifyUrl({
            url: '/auth',
            query
        })

        router.push(url);
      };

    return ( 
        <div className="flex flex-row justify-center items-center gap-2">
            <div className="w-4/5">
                <Input 
                    id="email"
                    label="Email"
                    type="email"
                    register={register}
                    errors={errors}
                    required
                />
            </div>
           
           <div className="w-1/2">
            <Button
                label="Get Started"
                onClick={handleSubmit(onSubmit)}
            />
           </div>
           
        </div>
     );
}
 
export default GetStartedForm;