import React, { useState } from 'react';
import './Main.css'; // Ensure your CSS styles are applied

function Main() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    importPermit: '',
    ipIssueDate: '',
    ipExpiryDate: '',
    billOfLading: '',
    blIssueDate: '',
    phytoCertificate: '',
    pcDate: '',
    releaseDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Client data:', formData);
    // Submit the form (e.g., save data to state or API)
    // After submission, you might want to clear the form data
    setFormData({
      name: '',
      importPermit: '',
      ipIssueDate: '',
      ipExpiryDate: '',
      billOfLading: '',
      blIssueDate: '',
      phytoCertificate: '',
      pcDate: '',
      releaseDate: ''
    });
    setShowForm(false); // Close the form after submission
  };

  return (
    <div className={`main ${showForm ? 'hidden' : ''}`}>
      <div className="main-container">
        <button onClick={() => setShowForm(true)} className="add-btn">
          Add Client
        </button>

        <div className="records">
          {/* Client list or other content can go here */}
        </div>

        {showForm && (
          <div className="popup">
            <div className="popup-inner">
              <form className="client-form" onSubmit={handleSubmit}>
                <h2>Add Client</h2>
                <div className="form-column">
                  <label>Client Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  
                  <label>Import Permit</label>
                  <input
                    type="text"
                    name="importPermit"
                    value={formData.importPermit}
                    onChange={handleInputChange}
                    required
                  />

                  <label>IP Issue Date</label>
                  <input
                    type="date"
                    name="ipIssueDate"
                    value={formData.ipIssueDate}
                    onChange={handleInputChange}
                    required
                  />

                  <label>IP Expiry Date</label>
                  <input
                    type="date"
                    name="ipExpiryDate"
                    value={formData.ipExpiryDate}
                    onChange={handleInputChange}
                    required
                  />

                  <label>Bill of Lading</label>
                  <input
                    type="text"
                    name="billOfLading"
                    value={formData.billOfLading}
                    onChange={handleInputChange}
                    required
                  />

                  <label>BL Issue Date</label>
                  <input
                    type="date"
                    name="blIssueDate"
                    value={formData.blIssueDate}
                    onChange={handleInputChange}
                    required
                  />

                  <label>Phyto Certificate (PC)</label>
                  <input
                    type="text"
                    name="phytoCertificate"
                    value={formData.phytoCertificate}
                    onChange={handleInputChange}
                    required
                  />

                  <label>PC Date</label>
                  <input
                    type="date"
                    name="pcDate"
                    value={formData.pcDate}
                    onChange={handleInputChange}
                    required
                  />

                  <label>Release Date</label>
                  <input
                    type="text"
                    name="releaseDate"
                    value={formData.releaseDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
              </form>
              <button className="close-btn" onClick={() => setShowForm(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
