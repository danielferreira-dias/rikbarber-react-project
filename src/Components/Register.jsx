import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function validatePassword(password) {
    // Regular expressions to check for conditions
    const hasUpperCase = /[A-Z]/.test(password); // Check for at least one uppercase letter
    const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password); // Check for at least one special character
    const hasNumber = /\d/.test(password); // Check for at least one digit
    const hasMinimumLength = password.length >= 6; // Check for minimum length of 6 characters

    // Check all conditions
    if (!hasUpperCase) {
        return 'Password must contain at least one uppercase letter';
    } else if (!hasSpecialCharacter) {
        return 'Password must contain at least one special character';
    } else if (!hasNumber) {
        return 'Password must contain at least one number';
    } else if (!hasMinimumLength) {
        return 'Password must be at least 6 characters long';
    }

    // If all conditions are met
    return null;
}


const Register = () => {

    // Inside your component function
    const navigate = useNavigate();

    const [passwordValidation, setPasswordValidation] = useState({
        uppercase: false,
        specialCharacter: false,
        number: false,
        minLength: false,
    });

    const [formData, setFormData] = useState({
        email: '',
        userType: 1,
        password: '',
        confirmPassword: '',
    });

    const [fieldValidity, setFieldValidity] = useState({
        email: true,
        password: true,
        confirmPassword: true,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Update password validation status
        setFieldValidity({
            email: true,
            password: true,
            confirmPassword: true,
        });
    };

    const handleChangePassword = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Update password validation status
        setPasswordValidation({
            uppercase: /[A-Z]/.test(value),
            specialCharacter: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value),
            number: /\d/.test(value),
            minLength: value.length >= 6,
        });

        // Update password validation status
        setFieldValidity({
            email: true,
            password: true,
            confirmPassword: true,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newFieldValidity = {
            email: !!formData.email,
            password: !!formData.password,
            confirmPassword: !!formData.confirmPassword,
        };

        setFieldValidity(newFieldValidity);

        const hasEmptyFields = Object.values(newFieldValidity).some(isValid => !isValid);

        if (hasEmptyFields) {
            alert('Please fill in the required fields.');
            return;
        }

        // Validate password
        const passwordValidationError = validatePassword(formData.password);
        if (passwordValidationError) {
            alert(passwordValidationError);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            // Check if email already exists
            const emailExistsResponse = await fetch(`http://localhost:3050/api/checkEmail?email=${encodeURIComponent(formData.email)}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!emailExistsResponse.ok) {
                const errorMessage = await emailExistsResponse.text(); // Get response body as text
                console.error('Error checking email existence:', errorMessage);
                alert(`Error checking email existence: ${errorMessage}`);
                return;
            }

            const emailExistsData = await emailExistsResponse.json();
            if (emailExistsData.exists) {
                alert('Email already exists. Please use a different email.');
                return;
            }

            // Proceed to create user if email doesn't exist
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
                console.log(response)
                try {
                    console.log('Registered successfully');
                    navigate('/Login');  // Redirect to /Home after successful login
                } catch (jsonError) {
                    console.error('Error parsing JSON:', jsonError);
                }
            } else {
                const errorMessage = await response.text(); // Get response body as text
                console.error('Error creating user:', errorMessage);
                // Display or handle the error message appropriately
                alert(`Error creating user: ${errorMessage}`);
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    return (

        <div className="flex flex-col items-center justify-center min-h-screen relative bg-custom-black" >
            <video className="absolute inset-0 object-cover w-full h-full grayscale" autoPlay muted loop>
                <source src="barber-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
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
                                    className={`w-full px-3 py-2 border rounded-md ${!fieldValidity.email ? 'border-red-500 border-4' : ''}`}
                                    value={formData.email}
                                    onChange={handleChange} />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="password" className='text-xl 2xs:text-xl xs:text-xl md:text-2xl 2xl:text-3xl text-neutral-600 teko-secondary'>Password</label>
                                <input type="password"
                                    id="password"
                                    name="password"
                                    className={`w-full px-3 py-2 border rounded-md ${!fieldValidity.password ? 'border-red-500 border-4' : ''}`}
                                    value={formData.password}
                                    onChange={handleChangePassword} />
                            </div>
                            <div className='w-full'>
                                <label htmlFor="confirmPassword" className='text-xl 2xs:text-xl xs:text-xl md:text-2xl 2xl:text-3xl text-neutral-600 teko-secondary' >Confirmar Password</label>
                                <input type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className={`w-full px-3 py-2 border rounded-md ${!fieldValidity.confirmPassword ? 'border-red-500 border-4' : ''}`}
                                    value={formData.confirmPassword}
                                    onChange={handleChange} />
                            </div>
                            <button type="submit" className="w-full text-white py-2 px-4 rounded-md transition-colors bg-neutral-800 text-xl 2xs:text-xl xs:text-xl md:text-2xl 2xl:text-3xl">Register</button>
                            <div className='flex flex-col'>
                                <div className='flex flex-row items-start gap-x-2'>
                                    <div className={`w-3 h-3 rounded-full border-2 mt-1 ${passwordValidation.uppercase ? 'bg-green-500 border-green-500 ' : 'bg-white border-gray-500'}`}></div>
                                    <p className='text-white text-sm'>Password must contain at least one uppercase letter</p>
                                </div>
                                <div className='flex flex-row items-start gap-x-2'>
                                    <div className={`w-3 h-3 rounded-full border-2 mt-1 ${passwordValidation.specialCharacter ? 'bg-green-500 border-green-500' : 'bg-white border-gray-500'}`}></div>
                                    <p className='text-white text-sm'>Password must contain at least one special character</p>
                                </div>
                                <div className='flex flex-row items-start gap-x-2'>
                                    <div className={`w-3 h-3 rounded-full border-2 mt-1 ${passwordValidation.number ? 'bg-green-500 border-green-500' : 'bg-white border-gray-500'}`}></div>
                                    <p className='text-white text-sm'>Password must contain at least one number</p>
                                </div>
                                <div className='flex flex-row items-start gap-x-2'>
                                    <div className={`w-3 h-3 rounded-full border-2 mt-1 ${passwordValidation.minLength ? 'bg-green-500 border-green-500' : 'bg-white border-gray-500'}`}></div>
                                    <p className='text-white text-sm'>Password must be at least 6 characters long</p>
                                </div>
                            </div>
                        </form>
                        <div className='flex flex-row mt-5 gap-x-2'>
                            <p className='text-xl 2xs:text-xl xs:text-xl md:text-2xl 2xl:text-3xl text-neutral-600 teko-secondary'>Já tens conta?</p>
                            <Link className='text-xl 2xs:text-xl xs:text-xl md:text-2xl 2xl:text-3xl text-custom-gold teko-secondary underline' to={'/Login'}>Faz o teu login!</Link>
                        </div>
                        <div className='w-full flex flex-row xs:my-2 items-baseline h-fit'>
                            <div className="border-t-2 h-2 flex-1 mr-2"></div>
                            <p className="text-white teko-secondary text-xl 2xs:text-xl font-bold xs:text-2xl md:text-3xl 2xl:text-4xl mb-5 h-fit">Ou</p>
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
        </div >
    );
};

export default Register;