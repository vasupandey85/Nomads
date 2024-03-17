import React, { useState } from 'react';
import './auth.css'; // Assuming you have CSS file named styles.css for your styles

const Auth = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const togglePanel = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

  return (
    <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`}>
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Sign Up</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="tel" placeholder="Contact Number" />
          <br />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>LOGIN</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Submit</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Hello user!</h1>
            <p>To stay connected with us please enter your personal info</p>
            <button className="ghost" onClick={togglePanel}>Login</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>New User?</h1>
            <p>Enter your personal details and start your journey with us </p>
            <button className="ghost" onClick={togglePanel}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
