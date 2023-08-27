import React from 'react';

function StudentCard({ student, markAttendance }) {
  return (
    <div className={`student-card ${student.attended ? 'attended' : ''}`}>
      <img src={student.photo} alt={`${student.name}`} />
      <h3>{student.name}</h3>
      <button onClick={() => markAttendance(student.id)} disabled={student.attended}>
        {student.attended ? 'Attended' : 'Mark Attendance'}
      </button>
    </div>
  );
}

export default StudentCard;
