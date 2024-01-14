import axios from 'axios';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
function Register() {
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const registerHandle = async (e) => {
    e.preventDefault();

    await axios
      .post('http://localhost:7000/register', { firstname, lastname, email, password })
      .then((res) => {
        if (res.status === 203) {
          toast.error(res.data.msg);
        } else if (res.status === 201) {
          toast.success(res.data.success);
          navigate('/admin/login');
        } else if (res.data.status === 400) {
          toast.error(res.data.msg);
        }
      })
      .catch((err) => toast.error(err.response.data.message.name));
  };

  return (
    <div className="bg-primary">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">Create Account</h3>
                    </div>
                    <Toaster />
                    <div className="card-body">
                      <form onSubmit={registerHandle}>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input
                                className="form-control"
                                id="inputFirstName"
                                type="text"
                                placeholder="Enter your first name"
                                onChange={(e) => setFirstName(e.target.value)}
                              />
                              <label htmlFor="inputFirstName">First name</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating">
                              <input
                                className="form-control"
                                id="inputLastName"
                                type="text"
                                placeholder="Enter your last name"
                                onChange={(e) => setLastName(e.target.value)}
                              />
                              <label htmlFor="inputLastName">Last name</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            id="inputEmail"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="name@example.com"
                          />
                          <label htmlFor="inputEmail">Email address</label>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input
                                className="form-control"
                                id="inputPassword"
                                type="password"
                                placeholder="Create a password"
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <label htmlFor="inputPassword">Password</label>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input
                                className="form-control"
                                id="inputPasswordConfirm"
                                type="password"
                                placeholder="Confirm password"
                              />
                              <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 mb-0">
                          <div className="d-grid">
                            <button type="submit" className="btn btn-primary btn-block">
                              Create Account
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small">
                        <a href="/admin/login">Have an account? Go to login</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="layoutAuthentication_footer">
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright © Your Website 2023</div>
                <div>
                  <a href="#">Privacy Policy</a>·<a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Register;
