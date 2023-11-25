import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { login } from "../stores/actions/actionCreator";
export default function Login() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch()

  function targetHandler(e) {
    const { name, value } = e.target;

    setLoginForm({
      ...loginForm,
      [name]: value
    })
  }

  const navigate = useNavigate()
  const submitForm = (e) => {
    e.preventDefault();
    
    dispatch(login(loginForm, navigate))
  }
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h2 className="heading-section">Login </h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div
                  className="img"
                  style={{ backgroundImage: "url(../src/assets/img/mike.jpg)" }}
                ></div>
                <div className="login-wrap p-4 p-md-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Sign In</h3>
                    </div>
                  </div>
                  <form onSubmit={submitForm} action="#" className="signin-form">
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="name">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        value={loginForm.username}
                        onChange={targetHandler}
                        className="form-control"
                        placeholder="Username"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="email">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={loginForm.email}
                        onChange={targetHandler}
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={loginForm.password}
                        onChange={targetHandler}
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <button 
                        type="submit"
                        className="form-control btn btn-primary rounded submit px-3"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}