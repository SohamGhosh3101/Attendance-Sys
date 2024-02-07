import React, { useState } from 'react';
import './FeedbackForm.css';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Implement feedback submission logic (You can update this part)
    // For now, let's just set 'submitted' to true.
    setSubmitted(true);
  };

  return (
    <div className="feedback-form">
      {!submitted ? (
        <>
          <h3>Provide Feedback</h3>
          <textarea
            placeholder="Enter your feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit Feedback</button>
        </>
      ) : (
        <div>
          <h3>Thank You!</h3>
          <p>Your feedback has been submitted successfully.</p>
          {/* You can add additional content or redirect to a new page here */}
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;