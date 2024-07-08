import React, { useState } from 'react';

interface RegisterProps {
    toggleForm: () => void;
}

const Register: React.FC<RegisterProps> = ({ toggleForm }) => {


    const [formData, setFormData] = useState({
        email: '',
        userType: 1,
        password: '',
        confirmPassword: '',
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.password != formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const response = await fetch('http://localhost:3050/api/setuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    userType: formData.userType,
                    password: formData.password,
                }),

            });

            if (response.ok) {
                console.log('User created successfully');
            } else {
                console.error('Error creating user:', response.statusText);
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    return (

        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full sm:w-5/6 max-w-screen-xl flex flex-col h-5/6 shadow-xl shadow-custom-black pc:h-fit lg:w-4/6 pc:w-1/2 xl:w-4/6 py-5 xl:py-10 rounded-xl bg-gradient-to-br from-custom-black from-50% to-custom-gold z-10 to-95% ">
                <div className='flex flex-col w-full xs:p-10 p-5 py-2 xs:py-10'  >
                    <div className="flex flex-row w-full items-baseline px-2 mb-2">
                        <div className="border-t-2 h-2 flex-1 mr-2"></div>
                        <h1 className="text-white great-vibes-regular text-3xl 2xs:text-3xl font-bold xs:text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl mb-5">Rik's Barber Shop</h1>
                        <div className="border-t-2 h-2 flex-1 ml-2"></div>
                    </div>
                    <form className="space-y-4 xs:space-y-5 w-full" onSubmit={handleSubmit}>
                        <div className='w-full'>
                            <label htmlFor="email" className='text-xl 2xs:text-xl xs:text-xl md:text-2xl 2xl:text-3xl text-neutral-600 teko-secondary'>Email</label>
                            <input type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border rounded-md"
                                value={formData.email}
                                onChange={handleChange} />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="password" className='text-xl 2xs:text-xl xs:text-xl md:text-2xl 2xl:text-3xl text-neutral-600 teko-secondary'>Password</label>
                            <input type="password"
                                id="password"
                                name="password"
                                className="w-full px-3 py-2 border rounded-md"
                                value={formData.password}
                                onChange={handleChange} />
                        </div>
                        <div className='w-full'>
                            <label htmlFor="password" className='text-xl 2xs:text-xl xs:text-xl md:text-2xl 2xl:text-3xl text-neutral-600 teko-secondary' >Confirmar Password</label>
                            <input type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="w-full px-3 py-2 border rounded-md"
                                value={formData.confirmPassword}
                                onChange={handleChange} />
                        </div>
                        <button type="submit" className="w-full text-white py-2 px-4 rounded-md transition-colors bg-neutral-800 text-xl 2xs:text-xl xs:text-xl md:text-2xl 2xl:text-3xl">Register</button>
                    </form>
                    <div className='flex flex-row mt-5 gap-x-2'>
                        <p className='text-xl 2xs:text-xl xs:text-xl md:text-2xl 2xl:text-3xl text-neutral-600 teko-secondary'>Já tens conta?</p>
                        <a className='text-xl 2xs:text-xl xs:text-xl md:text-2xl 2xl:text-3xl text-custom-gold teko-secondary underline' onClick={toggleForm}>Faz o teu login!</a>
                    </div>
                    <div className='w-full flex flex-row my-2 items-baseline'>
                        <div className="border-t-2 h-2 flex-1 mr-2"></div>
                        <p className="text-white teko-secondary text-xl 2xs:text-xl font-bold xs:text-2xl md:text-3xl 2xl:text-4xl mb-5">Ou</p>
                        <div className="border-t-2 h-2 flex-1 ml-2"></div>
                    </div>
                    <div className='flex flex-row w-full justify-evenly gap-x-2'>
                        <button className='w-1/3 h-10 sm:h-16 md:w-44 2xl:w-64 2xl:h-24 bg-white rounded-lg border-white border-2 '>
                            <a href="#" className='text-white text-xl md:text-2xl 2xl:text-4xl font-semibold flex items-center justify-center'>
                                <img src="google.svg" alt="" className='w-1/3 max-h-5 sm:max-h-10 2xl:max-h-12' />
                            </a>
                        </button>
                        <button className='w-1/3 h-10 sm:h-16 md:w-44 2xl:w-64 2xl:h-24 bg-white rounded-lg border-white border-2 '>
                            <a href="#" className='text-white text-xl md:text-2xl 2xl:text-4xl font-semibold flex items-center justify-center'><img src="facebook.svg" alt="" className='w-1/3 max-h-5 sm:max-h-10 2xl:max-h-12' /></a>
                        </button>
                        <button className='w-1/3 h-10 sm:h-16 md:w-44 2xl:w-64 2xl:h-24 bg-white rounded-lg border-white border-2 '>
                            <a href="#" className='text-white text-xl md:text-2xl 2xl:text-4xl font-semibold flex items-center justify-center'><img src="apple.svg" alt="" className='w-1/3 max-h-5 sm:max-h-10 2xl:max-h-12' /></a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;