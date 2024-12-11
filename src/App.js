import Profile from './Profile.png';
import React, { useState } from 'react';
import './App.css'; // Make sure to create this CSS file
import ContactForm from './contact';
const App = () => {
  const [activeTab, setActiveTab] = useState('Skills');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {/* Header */}
      <div id="header" style={{ backgroundImage: `url(${Profile})` }}>
        <div className="container">
          <nav>
            <name><b style={{ color: '#ff004f' }}>J</b>illa Sridatta</name>
            <ul id="sidemenu" style={{ right: menuOpen ? '0' : '-200px' }}>
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
              <i className="fa-solid fa-x" onClick={toggleMenu}></i>
            </ul>
            <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
          </nav>
          <div className="header-text">
            <p>Full Stack Developer</p>
            <h1>HI, I'm <span style={{ color: '#ff004f' }}>Jilla Sridatta</span><br /> from Hyderabad</h1>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src="https://i.ibb.co/4RfRY6Y/Pic.png" alt="Pic" id="img1" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">About Me</h1>
              <p id="intro">
                As a passionate full stack developer, I thrive on crafting innovative solutions that seamlessly bridge the gap between front-end and back-end technologies. My expertise lies in utilizing a wide array of programming languages, frameworks, and tools to bring ideas to life. Throughout my journey, I've had the opportunity to work on some remarkable projects that have left a lasting impact. I believe that every challenge presents an opportunity to grow, and my problem-solving approach enables me to find efficient and effective solutions. With a strong commitment to continuous learning, I keep myself up-to-date with the latest industry trends, ensuring that my work reflects the best practices and cutting-edge advancements. As a team player, I value collaboration and open communication, which fosters an environment of creativity and productivity. Beyond my technical skills, I find joy in exploring various interests outside of coding, bringing a unique perspective to my work. Together, let's create a future that seamlessly integrates technology and enriches user experiences.
              </p>
              <div className="tab-titles">
                <p className={`tab-links ${activeTab === 'Skills' ? 'active-link' : ''}`} onClick={() => handleTabChange('Skills')}>Skills</p>
                <p className={`tab-links ${activeTab === 'Experience' ? 'active-link' : ''}`} onClick={() => handleTabChange('Experience')}>Experience</p>
                <p className={`tab-links ${activeTab === 'Education' ? 'active-link' : ''}`} onClick={() => handleTabChange('Education')}>Education</p>
              </div>
              {/* Tab Contents */}
              <div className={`tab-contents ${activeTab === 'Skills' ? 'active-tab' : ''}`} id="Skills">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript/JQuery</li>
                  <li>SQL</li>
                  <li>JAVA</li>
                  <li>C#</li>
                  <li>SharePoint</li>
                  <li>Rest API</li>
                  <li>ASP .Net MVC</li>
                  <li>MS OFFICE</li>
                </ul>
              </div>
              <div className={`tab-contents ${activeTab === 'Experience' ? 'active-tab' : ''}`} id="Experience">
                <ul>
                  <li><span>Company</span> - Synergy Computer Solutions International Limited</li>
                  <li><span>Role</span> - Full Stack Developer</li>
                  <li><span>Duration</span> - April 2023 - Present</li>
                </ul>
              </div>
              <div className={`tab-contents ${activeTab === 'Education' ? 'active-tab' : ''}`} id="Education">
                <ul>
                  <li><span>B.Tech - Mechanical Engineering</span><br />Guru Nank Institute of Technology <br />2018-2022<br />CGPA: 7.0</li>
                  <li><span>Intermediate - MPC</span><br />Sri Chaitanya Junior College<br />2016-2018<br />Percentage: 94.6%</li>
                  <li><span>SSC</span><br />The Laurel High School<br />2014-2016<br />CGPA: 9.3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services">
        <div className="container">
          <h1 className="sub-title">About Services</h1>
          <div className="services-list">
            <div>
              <i className="fa-solid fa-code"></i>
              <h2>Web Design</h2>
              <p>Passionate web designer crafting captivating and user-centric digital experiences. Aesthetics meet functionality for an impactful online presence. Let's bring your vision to life!</p>
              <span className="btn">Learn more</span>
              {/* <a href="#">Learn more</a> */}
            </div>
            <div>
              <i className="fa-solid fa-crop-simple"></i>
              <h2>UI/UX Design</h2>
              <p>UI/UX designer creating intuitive and delightful user experiences. Aesthetics and functionality merge seamlessly to elevate digital interactions. Let's craft an unforgettable journey for your users!</p>
              <span className="btn">Learn more</span>
              {/* <a href="#">Learn more</a> */}
            </div>
            <div>
              <i className="fa-brands fa-app-store"></i>
              <h2>App Design</h2>
              <p>Aspiring to venture into App Design, leveraging my UI/UX and web design expertise. Eager to learn and create intuitive mobile experiences that captivate users. Let's embark on this journey of innovation together!</p>
              <span className="btn">Learn more</span>
              {/* <a href="#">Learn more</a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio">
        <div className="container">
          <h1 className="sub-title">My Work</h1>
          <div className="work-list">
            <div className="work">
              <img src="https://i.ibb.co/C0NYV2Y/work-1.png" alt="work-1" />
              <div className="layer">
                <h3>Drawing App</h3>
                <p>I have developed an online drawing app for the PC version.</p>
                <a href="https://jillasridatta.github.io/DrawingApp/"><i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
            <div className="work">
              <img src="https://i.ibb.co/W23s46b/work-2.png" alt="work-2" />
              <div className="layer">
                <h3>Music App</h3>
                <p>I created a musical website featuring interactive keys that produce different sounds when clicked, similar to a JavaScript drumstick. Experience the joy of playing music with a click!</p>
                <span className="btn"><i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></span>
                {/* <a href="#"><i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a> */}
              </div>
            </div>
            <div className="work">
              <img src="https://i.ibb.co/nzg2rg0/work-3.png" alt="work-3" />
              <div className="layer">
                <h3>Online Shopping App</h3>
                <p>I have developed clones of Flipkart and YouTube. You can have a look at Flipkart Clone.</p>
                <a href="https://jillasridatta.github.io/PROJECT-FLIPKART/"><i className="fa-sharp fa-solid fa-arrow-up-right-from-square"></i></a>
              </div>
            </div>
          </div>
          <span className="btn">See more</span>
          {/* <a href="#" className="btn">See more</a> */}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact">
        <div className=" container">
          <div className="row">
            <div className="contact-left">
              <h1 className="sub-title">Contact Me</h1>
              <p><i className="fa-sharp fa-solid fa-paper-plane"></i> jillasridatta@gmail.com</p>
              <p><i className="fa-solid fa-square-phone"></i> 7032499437</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/jillasridatta.sridatta"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/jilla_sridatta"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://instagram.com/jillasridatta?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/jilla-sridatta/"><i className="fa-brands fa-linkedin"></i></a>
                <a href="mailto:jillasridatta@gmail.com"><i className="fa-solid fa-envelope"></i></a>
              </div>
              <a href="/JillaSridattaResume.pdf" download="SriDatta Jilla - Resume" className="btn btn2">Download Resume</a>
            </div>
            <ContactForm ></ContactForm>
            {/* <div className="contact-right">
              <form name="submit-to-google-sheet">
                <input type="text" name="Name" placeholder="Your Name" required />
                <input type="email" name="Email" placeholder="Your Email" required />
                <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                <button type="submit" className="btn btn2">Submit</button>
              </form>
              <span id="msg"></span>
            </div> */}
          </div>
        </div>
        <div className="copyright">
          <p>Copyright ©️ Jilla Sridatta</p>
        </div>
      </div>


    </div>
  );
};

export default App;