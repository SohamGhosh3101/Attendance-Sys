// MainPage.js

import React from 'react';
import './MainPage.css';

function MainPage({ username, semester, attendance, subjects, onMarkAttendance, loginDate }) {
  return (
    <div className="main-page">
      <h1 className="welcome-header">Welcome, {username}!</h1>
      <p className="semester">Semester: {semester}</p>
      <p className="attendance">Total Attendance: {attendance}%</p>
      <p className="login-date">Logged in on: {loginDate ? loginDate.toDateString() : 'Not available'}</p>
      <div className="subject-list">
        {subjects.map((subject) => (
          <div key={subject.id} className="subject-container">
            <h2 className="subject-title">{subject.name}</h2>
            <div className="loading-bar">
              <div
                className="progress"
                style={{ width: `${subject.attendance}%`, backgroundColor: 'green' }}
              ></div>
            </div>
            <p className="progress-label">{subject.attendance}%</p>
            <button
              className="attendance-button"
              onClick={() => {
                if (subject.attendance < 100) {
                  onMarkAttendance(subject.id);
                }
              }}
              disabled={subject.attendance >= 100}
            >
              {subject.attendance < 100 ? 'Mark Attendance' : 'Attendance Full'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
