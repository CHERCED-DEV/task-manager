import React from 'react';
import { useForm } from 'react-hook-form';
import { FormValues, LoginDataProps, SignUpDataProps } from './account-manager.helpers';
import { GenericInput } from './GenericInput';
import Image from 'next/image';

export const SignUp: React.FC<SignUpDataProps> = ({ sign_up }) => {
    const { handleSubmit, register } = useForm<FormValues>();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de envío del formulario
    };

    return (
        <div className="sign-up">
            <h2 className="sign-up__title">{sign_up?.title}</h2>
            <form className="sign-up__form" onSubmit={handleSubmit(handleFormSubmit)}>
                {sign_up.fields.map((item) => (
                    <GenericInput
                        key={item.value}
                        field={item}
                        register={register}
                        type={item.type}
                    />
                ))}
                <button type="submit" className="sign-up__button">Sign Up</button>
            </form>
        </div>
    );
};

export const LoginManager: React.FC<LoginDataProps> = ({ Login }) => {
    const { handleSubmit, register } = useForm<FormValues>();

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login-manager">
            {Login.providers?.map((provider) => (
                <button key={provider.src} className="login-manager__button">
                    <Image
                        src={provider.src}
                        alt={provider.alt}
                        width={provider.width}
                        height={provider.height}
                    />
                </button>
            ))}
            <div></div>
            <h2 className="login-manager__title">{Login?.title}</h2>
            <form className="login-manager__form" onSubmit={handleSubmit(handleFormSubmit)}>
                {Login.fields.map((item) => (
                    <GenericInput
                        key={item.value}
                        field={item}
                        register={register}
                        type={item.type}
                    />
                ))}
                <button type="submit" className="login-manager__button">Login</button>
            </form>
        </div>
    );
};


