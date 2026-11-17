import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { submitContactEnquiry } from '../services/apiService';

export default function ContactForm({
  initialEnquiryType = 'General Enquiry',
  initialPropertyTitle = '',
  onSuccess,
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    enquiryType: initialEnquiryType,
    propertyTitle: initialPropertyTitle,
    budget: 'Any Budget',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const budgetOptions = [
    'Any Budget',
    'Under ₹2 Cr',
    '₹2 Cr - ₹5 Cr',
    '₹5 Cr - ₹10 Cr',
    '₹10 Cr - ₹20 Cr',
    '₹20 Cr+',
  ];

  const enquiryTypes = [
    'General Enquiry',
    'Buy Property',
    'Schedule a Site Visit',
    'Sell / List Property',
    'Investment Advisory',
    'Rental / Lease',
  ];

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    const cleanPhone = formData.phone.replace(/[\s-+()]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your mobile number';
    } else if (
      !/^[6-9]\d{9}$/.test(cleanPhone.slice(-10)) &&
      cleanPhone.length < 10
    ) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your property requirements';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await submitContactEnquiry(formData);
      setSubmitResult({
        success: true,
        message: response.message,
        referenceId: response.referenceId,
      });

      // Clear form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        enquiryType: 'General Enquiry',
        propertyTitle: '',
        budget: 'Any Budget',
        message: '',
      });

      if (onSuccess) onSuccess(response);
    } catch (err) {
      setSubmitResult({
        success: false,
        message: err.message || 'Something went wrong. Please try again or call us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="luxury-contact-form-card">
      <div className="form-card-header">
        <h3 className="form-heading">Send Us a Message</h3>
        <p className="form-subheading">
          Fill out the details below and our senior advisor will connect with you within 2 business hours.
        </p>
      </div>

      {submitResult && (
        <div
          className={`form-alert ${submitResult.success ? 'alert-success' : 'alert-error'}`}
          role="alert"
        >
          {submitResult.success ? (
            <CheckCircle2 size={20} className="alert-icon" />
          ) : (
            <AlertCircle size={20} className="alert-icon" />
          )}
          <div className="alert-content">
            <span className="alert-title">
              {submitResult.success ? 'Enquiry Submitted Successfully' : 'Submission Failed'}
            </span>
            <p className="alert-desc">{submitResult.message}</p>
            {submitResult.referenceId && (
              <span className="alert-ref">Reference ID: <strong>{submitResult.referenceId}</strong></span>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="contact-form">
        <div className="form-row two-cols">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor="fullName" className="form-label">
              Full Name <span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Surendra Nath"
              className={`form-input ${errors.fullName ? 'has-error' : ''}`}
            />
            {errors.fullName && <span className="form-error-msg">{errors.fullName}</span>}
          </div>

          {/* Email Address */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address <span className="required-star">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className={`form-input ${errors.email ? 'has-error' : ''}`}
            />
            {errors.email && <span className="form-error-msg">{errors.email}</span>}
          </div>
        </div>

        <div className="form-row two-cols">
          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Phone Number <span className="required-star">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 1234567891"
              className={`form-input ${errors.phone ? 'has-error' : ''}`}
            />
            {errors.phone && <span className="form-error-msg">{errors.phone}</span>}
          </div>

          {/* Enquiry Type */}
          <div className="form-group">
            <label htmlFor="enquiryType" className="form-label">
              Enquiry Type
            </label>
            <select
              id="enquiryType"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              className="form-select"
            >
              {enquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row two-cols">
          {/* Interested Property */}
          <div className="form-group">
            <label htmlFor="propertyTitle" className="form-label">
              Interested Property / Location
            </label>
            <input
              type="text"
              id="propertyTitle"
              name="propertyTitle"
              value={formData.propertyTitle}
              onChange={handleChange}
              placeholder="e.g. The Grand Palm Villa, Worli"
              className="form-input"
            />
          </div>

          {/* Budget */}
          <div className="form-group">
            <label htmlFor="budget" className="form-label">
              Estimated Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="form-select"
            >
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Your Requirements / Message <span className="required-star">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what you are looking for (bedrooms, amenities, timeline, preferred site visit date)..."
            className={`form-textarea ${errors.message ? 'has-error' : ''}`}
          />
          {errors.message && <span className="form-error-msg">{errors.message}</span>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-submit-form"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="btn-spinner" />
              <span>Transmitting Enquiry...</span>
            </>
          ) : (
            <>
              <span>Submit Enquiry</span>
              <Send size={15} className="btn-send-icon" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

