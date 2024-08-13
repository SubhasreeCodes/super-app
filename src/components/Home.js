import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Optional, for styling

const Home = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        mobile: '',
        shareDetails: false,
    });

    const [errors, setErrors] = useState({});

    // Handles input changes and updates the formData state
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    // Validates the form fields and returns an object containing any errors
    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.username) newErrors.username = 'Username is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.mobile) newErrors.mobile = 'Mobile number is required';
        return newErrors;
    };

    // Handles form submission
    const handleSignUp = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
            // Save data to localStorage if there are no errors
            localStorage.setItem('registrationData', JSON.stringify(formData));
            // Navigate to the User screen
            navigate('/user');
        } else {
            // Set errors if validation fails
            setErrors(validationErrors);
        }
    };

    return (
        <div className="home-container">
            <div className="left-section">
                <img src="images/page_1.png" alt="page_1" />
                <p className="image-text">Discover new things on Superapp</p>
            </div>
            <div className="right-section">
                <h2 className="single-day-regular"><b>Super app</b></h2>
                <h5>Create your new account</h5>
                <form className="registration-form" onSubmit={handleSignUp}>
                    <textarea 
                        name="name" 
                        placeholder="Name" 
                        rows={1} 
                        cols={30} 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                    /><br />
                    {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                    
                    <textarea 
                        name="username" 
                        placeholder="Username" 
                        rows={1} 
                        cols={30} 
                        value={formData.username} 
                        onChange={handleChange} 
                        required 
                    /><br />
                    {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                    
                    <textarea 
                        name="email"
                        type="email" 
                        placeholder="Email" 
                        rows={1} 
                        cols={30} 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    /><br />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    
                    <textarea 
                        name="mobile" 
                        type="number"
                        placeholder="Mobile" 
                        rows={1} 
                        cols={10} 
                        value={formData.mobile} 
                        onChange={handleChange} 
                        required 
                    /><br /><br />
                    {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>}
                    
                    <label className="checkbox-label">
                        <input 
                            type="checkbox" 
                            name="shareDetails" 
                            checked={formData.shareDetails} 
                            onChange={handleChange} 
                        />
                        Share my registration details with Superapp
                    </label><br />
                    
                    <button type="submit">SIGN UP</button>
                </form>    

                <p className="terms-conditions">
                    By clicking on Sign Up, you agree to Superapp 
                    <span><b> Terms and Conditions</b></span>
                </p><br />

                <p className="privacy-policy">
                    To learn more about how Superapp collects, uses, shares, and protects your personal data, please head to Superapp 
                    <span><b> Privacy Policy</b></span>
                </p>
            </div>
        </div>
    );
};

export default Home;
