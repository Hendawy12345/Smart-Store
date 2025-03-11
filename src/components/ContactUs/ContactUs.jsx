import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";
import { Helmet } from "react-helmet";
    
export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form validation
    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
        if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);

        // Send email using EmailJS
        emailjs.send(
            "service_9zuveo5", // ✅ Your Service ID
            "template_y17aux8", // ✅ Your Template ID
            {
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            "TYxvzl2JxA8bGmXp-" // ✅ Your Public Key
        )
            .then((response) => {
                console.log("Email sent successfully!", response);
                setSuccess(true);
                setFormData({ name: "", email: "", message: "" }); // Clear form
                setTimeout(() => setSuccess(false), 3000); // Hide success message
            })
            .catch((error) => {
                console.error("Error sending email:", error);
                alert("Failed to send message. Please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="container mt-5">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us</title>

            </Helmet>
            <h2 className="text-center mb-4">📞 Contact Us</h2>

            <div className="row">
                {/* Contact Info */}
                <div className="col-lg-5 mb-4">
                    <div className="card p-4 shadow-sm">
                        <h4>Get in Touch</h4>
                        <p className="text-muted">Have any questions? Feel free to reach out to us.</p>
                        <div className="contact-info">
                            <p><FaPhone className="me-2 text-primary" /> +20 (122) 8045-976</p>
                            <p><FaEnvelope className="me-2 text-primary" /> hendawyhasan56@gmail.com</p>
                            <p><FaMapMarkerAlt className="me-2 text-primary" /> Cairo, Egypt</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="col-lg-7">
                    <div className="card p-4 shadow-sm">
                        {success && <div className="alert alert-success">✅ Message sent successfully!</div>}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                />
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea
                                    name="message"
                                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message here"
                                    rows="4"
                                />
                                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                            </div>

                            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Styles */}
            <style>{`
                .contact-info p {
                    font-size: 16px;
                    margin: 5px 0;
                }
                .contact-info .text-primary {
                    font-size: 18px;
                }
                .card {
                    border-radius: 15px;
                    background: #f8f9fa;
                }
            `}</style>
        </div>
    );
}
