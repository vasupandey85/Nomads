import React from 'react';
import './user.css'; // Assuming you have your CSS in a file named styles.css

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-pic-container">
          <div className="profile-pic">
            <div className="header-color"></div>
            <img src="https://anniedotexe.github.io/hosted-assets/dailyui/dailyui006/profile-pic.jpg" alt="Profile Picture" />
          </div>
        </div>
        <div className="profile-info">
          <div className="title">
            <h1>Ava Silva</h1>
            <h2><span className="highlighted">Warrior Nun</span> at OCS</h2>
          </div>
          <div className="description">
            <p>Bisexual Jesus</p>
            <p>Besties with Karl the Tarask</p>
          </div>
          <button className="follow">Follow</button>
        </div>
      </div>
      <div className="trips-container">
        <h2>Your Trips</h2>
        <div className="images-container">
          <div className="image">
            <img src="https://anniedotexe.github.io/hosted-assets/dailyui/dailyui006/bar-dance2.jpg" alt="Image Post" />
            <i className="fas fa-heart"><span>70,418</span></i>
          </div>
          <div className="image">
            <img src="https://anniedotexe.github.io/hosted-assets/dailyui/dailyui006/museum-heist.jpg" alt="Image Post" />
            <i className="fas fa-heart"><span>48,657</span></i>
          </div>
          <div className="image">
            <img src="https://anniedotexe.github.io/hosted-assets/dailyui/dailyui006/ava-beach.jpg" alt="Image Post" />
            <i className="fas fa-heart"><span>53,829</span></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
