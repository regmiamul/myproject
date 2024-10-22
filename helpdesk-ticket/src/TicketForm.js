import React, { useState } from 'react';
import './App.css'; // Make sure to import your CSS

const TicketForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        department: '',
        contact: '',
        issueType: 'hardware',
        priority: 'low',
        description: '',
        steps: '',
        attachments: null,
        ticketSubmitted: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, attachments: e.target.files });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center" >IT Helpdesk Ticket Submission</h1>
            <form onSubmit={handleSubmit}>
                <fieldset className="border p-3 mb-3">
                    <legend className="w-auto">Contact Information</legend>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Your Name:</label>
                        <input type="text" className="form-control" id="name" name="name" required 
                               value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="clubType" className="form-label">Club Type:</label>
                        <select id="clubType" name="department" className="form-select" 
                                value={formData.department} onChange={handleChange} required>
                            <option value="">Select Club Type</option>
                            <option value="sports">Club Lime</option>
                            <option value="music">Hiit Republic</option>
                            <option value="art">GroundUP</option>
                            <option value="technology">Rebalance</option>
                            <option value="community">PulsFitness</option>
                        </select>
                        {formData.department === '' && <div className="text-danger">This field is required.</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contact" className="form-label">Contact Information:</label>
                        <input type="email" className="form-control" id="contact" name="contact" required 
                               value={formData.contact} onChange={handleChange} />
                    </div>
                </fieldset>

                <fieldset className="border p-3 mb-3">
                    <legend className="w-auto" >Issue Details</legend>
                    <div className="mb-3">
                        <label htmlFor="issue-type" className="form-label">Type of Issue:</label>
                        <select id="issue-type" name="issueType" className="form-select" 
                                value={formData.issueType} onChange={handleChange} required>
                            <option value="hardware">Hardware</option>
                            <option value="software">Software</option>
                            <option value="network">Network</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="priority" className="form-label">Priority Level:</label>
                        <select id="priority" name="priority" className="form-select" 
                                value={formData.priority} onChange={handleChange} required>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description of the Problem:</label>
                        <textarea id="description" name="description" className="form-control" rows="5" 
                                  required value={formData.description} onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="steps" className="form-label">Troubleshooting Steps:</label>
                        <textarea id="steps" name="steps" className="form-control" rows="3" 
                                  value={formData.steps} onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="attachments" className="form-label">Attachments (if any):</label>
                        <input type="file" className="form-control" id="attachments" name="attachments" 
                               multiple onChange={handleFileChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Was the Ticket Submitted?</label>
                        <div className="mb-2">
                            <div className="form-check form-check-inline">
                                <input 
                                    type="radio" 
                                    id="ticketSubmittedYes" 
                                    name="ticketSubmitted" 
                                    className="form-check-input" 
                                    value="yes" 
                                    checked={formData.ticketSubmitted === 'yes'} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <label htmlFor="ticketSubmittedYes" className="form-check-label">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input 
                                    type="radio" 
                                    id="ticketSubmittedNo" 
                                    name="ticketSubmitted" 
                                    className="form-check-input" 
                                    value="no" 
                                    checked={formData.ticketSubmitted === 'no'} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <label htmlFor="ticketSubmittedNo" className="form-check-label">No</label>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <button type="submit" className="btn btn-primary w-100">Submit Ticket</button>
            </form>
        </div>
    );
};

export default TicketForm;
