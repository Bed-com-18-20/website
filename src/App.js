import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
        
          <h1>WILLTECH CEO</h1>
          <ul>
            <li><a href="#about">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
     {/* About Section */}
      <section id="about" className="about-section">
  <div className="about-content">

    <div className="about-text">
      <h2>It’s not about ideas. It’s about making ideas happen. Scott Belsky</h2>
      <p>
        Hello! I'm Willious Kayira, a final-year student at the University of Malawi, pursuing a Bachelor of Education in Computer Science. 
        I’m passionate about leveraging technology to design user-friendly, visually appealing digital experiences that make life easier for everyone. 
        From mobile applications to web design and software development, I believe that thoughtful design can bridge the gap between technology and everyday life.
        </p>
      <p>
        Over the years, I've gained hands-on experience in developing mobile applications, creating responsive websites, and coding complex backend systems. 
        Whether it’s Java, C++, C#, or database design, I thrive on finding solutions to challenging problems and bringing innovative ideas to life.
      </p>
      <p>
        When I'm not writing code, I love exploring the latest tech trends, brainstorming new project ideas, and collaborating with like-minded individuals. 
        Join me on this journey as I continue to explore and contribute to the tech world!
      </p>
    </div>
  </div>
</section>
 {/* Services Section */}
      <section id="services" className="services-section">
        <h2>My Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>Crafting responsive, dynamic, and user-friendly websites to boost your online presence and grow your business.</p>
          </div>
          <div className="service-card">
            <h3>Graphic Design</h3>
            <p>Creating visually appealing graphics, logos, and branding solutions to make your business stand out.</p>
          </div>
          <div className="service-card">
            <h3>Digital Marketing</h3>
            <p>Helping businesses grow online through SEO, social media strategies, and targeted digital advertising.</p>
          </div>
          <div className="service-card">
            <h3>Linux System Administration</h3>
            <p>Managing and maintaining Linux-based systems, ensuring security, efficiency, and smooth operation of servers.</p>
          </div>
          <div className="service-card">
            <h3>Database Design and Development</h3>
            <p>Designing efficient databases and building robust data systems for scalable applications and businesses.</p>
          </div>
          <div className="service-card">
            <h3>Advanced Programming</h3>
            <p>Specialized in programming with Java, C#, and C++ to build complex, high-performance systems and applications.</p>
          </div>
          <div className="service-card">
            <h3>Computer Networks</h3>
            <p>Designing, deploying, and managing network infrastructures for efficient and secure data communication.</p>
          </div>
          <div className="service-card">
            <h3>Project Management</h3>
            <p>Ensuring timely delivery of projects through effective planning, coordination, and management of resources.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">  
    <h2>My Skills</h2>
    <p>Throughout my academic journey in Computer Science and hands-on projects, I have developed expertise in various areas of technology, programming, and education.</p>
    <div className="skills-grid">
        <div className="skill-card">
            <h3>Python</h3>
            <p>Proficient in Python for data analysis, scripting, and web development.</p>
        </div>
        <div className="skill-card">
            <h3>Java</h3>
            <p>Strong foundation in Java for object-oriented programming and application development.</p>
        </div>
        <div className="skill-card">
            <h3>JavaScript (React, Node.js)</h3>
            <p>Experienced in building dynamic web applications using React and Node.js.</p>
        </div>
        <div className="skill-card">
            <h3>C++</h3>
            <p>Solid understanding of C++ for system programming and application development.</p>
        </div>
        <div className="skill-card">
            <h3>Database Design (MySQL, MongoDB)</h3>
            <p>Skilled in designing and managing relational and NoSQL databases.</p>
        </div>
        <div className="skill-card">
            <h3>Web Development (HTML, CSS, JavaScript)</h3>
            <p>Proficient in creating responsive websites using modern web technologies.</p>
        </div>
        <div className="skill-card">
            <h3>Linux System Administration</h3>
            <p>Experienced in managing Linux servers and deploying applications.</p>
        </div>
        <div className="skill-card">
            <h3>Educational Technology Integration</h3>
            <p>Knowledgeable in integrating technology into educational settings to enhance learning.</p>
        </div>
        <div className="skill-card">
            <h3>Educational Technology Integration</h3>
            <p>Knowledgeable in integrating technology into educational settings to enhance learning.</p>
        </div>
    </div>
   
</section>
     {/* Contact Section */}
      <section id="contact" className="contact-section">  
    <h2>Contact Me</h2>
    <p>Have any project or inquiries? Feel free to reach out to me via phone, email, or through the form below. Let's discuss how I can help you achieve your goals.</p>
    
    <div className="contact-details">
        <p><strong>Phone:</strong> <a href="tel:+265883082839">0883082839</a> / <a href="tel:+265995284468">0995284468</a></p>
        <p><strong>Email:</strong> <a href="mailto:williouskayira@gmail.com">williouskayira@gmail.com</a></p>
    </div>
    
    <div className="contact-form">
        <h3>Send a Message</h3>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            
            <button type="submit">Send Message</button>
        </form>
    </div>
    
</section>
  
      <footer>
    <div className="footer-content">
        <p>Created By <strong>Willious Kayira</strong> | © 2024 All Rights Reserved</p>
               
        
    </div>
</footer>

    </div>
  );
}

export default App;
