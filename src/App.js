// App.js

import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import MainPage from './components/MainPage';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [totalAttendance, setTotalAttendance] = useState(75); // Initialize with initial total attendance
  const [attendanceData, setAttendanceData] = useState([
    { id: 1, name: 'DSA', attendance: 75, marked: false },
    { id: 2, name: 'OS', attendance: 95, marked: false },
    { id: 3, name: 'CN', attendance: 80, marked: false },
    { id: 4, name: 'DBMS', attendance: 70, marked: false },
    
  ]);
  const [loginDate, setLoginDate] = useState(null); // Initialize with null

  const calculateAverageAttendance = () => {
    const sumOfAttendance = attendanceData.reduce((sum, subject) => sum + subject.attendance, 0);
    return sumOfAttendance / attendanceData.length;
  };

  const handleLogin = (loginId) => {
    // Perform login validation here (for simplicity, we assume successful login)
    setLoggedIn(true);
    setUsername(loginId);
    setLoginDate(new Date()); // Update the login date
  };

  const handleMarkAttendance = (subjectId) => {
    const subjectIndex = attendanceData.findIndex((subject) => subject.id === subjectId);
    if (subjectIndex !== -1 && !attendanceData[subjectIndex].marked) {
      const updatedAttendanceData = [...attendanceData];
      updatedAttendanceData[subjectIndex].attendance += 5;
      updatedAttendanceData[subjectIndex].marked = true;
      setAttendanceData(updatedAttendanceData);

      const newTotalAttendance = calculateAverageAttendance();
      setTotalAttendance(newTotalAttendance); // Update the total attendance value
    }
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <LandingPage onLogin={handleLogin} />
      ) : (
        <>
          <MainPage
            username={username}
            semester="7"
            attendance={totalAttendance} // Use totalAttendance instead of hardcoded value
            subjects={attendanceData}
            onMarkAttendance={handleMarkAttendance}
            loginDate={loginDate}
          />
          <FeedbackForm />
        </>
      )}
    </div>
  );
}

export default App;
