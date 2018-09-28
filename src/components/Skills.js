import React, { Component } from 'react';
import skills from '../assets/json/skills.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Skills extends Component {
    constructor() {
        super()
        this.state = {
          skills: skills
        }
    }

    createSkillSet() {

    }

    render() {
        return (
            <div id="skills-component">
                <h2>Skills</h2>
                <FontAwesomeIcon icon="star" color="#6DB65B"
                size="sm"/>
                <div id="skillset" className="row">
                    <div className="col-md-6">
                        <ul>
                            {this.state.skills.map((skill, i) => {
                                const skillName = Object.keys(skill);
                                return (
                                    <li>{skillName}
                                    
                                    <span className="fa fa-star checked"></span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}
