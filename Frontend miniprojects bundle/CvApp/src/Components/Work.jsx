import  { useState } from 'react';
import './components.css'
import WorkExperience from '../EducationalExperience/WorkExperience';

function Work() {
    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    return (
        <div className={`component ${expanded ? 'expanded' : ''}`} >
            <div className="container">
                <p className="titles" onClick={toggleExpanded}>Work Experience</p>
                <WorkExperience expanded={expanded} />
            </div>
        </div>
    );
}

export default Work;