import { useDispatch, useSelector} from "react-redux";
import { registerStart } from "../stores/actions/actionCreator";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
export default function Register() {
  const [formRegister, setFormRegister] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    phoneNumber: "",
    address: ""
  });

  const dispatch = useDispatch()

  const targetHandler = (e) => {
    const { name, value } = e.target;

    setFormRegister( {
      ...formRegister,
      [name]: value,
    });
  }

  const navigate = useNavigate()
  const submitForm = (e) => {
    e.preventDefault();
    dispatch(registerStart(formRegister))
    toast.success('Registration successful');
    navigate('/')
  }
  return (
    <>
      <div className="main-panel">
        <div className="content">
          <div className="row">
            <div className="col-md-8">
              <div className="card card-user">
                <div className="card-header">
                  <h5 className="card-title">Register Admin</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={submitForm}>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>Username</label>
                          <input
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Username"
                            value={formRegister.username}
                            onChange={targetHandler}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            value={formRegister.email}
                            onChange={targetHandler}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="text"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            value={formRegister.password}
                            onChange={targetHandler}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Phone number</label>
                          <input
                            type="text"
                            name="phoneNumber"
                            className="form-control"
                            placeholder="Phone Number"
                            value={formRegister.phoneNumber}
                            onChange={targetHandler}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="Home Address"
                            value={formRegister.address}
                            onChange={targetHandler}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                    <div class="update ml-auto mr-auto">
                      <button  type="submit" class="btn btn-primary btn-round">Register</button>
                    </div>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}
