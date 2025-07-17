import React, { useEffect,useRef} from "react";
import axios from "axios";

const Login = () => {
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    try {
      const response = await axios.post("http://localhost:3000/api/signIn", data);
      console.log(response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div>
      <div className="">
        <div className=" w-[90vw] justify-start flex">
          <img src="./Upasthit_Logo.png" alt="upasthit" className="m-[50px]" />
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

            <h2 className="login-heading  bg-amber-100 text-2xl">Login</h2>

            <form
              className="login-form"
              id="loginForm"
              ref={form}
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  className="form-input"
                  name="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
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
  );
};

export default Login;
