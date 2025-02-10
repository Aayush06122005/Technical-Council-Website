// import React from 'react'
import './LandingPage.css'
import Navbar from '../components/Header/Header.jsx'  
// import { NavLink } from 'react-router'
import Footer from '../components/Footer/Footer.jsx'
import Carousel  from '../components/Carousel/index.jsx'
// import slides from './car.json'



const LandingPage = () => {
  return (
    <div className='landing-container'>
      <Navbar />
      <div className='lp-title'>
        <h2 className='welcome-to'>Welcome To</h2>
        <h1 className='landingPage-heading'>Tech Co<span className='hf-text'>uncil</span></h1> 
      </div>
      {/* <NavLink to="/login" className={'login-btn-lp'}>
        <div className="Join-lp"> Join Now </div>        
      </NavLink> */}

      <div className='community'>
        <h1 className='about-us-heading'>Comm<span className='hf-text'>unity</span></h1>
        <div className="com-text-1">
          <div className='pt-comm'>
            <h2>1. Join the Technical Council Community</h2>
            <br />
            <p>The Technical Council thrives on a strong and inclusive community of tech enthusiasts, problem solvers, and innovators. Our goal is to foster a collaborative environment where students can learn, build, and grow together through various initiatives</p>
          </div>

          <div className="pt-comm">
            <hr className='hr-len'/>
            <br />
            <h3>What You&apos;ll Find Here:</h3>
            <br />
            <ol>
              <li>Workshops & Hackathons – Engage in hands-on learning with expert-led sessions and competitive hackathons.</li>
              <li>Discussion Forums & Study Groups – Connect with peers, share knowledge, and collaborate on technical projects.</li>
              <li>Mentorship Programs – Get guidance from experienced developers and industry professionals.</li>
              <li>Virtual Contests & Challenges – Participate in regular practice contests and coding challenges.</li>
              <li>Open-Source Contributions – Work on real-world projects and contribute to open-source initiatives.</li>
              <li>Tech Talks & Panel Discussions – Stay updated with the latest trends and insights from experts.</li>
            </ol>
            <br />
            <h3>Empowering innovation through collaboration, learning, and community-driven growth.</h3>
            <br />
            <h2 className='hf-text'>
              <span><i className='bx bx-rocket'></i> </span> Join the conversation. Improve. Succeed.
            </h2>
          </div>
        </div>
      </div>

      <div className='events'>
        <div className='events-heading'>
          
          <div className="blocks-left">
            <div className="blk"></div>
            <div className="blk"></div>
            <div className="blk"></div>
          </div>

          <span className='heading-txt'><span className='hf-text'>OUR</span> EVENTS</span>
          
          <div className="blocks-right">
            
            <div className="blk"></div>
            <div className="blk"></div>
            <div className="blk"></div>
          </div>


        </div>

        <Carousel />        
      </div>

      <div className='About-Us'>
        <h1 className='about-us-heading'><span className='hf-text'>About </span>Us</h1>
        <div className='com-text'>
          <p>The <span className='hf-text'>Technical Council</span> is a hub for innovation, collaboration, and technical excellence. We aim to foster a dynamic environment where students can explore emerging technologies, enhance their problem-solving skills, and build impactful projects. Through workshops, hackathons, mentorship programs, and community-driven initiatives, we empower individuals to grow, connect, and lead in the tech space. Whether you&apos;re a beginner or an experienced developer, there&apos;s always something to learn and contribute.</p>
          <br />
          <h2>Innovate, Implement, Inspire!</h2>
        
        </div>
      </div>
      <br />

      <div className="statistics">
        <h1 className='live-stats-heading'>Live <span className='hf-text'>Statistics</span></h1>
        <div className='stats-elements'>
          <div className="visitors">
            <p className='stats-head'>Visitors</p>
            <h3 className='hf-text stats-value'>123912</h3>
          </div>

          <div className="visitors">
            <p className='stats-head'>Registered</p>
            <h3 className='hf-text stats-value'>123912</h3>
          </div>

          <div className="visitors">
            <p className='stats-head'>Visitors</p>
            <h3 className='hf-text stats-value'>123912</h3>
          </div>
        </div>
       

      
      </div>

      <Footer />

    </div>
  )
}

export default LandingPage
