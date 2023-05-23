import React from 'react'
import Image from 'next/image';
import { GenericInput } from './GenericInput'
import { AccountManagerDataProps, FormValues } from './account-manager.helpers';
import { useForm } from 'react-hook-form';


export const AccountForm: React.FC<AccountManagerDataProps> = ({ data }) => {
    const { handleSubmit, register } = useForm<FormValues>();

    const handleFormSubmit = (data: FormValues) => {

    };

    return (
        <>
            {
                data.providers ? (
                    <div className="Accountmanager__header">
                        {data.providers?.map((provider) => (
                            <button key={provider.src} className="AccountManager__button-provider">
                                <Image
                                    className="AccountManager__pic-provider"
                                    src={provider.src}
                                    alt={provider.alt}
                                    width={provider.width}
                                    height={provider.height}
                                />
                            </button>
                        ))}
                    </div>
                ) : null
            }
            <h2 className="AccountManager__title">{data?.title}</h2>
            <form className="AccountManager__form" onSubmit={handleSubmit(handleFormSubmit)}>
                {data.fields.map((item) => (
                    <GenericInput
                        key={item.value}
                        field={item}
                        register={register}
                        type={item.type}
                    />
                ))}
                <button type="submit" className="AccountManager__button">Login</button>
            </form>
        </>
    )
}
