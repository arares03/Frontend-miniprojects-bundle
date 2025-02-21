import React, { useState } from "react";
import './EducationalExperience.css'

function WorkExperience({ expanded }) {
    const [elements, setElements] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [domain, setDomain] = useState('');
    const [startdate, setStartDate] = useState('');
    const [enddate, setEndDate] = useState('');
    const addElement = () => {
        setShowForm(true);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleDomainChange = (event) => {
        setDomain(event.target.value);
    }

    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    }
    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    }

    const [selectedItem, setSelectedItem] = useState(null);
    const [editedName, setEditedName] = useState('');
    const [editedDomain, setEditedDomain] = useState('');
    const [editedStartDate, setEditedStartDate] = useState('');
    const [editedEndDate, setEditedEndDate] = useState('');

    const openEditForm = (element) => {
        const editedName = element.name;
        const editedDomain = element.domain;
        const editedStartDate = element.startdate;
        const editedEndDate = element.enddate;
        setSelectedItem(element);
        setEditedName(editedName);
        setEditedDomain(editedDomain);
        setEditedStartDate(editedStartDate);
        setEditedEndDate(editedEndDate);
        debugger;
    };

    const handleEdit = () => {


        if (editedName.trim() !== '' && editedDomain.trim() !== '' && editedStartDate.trim() !== '' && editedEndDate.trim() != '') {
            const updatedElement =
            {
                name: editedName,
                domain: editedDomain,
                startdate: editedStartDate,
                enddate: editedEndDate
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
        setEditedStartDate('');
        setEditedEndDate('');
    };

    const addEntry = () => {
        const startObj = new Date(startdate);
        const endObj = new Date(enddate);


        if (name.trim() !== '' && domain.trim() !== '' && startdate.trim() !== '' && enddate.trim() != '' && startObj < endObj) {
            const newEntry = {
                name,
                domain,
                startdate,
                enddate
            };
            debugger;
            setElements([...elements, newEntry]);
            setShowForm(false);
            setName('');
            setDomain('');
            setStartDate('');
            setEndDate('');
        }
    }

    return (
        <div className={`element-list ${expanded ? '' : 'hidden'}`}>
            <button onClick={addElement}>Add Element</button>
            {showForm && (
                <div>
                    <input
                        type="text"
                        placeholder="Enter your workplace"
                        value={name}
                        onChange={handleNameChange}
                    />
                    <input
                        type="text"
                        placeholder="Enter position title"
                        value={domain}
                        onChange={handleDomainChange}
                    />
                    <input
                        type="date"
                        value={startdate}
                        onChange={handleStartDateChange}
                    />
                    <input
                        type="date"
                        value={enddate}
                        onChange={handleEndDateChange}
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
                            <p>Start date:{element.startdate}</p>
                            <p>Start date:{element.enddate}</p>
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
                        placeholder="Edit company"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Edit work domain"
                        value={editedDomain}
                        onChange={(e) => setEditedDomain(e.target.value)}
                    />
                    <input
                        type="date"
                        value={editedStartDate}
                        onChange={(e) => setEditedStartDate(e.target.value)}
                    />
                    <input
                        type="date"
                        value={editedEndDate}
                        onChange={(e) => setEditedEndDate(e.target.value)}
                    />
                    <button onClick={handleEdit}>Save</button>
                    <button onClick={closeEditForm}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export default WorkExperience;
