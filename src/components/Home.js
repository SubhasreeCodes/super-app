import React from 'react';
import './Home.css'; // optional, for styling

const Home = () => {
    return (
        <div className="home-container">
            <div className="left-section">
                <img src="images/page_1.png" alt="page_1" />
                <p className="image-text">Discover new things on Superapp</p>
            </div>
            <div className="right-section">
                <h2 className="single-day-regular"><b>Super app</b></h2>
                <h5>Create your new account</h5>
                <form className="registration-form">
                    <textarea name="name" placeholder="Name" rows={1} cols={30} required /><br />
                    <textarea name="username" placeholder="UserName" rows={1} cols={30} required /><br />
                    <textarea name="email" placeholder="Email" rows={1} cols={30} required /><br />
                    <textarea name="mobile" placeholder="Mobile" rows={1} cols={30} required /><br /><br />
                    
                    <label className="checkbox-label">
                        <input type="checkbox" name="shareDetails" />
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

