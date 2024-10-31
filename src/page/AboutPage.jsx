import React from 'react';
import imageClaudia from '../component/imagelogo/claudia.jpg';
import imageGeethu from '../component/imagelogo/geethu.png';



function AboutPage() {

  return (
    <div className='aboutContainer'>

      <h1>About Our Project</h1>
      <p>
        Welcome to our Recipe Book project! This application allows users to
        browse, add, and manage their favorite recipes. Our goal was to create
        an intuitive and user-friendly interface that enables food lovers to
        easily find and save their favorite recipes.
      </p>
      <h2>Project Features</h2>
      <ul>
        <li>Browse recipes with detailed information.</li>
        <li>Add new recipes with various attributes.</li>
        <li>Mark recipes as favorites.</li>
        <li>Update or delete recipes as needed.</li>
      </ul>
      <br></br>
      <br></br>
      <h2>Meet the Team</h2>


      <div className="teamMemberContainer">
        <h3>Cláudia</h3>

        <img className="imageTeamMember" src={imageClaudia} alt="Woman Picture" />

        <p> Hi! I'm Claudia, I’m 29 years old, living in Braga, a city in the north of Portugal. I’m an architect but hopefully I can also become a web developer.
          I love art, traveling, exploring new cultures. I also enjoy sports, to go out with my friends and watching movies.
          I have a crazy family of 5 and a wild chihuahua.
        </p>
        <div className="links">
          <a href="https://github.com/claudiapando17" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}>GitHub</a>
          <br></br>
          <a href="https://www.linkedin.com/in/claudiapando/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}>LinkedIn</a>

        </div>
      </div>

      <br></br>

      <div className="teamMemberContainer">
        <h3>
          Geethu
        </h3>

        <img className="imageTeamMember" src={imageGeethu} alt="Woman Picture" />

        <p> From India, currently living in Berlin, Germany,She holds a background in Electronics and Communication Engineering, which fuels her passion for technology. As a passionate developer, she loves creating applications that address real-world problems. </p>
        <div className="links">
          <a href="https://github.com/geethusayooj" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}>GitHub</a>
          <br></br>
          <a href="https://www.linkedin.com/in/geethu-pandath-ramesh-078288174/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "black" }}>LinkedIn</a>

        </div>
      </div>


    </div>
  )
}

export default AboutPage