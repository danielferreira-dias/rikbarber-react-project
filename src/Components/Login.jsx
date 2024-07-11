import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import Loader from './Loader';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    // Inside your component function
    const navigate = useNavigate();
    const location = useLocation();

    const handleContinueAsGuest = () => {
        // Logic to continue as guest
        console.log('Continuing as guest');
        navigate('/');  // Redirect to /Home after successful login
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password == "") {
            alert('Type your password');
            return;
        }
        try {
            const response = await fetch('http://localhost:3050/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                if (data.token) {
                    console.log('Logged in successfully');
                    localStorage.setItem('token', data.token); // Store the token
                    console.log('This is the token ->', data.token); // Store the token
                    navigate('/');  // Redirect to /Home after successful login
                } else {
                    console.error('Token not found in response');
                }
            } else {
                console.error('Error logging in:', response.statusText);
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    useEffect(() => {
        const handleRouteChange = () => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 1000); // Loader duration
        };

        handleRouteChange(); // Initial call
    }, [location]);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <>
            {loading && <Loader />}
            <div className="flex flex-col items-center justify-center min-h-screen relative bg-custom-black">
                <video className="absolute inset-0 object-cover w-full h-full grayscale" autoPlay muted loop>
                    <source src="barber-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full sm:w-5/6 max-w-screen-xl flex flex-col shadow-xl shadow-custom-black h-fit lg:w-4/6 pc:w-1/2 xl:w-4/6 py-5 xl:py-10 rounded-xl bg-gradient-to-br from-custom-black from-50% to-custom-gold z-10 to-95%">
                        <div className='flex flex-col w-full xs:p-10 p-5 py-5 xs:py-10'  >
                            <div className="flex flex-row w-full items-baseline px-2 mb-5">
                                <div className="border-t-2 h-2 flex-1 mr-2"></div>
                                <h1 className="text-white great-vibes-regular text-3xl 2xs:text-3xl font-bold xs:text-5xl md:text-6xl 2xl:text-7xl 3xl:text-8xl mb-5">Rik's Barber Shop</h1>
                                <div className="border-t-2 h-2 flex-1 ml-2"></div>
                            </div>
                            <form className="space-y-5 w-full" onSubmit={handleSubmit}>
                                <div className='w-full'>
                                    <label htmlFor="username" className='text-xl 2xs:text-xl xs:text-xl md:text-2xl sm:text-3xl 2xl:text-3xl text-neutral-600 teko-secondary'>Email</label>
                                    <input type="text"
                                        id="email"
                                        name="email"
                                        className="w-full px-3 py-2 border rounded-md"
                                        value={formData.email}
                                        onChange={handleChange} />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="password" className='text-xl 2xs:text-xl xs:text-xl md:text-2xl sm:text-3xl 2xl:text-3xl text-neutral-600 teko-secondary'>Password</label>
                                    <input type="password"
                                        id="password"
                                        name="password" className="w-full px-3 py-2 border rounded-md"
                                        value={formData.password}
                                        onChange={handleChange} />
                                </div>
                                <button type="submit" className="w-full text-white py-2 px-4 rounded-md transition-colors bg-neutral-800">Login</button>
                            </form>
                            <div className='flex flex-row mt-5 gap-x-2'>
                                <p className='text-xl 2xs:text-xl xs:text-xl md:text-2xl sm:text-3xl 2xl:text-3xl text-neutral-600 teko-secondary'>Não tens conta?</p>
                                <Link className='text-xl 2xs:text-xl xs:text-xl md:text-2xl sm:text-3xl 2xl:text-3xl text-custom-gold teko-secondary underline' to={'/Register'}>Regista-te!</Link>
                            </div>
                            <a className='text-xl 2xs:text-xl xs:text-xl md:text-2xl sm:text-3xl 2xl:text-3xl text-custom-gold teko-secondary mt-2'>Esqueceste-te da password?</a>
                            <div className='w-full flex flex-row my-2 items-baseline'>
                                <div className="border-t-2 h-2 flex-1 mr-2"></div>
                                <p className="text-white teko-secondary text-xl 2xs:text-xl font-bold xs:text-2xl md:text-3xl 2xl:text-4xl mb-5">Ou</p>
                                <div className="border-t-2 h-2 flex-1 ml-2"></div>
                            </div>
                            <div className='flex flex-row w-full justify-evenly gap-x-2'>
                                <button className='w-1/3 h-10 sm:h-16 md:w-44 2xl:w-64 2xl:h-20 bg-white rounded-lg border-white border-2 '>
                                    <a href="#" className='text-white text-xl md:text-2xl 2xl:text-4xl font-semibold flex items-center justify-center'>
                                        <img src="google.svg" alt="" className='w-1/3 max-h-5 sm:max-h-10 2xl:max-h-12' />
                                    </a>
                                </button>
                                <button className='w-1/3 h-10 sm:h-16 md:w-44 2xl:w-64 2xl:h-20 bg-white rounded-lg border-white border-2 '>
                                    <a href="#" className='text-white text-xl md:text-2xl 2xl:text-4xl font-semibold flex items-center justify-center'><img src="facebook.svg" alt="" className='w-1/3 max-h-5 sm:max-h-10 2xl:max-h-12' /></a>
                                </button>
                                <button className='w-1/3 h-10 sm:h-16 md:w-44 2xl:w-64 2xl:h-20 bg-white rounded-lg border-white border-2 '>
                                    <a href="#" className='text-white text-xl md:text-2xl 2xl:text-4xl font-semibold flex items-center justify-center'><img src="apple.svg" alt="" className='w-1/3 max-h-5 sm:max-h-10 2xl:max-h-12' /></a>
                                </button>
                            </div>
                            <div className='w-full flex flex-row mt-4 items-baseline'>
                                <div className="border-t-2 h-2 flex-1 mr-2"></div>
                                <p className="text-white teko-secondary text-xl 2xs:text-xl font-bold xs:text-2xl md:text-3xl 2xl:text-4xl mb-5">Ou</p>
                                <div className="border-t-2 h-2 flex-1 ml-2"></div>
                            </div>
                            <a className='text-2xl 2xs:text-2xl xs:text-2xl sm:text-4xl md:text-4xl 2xl:text-4xl text-white teko-secondary underline text-center' onClick={handleContinueAsGuest}>Continuar como Convidado</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login
