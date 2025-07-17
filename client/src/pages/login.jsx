import React from "react";

const login = () => {
  return (
    <div>
    <div className="container">
      <div className="main-content">
        <div className="logo">
          <span className="logo-symbol">√</span>
          <span className="logo-text">pasthit</span>
        </div>

        <h1 className="welcome-heading">Welcome to Upasthit</h1>
        <div className="login-card">
          <div className="card-content">
            <div className="toggle-container">
              <div className="toggle-group">
                <button className="toggle-item" id="teacher-toggle">Teacher</button>
                <button className="toggle-item active" id="student-toggle">Student</button>
              </div>
            </div>

            <h2 className="login-heading">Login</h2>

            <form className="login-form" id="loginForm">
              <div className="form-group">
                <label for="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label for="password" className="form-label">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-input"
                  required
                />
              </div>

              <div className="forgot-password">
                <button type="button" className="link-button">Forgot password?</button>
              </div>

              <div className="submit-container">
                <button type="submit" className="submit-button">Login</button>
              </div>

              <div className="contact-admin">
                <button type="button" className="link-button underline">No account contact admin</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default login;
