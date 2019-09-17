import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.levelupsportz.com/img/frontend/female-avatar3.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Tuba Rasheed</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2016}
              endYear={2020}
              schoolName="NED University"
              schoolDescription="The NED University of Engineering and Technology
              is a premier public university located in the urban area of Karachi, Sindh, Pakistan.
              It is one of the oldest and most renowned institution of higher learning in Pakistan."
               />
               <Education
                 startYear={2018}
                 endYear={2019}
                 schoolName="All Pakistan Memon Federation"
                 schoolDescription="Near Islamia College، Muhammad Farooq Motlani Rd, Muslimabad, Karachi, 
                 Karachi City, Sindh"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2019}
              endYear={2019}
              jobName="First Internship At IBA"
              jobDescription="The Institute of Business Administration (IBA)
              is an independent university in Karachi, Sindh, Pakistan. Founded in 1955, 
              it is the oldest business school outside North America."
              />
              <Experience
                startYear={2019}
                endYear={2019}
                jobName="Second Internship At KDA"
                jobDescription="Karachi Development Authority (KDA) was established to develop Karachi under master plans. KDA was established in 1957. KDA owns undeveloped land in the city which it sell to real state development companies in Karachi.
                     Karachi Development Authority replaced Karachi Improvement Trust (KIT) 
                      that was disbanded by President Muhammad Ayub Khan[1] in 1957."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={100}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={25}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;