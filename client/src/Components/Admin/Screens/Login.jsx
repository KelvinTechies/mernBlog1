import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loginHandle = async () => {
    await axios.post('http://localhost:3000/login', { email, password }).then((res) => {
      if (res.status == 200) {
        localStorage.setItem('user', res.data.email);
        navigate('/admin');
      }
    });
  };
  return (
    <div className="bg-primary">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-5">
                  <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header">
                      <h3 class="text-center font-weight-light my-4">Login</h3>
                    </div>
                    <div class="card-body">
                      <form onSubmit={loginHandle}>
                        <div class="form-floating mb-3">
                          <input
                            onChange={(e) => setEmail(e.target.value)}
                            class="form-control"
                            id="inputEmail"
                            type="email"
                            placeholder="name@example.com"
                          />
                          <label for="inputEmail">Email address</label>
                        </div>
                        <div class="form-floating mb-3">
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            class="form-control"
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                          />
                          <label for="inputPassword">Password</label>
                        </div>
                        <div class="form-check mb-3">
                          <input class="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                          <label class="form-check-label" for="inputRememberPassword">
                            Remember Password
                          </label>
                        </div>
                        <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <a class="small" href="#">
                            Forgot Password?
                          </a>
                          <a class="btn btn-primary" href="#">
                            Login
                          </a>
                        </div>
                      </form>
                    </div>
                    <div class="card-footer text-center py-3">
                      <div class="small">
                        <a href="/admin/register">Need an account? Sign up!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="layoutAuthentication_footer">
          <footer class="py-4 bg-light mt-auto">
            <div class="container-fluid px-4">
              <div class="d-flex align-items-center justify-content-between small">
                <div class="text-muted">Copyright &copy; Your Website 2023</div>
                <div>
                  <a href="#">Privacy Policy</a>
                  &middot;
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Login;
