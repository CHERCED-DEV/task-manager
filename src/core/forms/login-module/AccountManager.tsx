import React, { useState } from 'react'
import Image from 'next/image'
import { LoginManager, SignUp } from './utils/Helpers';


export const AccountManager = () => {
    const [initialGate, setInitialGate] = useState<boolean>(true);
    const [fromToggle, setFromToggle] = useState<string>()
    return (
        <section className='AccountManager'>
            {
                initialGate ? (
                    <>
                        <div>
                            <Image
                                src={ }
                                alt=''
                                width={ }
                                height={ }
                            />
                            <h1></h1>
                        </div>
                        <div>
                            <button></button>
                            <button></button>
                        </div>
                    </>
                ) : (
                    <>
                        {fromToggle === "SignUp" && <SignUp/>}
                        {fromToggle === "Login" && <LoginManager/>}
                    </>
                )
            }
        </section>
    )
}
