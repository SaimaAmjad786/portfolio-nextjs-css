import React from 'react';
import "../components/skill.css";

function Skills() {
    return (
        <div className="container" id="skills">
            <div className="skills">
                <h1>Skills</h1>
                
                {/* HTML Skill */}
                <div className="skill">
                    <h2>HTML</h2>
                    <div className="progress-bar">
                        <div className="html"><span>100%</span></div>
                    </div>
                </div>

                {/* CSS Skill */}
                <div className="skill">
                    <h2>CSS</h2>
                    <div className="progress-bar">
                        <div className="css"><span>95%</span></div>
                    </div>
                </div>

                {/* TypeScript Skill */}
                <div className="skill">
                    <h2>TypeScript</h2>
                    <div className="progress-bar">
                        <div className="typescript"><span>90%</span></div>
                    </div>
                </div>

                {/* MS Office Skill */}
                <div className="skill">
                    <h2>MS Office</h2>
                    <div className="progress-bar">
                        <div className="ms-office"><span>90%</span></div>
                    </div>
                </div>

                {/* Javascript Skill */}
                <div className="skill">
                    <h2>Javascript</h2>
                    <div className="progress-bar">
                        <div className="javascript"><span>80%</span></div>
                    </div>
                </div>

                {/* Next.js Skill */}
                <div className="skill">
                    <h2>Next.js</h2>
                    <div className="progress-bar">
                        <div className="nextjs"><span>85%</span></div>
                    </div>
                </div>

                {/* Tailwind CSS Skill */}
                <div className="skill">
                    <h2>Tailwind CSS</h2>
                    <div className="progress-bar">
                        <div className="tailwindcss"><span>80%</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;