import { useDispatch, useSelector } from "react-redux";
import { addFormCategory } from "../stores/actions/actionCreator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddCategory() {
    const [addCategory, setAddCategory] = useState({
        name: ""
    });

    const targetHandler = (e) => {
        const { name, value } = e.target;

        setAddCategory({
            ...addCategory, 
            [name]: value
        });
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(addFormCategory(addCategory, navigate))

    }
  return (
    <>
      <div className="main-panel">
        <div className="content">
          <div className="row">
            <div className="col-md-8">
              <div className="card card-user">
                <div className="card-header">
                  <h5 className="card-title">Add Item</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={submitForm}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name item"
                            name="name"
                            value={addCategory.name}
                            onChange={targetHandler}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="update ml-auto mr-auto">
                        <button
                          type="submit"
                          className="btn btn-primary btn-round"
                        >
                          Add Category
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
