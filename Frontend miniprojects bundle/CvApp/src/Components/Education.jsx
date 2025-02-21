import { useState } from 'react';
import './components.css'
import EducationalExperience from '../EducationalExperience/EducationalExperience';
function Education() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`component ${expanded ? 'expanded' : ''}`} >
            <div className="container">
                <p className="titles" onClick={toggleExpanded}>Education</p>
                <EducationalExperience expanded={expanded} />
            </div>
        </div>
    );
}

export default Education;