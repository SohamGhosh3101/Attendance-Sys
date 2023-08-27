// AttendancePage.js

import React from 'react';
import './AttendancePage.css';

function AttendancePage({ subjects, onMarkAttendance }) {
  return (
    <div className="attendance-page">
      <h3>Subjects</h3>
      <div className="subject-list">
        {subjects.map((subject) => (
          <div className="subject" key={subject.id}>
            <h4>{subject.name}</h4>
            <div className="attendance-bar">
              <div
                className="progress-bar"
                style={{ width: `${subject.attendance}%`, backgroundColor: subject.color }}
              ></div>
            </div>
            <p>{subject.attendance}%</p>
            <button
              className="attendance-button"
              onClick={() => onMarkAttendance(subject.id)}
              style={{ backgroundColor: subject.buttonColor }}
              disabled={subject.attendance >= 100} // Disable if attendance is 100% or more
            >
              {subject.attendance < 100 ? 'Mark Attendance' : 'Attendance Full'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AttendancePage;
