import { useDispatch, useSelector } from "react-redux";
import { getCategoryById, editCategory } from "../stores/actions/actionCreator";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function EditCategory() {
  const { id } = useParams()
  const CategoryById = useSelector((state) => state.categoryById.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editedCategory, setEditedCategory] = useState({
    name: "",
  });

  useEffect(() => {
    dispatch(getCategoryById(id));
  }, []);

  useEffect(() => {
    setEditedCategory({
      name: CategoryById.name,
    });
  }, [CategoryById]);


  const handleEdit = (e) => {
    const { name, value } = e.target;
    setEditedCategory({
      ...editedCategory,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editCategory(id, editedCategory, navigate));
  };

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
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name item"
                            name="name"
                            value={editedCategory.name}
                            onChange={handleEdit}
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
                            Edit Category
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
