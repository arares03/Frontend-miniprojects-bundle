import React, { useState } from "react";
import './EducationalExperience.css'

function EducationalExperience({ expanded }) {
    const [elements, setElements] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [domain, setDomain] = useState('');
    const [date, setDate] = useState('');

    const addElement = () => {
        setShowForm(true);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleDomainChange = (event) => {
        setDomain(event.target.value);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    const [selectedItem, setSelectedItem] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [editedDomain, setEditedDomain] = useState('');
    const [editedDate, setEditedDate] = useState('');


    const openEditForm = (element) => {
        const name = element.name;
        const domain = element.domain;
        const date = element.date;
        console.log(name, domain, date)
        setSelectedItem(element);
        setEditedName(name);
        setEditedDomain(domain);
        setEditedDate(date);
    };

    const handleEdit = () => {
        if (editedName.trim() !== '' && editedDomain.trim() !== '' && editedDate.trim() !== '') {
            const updatedElement = {
                name: editedName,
                domain: editedDomain,
                date: editedDate,
            }
            const updatedElements = elements.map(item => item === selectedItem ? updatedElement : item);
            setElements(updatedElements);
            closeEditForm();
        }
    };

    const closeEditForm = () => {
        setSelectedItem(null);
        setEditedName('');
        setEditedDomain('');
        setEditedDate('');
    };

    const addEntry = () => {
        if (name.trim() !== '' && domain.trim() !== '' && date.trim() !== '') {
            const newEntry =
            {
                name,
                domain,
                date
            }
                ;
            setElements([...elements, newEntry]);
            setShowForm(false);
            setName('');
            setDomain('');
            setDate('');
        }
    }

    return (
        <div className={`element-list ${expanded ? '' : 'hidden'}`}>
            <button onClick={addElement}>Add Element</button>
            {showForm && (
                <div>
                    <input
                        type="text"
                        placeholder="Enter your school name"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <input
                        type="text"
                        placeholder="Enter domain of study"
                        value={domain}
                        onChange={handleDomainChange}
                    />
                    <input
                        type="date"
                        value={date}
                        onChange={handleDateChange}
                    />
                    <button onClick={addEntry}>Add Entry</button>
                </div>
            )}
            <ul>
                {elements.map((element, index) => (
                    <li key={index}>{
                        <div>
                            <p>School name:{element.name}</p>
                            <p>Domain of study:{element.domain}</p>
                            <p>Finish date:{element.date}</p>
                        </div>

                    }
                        <button onClick={() => openEditForm(element)}>Edit</button>
                    </li>
                ))}
            </ul>
            {selectedItem && (
                <div>
                    <input
                        type="text"
                        placeholder="Edit name"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Edit domain of study"
                        value={editedDomain}
                        onChange={(e) => setEditedDomain(e.target.value)}
                    />
                    <input
                        type="date"
                        value={editedDate}
                        onChange={(e) => setEditedDate(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                    <button onClick={closeEditForm}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export default EducationalExperience;
