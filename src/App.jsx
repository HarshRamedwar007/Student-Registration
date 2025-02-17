import React, { useState } from 'react';
import CourseTypeManager from './Components/CourseTypeManager';
 import CourseManager from "./Components/CourseManager";
import CourseOfferingManager from "./Components/CourseOfferingManager";
import StudentRegistration from "./Components/StudentRegistration";

function App() {
    const [offerings, setOfferings] = useState([]);
  
    return (
        <div>
            <h1>Student Registration System</h1>
            <CourseTypeManager />
            <CourseManager />
            <CourseOfferingManager setOfferings={setOfferings} />
            <StudentRegistration offerings={offerings} />
        </div>
    );
}

export default App;
