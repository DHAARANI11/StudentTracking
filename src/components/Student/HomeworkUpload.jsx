import React, { useState, useEffect } from 'react';
import "../../styles/student.css";

function HomeworkUpload() {
  const subjects = {
    'Mathematics': 'Solve the problems on page 20 of your workbook.',
    'Science': 'Write a report on the lab experiment conducted on Monday.',
    'English': 'Write an essay on the topic "The Impact of Technology on Society."',
    'History': 'Prepare a presentation on World War II.',
    'Computer Science': 'Complete the Python coding exercise given in class.',
  };

  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploads, setUploads] = useState({});

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('subjectHomeworkUploads')) || {};
    setUploads(saved);
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size should be less than 5MB');
        return;
      }
      setSelectedFile(file);
    } else {
      alert('Only PDF files are allowed');
    }
  };

  const handleUpload = () => {
    if (!selectedSubject || !selectedFile) {
      alert('Please select a subject and a file.');
      return;
    }

    const newFile = {
      name: selectedFile.name,
      uploadedAt: new Date().toLocaleString(),
    };

    const updatedSubjectUploads = {
      ...uploads,
      [selectedSubject]: [...(uploads[selectedSubject] || []), newFile],
    };

    setUploads(updatedSubjectUploads);
    localStorage.setItem('subjectHomeworkUploads', JSON.stringify(updatedSubjectUploads));

    alert(`Uploaded ${selectedFile.name} for ${selectedSubject}`);
    setSelectedFile(null);
  };

  const renderTableRows = () => {
    const rows = [];
    Object.entries(uploads).forEach(([subject, files]) => {
      files.forEach((file, idx) => {
        rows.push(
          <tr key={`${subject}-${idx}`}>
            <td>{subject}</td>
            <td>{file.name}</td>
            <td>{file.uploadedAt}</td>
          </tr>
        );
      });
    });
    return rows;
  };

  return (
    <div className="homework-upload-container">
      <h2 className="homework-upload-title">Homework Upload</h2>

      <label className="homework-subject-label">
        Select Subject:
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="homework-subject-select"
        >
          <option value="">-- Choose Subject --</option>
          {Object.keys(subjects).map((subject, idx) => (
            <option key={idx} value={subject}>{subject}</option>
          ))}
        </select>
      </label>

      {selectedSubject && (
        <div className="homework-prompt">
          <strong>Homework:</strong>
          <p>{subjects[selectedSubject]}</p>
        </div>
      )}

      <div className="homework-file-input">
        <input type="file" accept=".pdf" onChange={handleFileChange} />
      </div>

      <button
        onClick={handleUpload}
        disabled={!selectedSubject || !selectedFile}
        className="homework-upload-btn"
      >
        Upload Homework
      </button>

      <div className="homework-uploaded-section">
        <h3 className="homework-uploaded-title">Uploaded Homework Records</h3>
        {renderTableRows().length === 0 ? (
          <p>No homework uploaded yet.</p>
        ) : (
          <table className="homework-upload-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>File Name</th>
                <th>Uploaded At</th>
              </tr>
            </thead>
            <tbody>{renderTableRows()}</tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default HomeworkUpload;
