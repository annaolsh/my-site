import React, { Component } from 'react';
import skills from '../assets/json/skills.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Skills from './Skills.js';

export default class AboutMe extends Component {
    constructor(){
        super()
        this.state={
          skills: skills
        }
    }

    render() {
        return (
            <div id="about-me-component">
                <h2>About me</h2>
                <p>I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.</p>
                <Skills></Skills>
            </div>
        )
    }
    
}
