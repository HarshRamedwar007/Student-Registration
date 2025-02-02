import React, { useState } from 'react';
import "./style.css";

function CourseOfferingManager({ setOfferings }) {
    const [offerings, setLocalOfferings] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

    function addOffering() {
        if (selectedCourse && selectedType) {
            const newOffering = `${selectedType} - ${selectedCourse}`;
            const updatedOfferings = [...offerings, newOffering];
            setLocalOfferings(updatedOfferings);
            setOfferings(updatedOfferings);
            setSelectedCourse('');
            setSelectedType('');
        }
    }

    function updateOffering() {
        const updatedOfferings = [...offerings];
        updatedOfferings[editIndex] = `${selectedType} - ${selectedCourse}`;
        setLocalOfferings(updatedOfferings);
        setOfferings(updatedOfferings);
        setSelectedCourse('');
        setSelectedType('');
        setEditIndex(-1);
    }

    function deleteOffering(index) {
        const updatedOfferings = offerings.filter((_, i) => i !== index);
        setLocalOfferings (updatedOfferings);
        setOfferings(updatedOfferings);
    }

    return (
        <div>
            <h2>Course Offerings</h2>
            <input
                type="text"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                placeholder="Enter course type"
            />
            <input
                type="text"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                placeholder="Enter course name"
            />
            <button onClick={editIndex === -1 ? addOffering : updateOffering}>
                {editIndex === -1 ? 'Add' : 'Update'}
            </button>
            <ul>
                {offerings.map((offering, index) => (
                    <li key={index}>
                        {offering}
                        <button onClick={() => { setEditIndex(index); const [type, course] = offering.split(' - '); setSelectedType(type); setSelectedCourse(course); }}>Edit</button>
                        <button onClick={() => deleteOffering(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseOfferingManager;