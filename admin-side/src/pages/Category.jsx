import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryStart, deleteDataCategory } from "../stores/actions/actionCreator";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Item() {
  const categories = useSelector(state => state.category.data)
  const dispatch = useDispatch()

  const deleteCategory = (categoryId) => {
    dispatch(deleteDataCategory(categoryId))
  }

  useEffect(() => {
    dispatch(fetchCategoryStart())
  }, [])
  return (
    <>
      <div className="main-panel">
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
              <div
                  className="card-header"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginRight: "10px"
                  }}
                >
                  <h4 className="card-title"> Simple Table</h4>
                  <Link to="/add-category" style={{ fontSize: "30px", color: "#51cbce" }} className="fa fa-plus-square" ></Link>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories.map((category, index) => (
                        <tr key={category.id}>
                          <td>{index + 1}</td>
                          <td>{category.name}</td>
                          <td>
                              <li
                                style={{
                                  display: "inline-block",
                                  marginRight: "10px",
                                }}
                              >
                                <Link to={`/edit-category/${category.id}`}
                                  style={{ fontSize: "20px", color: "#51cbce"  }}
                                  className="fa fa-pencil-square-o"
                                />
                              </li>
                              <li style={{ display: "inline-block" }}>
                                <i
                                  style={{ fontSize: "20px", color: "#51cbce",  cursor: "pointer" }}
                                  className="fa fa-trash-o"
                                  onClick={() => deleteCategory(category.id)}
                                />
                              </li>
                            </td>
                        </tr>
                        
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
