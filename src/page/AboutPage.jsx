import React from 'react';




function AboutPage(){
  
    return(
      <div>
        
        <h1>About Our Recipe Book Project</h1>
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
      <h2>Meet the Team</h2>
      
      
      <div className="team-member">
      <h3>Cláudia</h3>
      <p> ggggg</p>
      <div className="links">
          <a href="https://github.com/geethusayooj" target="_blank" rel="noopener noreferrer">GitHub</a> <br></br>
          <a href="https://www.linkedin.com/in/geethu-pandath-ramesh-078288174/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

        </div>
      </div>
      
       <div className="team-member">
        <h3>
          Geethu
        </h3>
        <p> From India, currently living in Berlin, Germany,She holds a background in Electronics and Communication Engineering, which fuels her passion for technology. As a passionate developer, she loves creating applications that address real-world problems. </p>
        <div className="links">
          <a href="https://github.com/geethusayooj" target="_blank" rel="noopener noreferrer">GitHub</a><br></br>
          <a href="https://www.linkedin.com/in/geethu-pandath-ramesh-078288174/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

        </div>
       </div>


      </div>
    )
}

export default AboutPage