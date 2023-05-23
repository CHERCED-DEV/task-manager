import React, { useState } from 'react'
import Image from 'next/image'
import { AccountManagerDataProps } from './utils/account.manager.interface';
import { AccountForm } from './utils/AccountForm';


export const AccountManager: React.FC<AccountManagerDataProps> = ({ account_mannager }) => {
    const [initialGate, setInitialGate] = useState<boolean>(true);
    const [fromToggle, setFromToggle] = useState<string>()

    const handlerGate = (gate: string): void => {
        if (initialGate === false) {
            setFromToggle(gate);
        } else {
            setInitialGate(!initialGate);
            setFromToggle(gate);
        }
    }
    return (
        <section className='AccountManager'>
            {
                initialGate ? (
                    <>
                        <div className="AccountManager-intro__container">
                            <Image
                                className="AccountManager-intro__img"
                                src={account_mannager.welcome.img.src}
                                alt={account_mannager.welcome.img.alt}
                                width={account_mannager.welcome.img.width}
                                height={account_mannager.welcome.img.height}
                            />
                            <h1 className="AccountManager-intro__title">{account_mannager.welcome.title}</h1>
                        </div>
                    </>
                ) : (
                    <>
                        {fromToggle === "Sign up" && <AccountForm key={account_mannager.sign_up.title} data={account_mannager.sign_up} />}
                        {fromToggle === "Login" && <AccountForm data={account_mannager.login} />}
                    </>
                )
            }
            <div className="AccountManager-intro__buttons">
                {
                    account_mannager.welcome.buttons.map((button) => (
                        <button key={button} onClick={() => handlerGate(button)} className="AccountManager__button">{button}</button>
                    ))
                }
            </div>
        </section>
    )
}
