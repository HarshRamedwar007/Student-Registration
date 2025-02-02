import React, { useState } from 'react';
import "./style.css";

function CourseTypeManager() {
    const [courseTypes, setCourseTypes] = useState([]);
    const [newCourseType, setNewCourseType] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

    function addCourseType() {
        if (newCourseType) {
            setCourseTypes([...courseTypes, newCourseType]);
            setNewCourseType('');
        }
    }

    function updateCourseType() {
        const updatedCourseTypes = [...courseTypes];
        updatedCourseTypes[editIndex] = newCourseType;
        setCourseTypes(updatedCourseTypes);
        setNewCourseType('');
        setEditIndex(-1);
    }

    function deleteCourseType(index) {
        setCourseTypes(courseTypes.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>Course Types</h2>
            <input
                type="text"
                value={newCourseType}
                onChange={(e) => setNewCourseType(e.target.value)}
                placeholder="Enter course type"
            />
            <button onClick={editIndex === -1 ? addCourseType : updateCourseType}>
                {editIndex === -1 ? 'Add' : 'Update'}
            </button>
            <ul>
                {courseTypes.map((type, index) => (
                    <li key={index}>
                        {type}
                        <button onClick={() => { setEditIndex(index); setNewCourseType(type); }}>Edit</button>
                        <button onClick={() => deleteCourseType(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseTypeManager;