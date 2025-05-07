import React, { useState, useEffect } from 'react';

function LeaveRequest() {
  const [formData, setFormData] = useState({
    subject: '',
    fromDate: '',
    toDate: '',
    reason: '',
    status: 'pending',
    days: 0
  });

  const [submitted, setSubmitted] = useState(false);
  const subjects = ['Math', 'Science', 'English', 'History'];

  // Calculate days when dates change
  useEffect(() => {
    if (formData.fromDate && formData.toDate) {
      const start = new Date(formData.fromDate);
      const end = new Date(formData.toDate);
      const diffTime = Math.max(0, end - start); // Ensure positive value
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // Inclusive count
      setFormData(prev => ({ ...prev, days: diffDays }));
    } else {
      setFormData(prev => ({ ...prev, days: 0 }));
    }
  }, [formData.fromDate, formData.toDate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: value,
      ...(name === 'fromDate' && value > formData.toDate ? { toDate: value } : {})
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.fromDate > formData.toDate) {
      alert('End date cannot be before start date');
      return;
    }
    
    if (formData.days <= 0) {
      alert('Please select valid dates');
      return;
    }
    
    console.log('Leave request submitted:', formData);
    setSubmitted(true);
    setFormData({
      subject: '',
      fromDate: '',
      toDate: '',
      reason: '',
      status: 'pending',
      days: 0
    });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="leave-request">
      <h2>Request Leave</h2>
      
      {submitted && (
        <div className="success-message">
          Your leave request for {formData.days} day(s) has been submitted!
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Subject:</label>
          <select 
            name="subject" 
            value={formData.subject} 
            onChange={handleInputChange} 
            required
          >
            <option value="">Select Subject</option>
            {subjects.map(subject => (
              <option key={subject} value={subject}>{subject}</option>
            ))}
          </select>
        </div>
        
        <div className="date-fields">
          <div className="form-group">
            <label>From Date:</label>
            <input 
              type="date" 
              name="fromDate" 
              value={formData.fromDate} 
              onChange={handleInputChange} 
              required 
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          
          <div className="form-group">
            <label>To Date:</label>
            <input 
              type="date" 
              name="toDate" 
              value={formData.toDate} 
              onChange={handleInputChange} 
              required 
              min={formData.fromDate || new Date().toISOString().split('T')[0]}
            />
          </div>
          
          <div className="form-group days-display">
            <label>Number of Days:</label>
            <div className="days-value">
              {formData.days > 0 ? formData.days : '--'}
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <label>Reason:</label>
          <textarea 
            name="reason" 
            value={formData.reason} 
            onChange={handleInputChange} 
            required 
            rows="4"
            placeholder="Please specify the reason for your leave request"
          />
        </div>
        
        <button type="submit" className="submit-btn">
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default LeaveRequest;