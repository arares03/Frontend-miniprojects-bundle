import { useState } from 'react';
import './components.css'
import ContactForm from '../ContactForm/ContactForm';

function About() {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };
    return (
        <div className={`component ${expanded ? 'expanded' : ''}`} >
            <div className="container">
                <p className='titles' onClick={toggleExpanded}>About me</p>
                <ContactForm expanded={expanded} />
            </div>
        </div>
    );
}

export default About;