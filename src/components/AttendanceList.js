import React from 'react';
import StudentCard from './StudentCard';

function AttendanceList({ students, markAttendance }) {
  return (
    <div className="attendance-list">
      {students.map(student => (
        <StudentCard key={student.id} student={student} markAttendance={markAttendance} />
      ))}
    </div>
  );
}

export default AttendanceList;
