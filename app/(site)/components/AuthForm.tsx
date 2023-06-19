'use client';
import {useState, useCallback} from "react";
import {FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";

import {BsGithub, BsGoogle} from 'react-icons/bs';

type Variant = 'LOGIN'|'REGISTER';
const AuthForm = () => {
    const [variant, setVariant]= useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        }
        else {
            setVariant('LOGIN');
        }
    }, [variant]);

const {register, handleSubmit, formState: { errors }} = useForm<FieldValues>
    ({
    defaultValues: {email: '', password: ''}
});
    const onSubmit: SubmitHandler<FieldValues>=(data) => {
        setIsLoading(true);
        if (variant === "REGISTER"){
            //Axios REGISTER
            //console.log(data);
        }
        if (variant === "LOGIN"){
            //NextAuth SignIn
        }
        const socialAction = (action:string) => {
            setIsLoading(true);
            //NextAuth Social SignIn
        }
        // setTimeout(() => {
        //     setIsLoading(false);
        //     toggleVariant();
        // }, 2000);
    };
    
    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="px-6 py-8 backdrop-constrast-50 bg-white/70 drop-shadow-xl sm:rounded-lg sm:px-10">

                {/* Form Login */}
                <form className="space-y-2" onSubmit= {handleSubmit(onSubmit)}>
                    {variant === 'REGISTER' && (
                        <Input 
                            id="name"
                            label="User Name"
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                        />
                    )}
                    <Input
                        id="email"
                        label="Email Address"
                        type="email"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Input 
                        id="password"
                        label="Password"
                        type="password"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <div className="">
                        <Button disabled={isLoading} halfWidth type="submit" >{variant === 'LOGIN' ?'Sign in': 'Register'}</Button>
                    </div>
                </form>

                {/* Other SignIn BTN */}
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 ">
                            </div>
                        </div>
                    </div>
                    <span className="px-2 text-gray-500 relative flex justify-center text-m">
                        Or signing in with
                    </span>
                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialAction('github')}
                        />
                    </div>
                </div>

                {/* EULA */}
                <div className="mt-6">
                    <div className="relative">
                        <div className="w-full border-t border-gray-300">
                            By signing in, you agree to our <pre/>
                            <a className="text-bold text-blue-400" href="#">Terms and Conditions</a> and <a className="text-bold text-blue-400" href="#">Privacy Policy</a>.
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 justify-center text-md font-bold mt-6 px-2 text-gray-500">
                    <div>
                        {variant === 'LOGIN'?'New User?':'Already have an Account?'}
                    </div>
                    <div onClick={toggleVariant} className="underline cursor-pointer">
                        {variant === 'LOGIN'?'Creat an Account':'Login'}   
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthForm;