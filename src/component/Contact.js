import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <div class="profile-card">
        <img id="profile-pic" src="https://media.licdn.com/dms/image/D5603AQGNtfXlbaVs0Q/profile-displayphoto-shrink_800_800/0/1671858409939?e=1677110400&v=beta&t=Zswe0NG_5BmM-moKWDa148_hrngJIVwQcCd-HpQP9X0" alt="Ignatius Jonathan" />
        <p class="name">Ignatius Jonathan</p>
        <p>
          <strong>Connect with me:</strong>
        </p>
        <div class="social">
          <div class="icon">
            <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin" />
          </div>
          <div class="profile-url">
            <a href="https://www.linkedin.com/in/ijonathan/" target="_blank">
              linkedin.com/in/ijonathan
            </a>
          </div>
        </div>
        <div class="social">
          <div class="icon">
            <img src="https://img.icons8.com/sf-black-filled/64/null/github.png" alt="github" />
          </div>
          <div class="profile-url">
            <a href="https://github.com/iJonathan-Dev" target="_blank">
              github.com/iJonathan-Dev
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
