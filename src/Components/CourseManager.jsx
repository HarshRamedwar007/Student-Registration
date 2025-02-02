import React, { useState } from 'react';
import "./style.css";

function CourseManager() {
    const [courses, setCourses] = useState([]);
    const [newCourse, setNewCourse] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

    function addCourse() {
        if (newCourse) {
            setCourses([...courses, newCourse]);
            setNewCourse('');
        }
    }

    function updateCourse() {
        const updatedCourses = [...courses];
        updatedCourses[editIndex] = newCourse;
        setCourses(updatedCourses);
        setNewCourse('');
        setEditIndex(-1);
    }

    function deleteCourse(index) {
        setCourses(courses.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>Courses</h2>
            <input
                type="text"
                value={newCourse}
                onChange={(e) => setNewCourse(e.target.value)}
                placeholder="Enter course name"
            />
            <button onClick={editIndex === -1 ? addCourse : updateCourse}>
                {editIndex === -1 ? 'Add' : 'Update'}
            </button>
            <ul>
                {courses.map((course, index) => (
                    <li key={index}>
                        {course}
                        <button onClick={() => { setEditIndex(index); setNewCourse(course); }}>Edit</button>
                        <button onClick={() => deleteCourse(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseManager;