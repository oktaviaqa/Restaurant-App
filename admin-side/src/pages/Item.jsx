import { useDispatch, useSelector } from "react-redux";
import {
  fetchItemsStart,
  fetchCategoryStart,
  deleteItem
} from "../stores/actions/actionCreator";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Item() {
  const items = useSelector((state) => state.item.data);
  const dispatch = useDispatch();

  const deleteHandler = ( itemId) => {
    dispatch(deleteItem(itemId))
  }
  
  useEffect(() => {
    dispatch(fetchItemsStart());
  }, []);
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
                  <h4 className="card-title"> List Item</h4>
                <Link to="/addItem"> <i style={{ fontSize: "30px", color: "#51cbce" }} className="fa fa-plus-square" ></i> </Link> 
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr>
                          <th>No</th>
                          <th>Name</th>
                          <th>Category</th>
                          <th>Description</th>
                          <th>Price</th>
                          <th>Image</th>
                          <th>Ingredients</th>
                          <th>Created By</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item, index) => (
                          <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.Category.name}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td><img src={item.imgUrl}></img></td>
                            <td>{item.Ingredients.map((ingredient) => (
                              <span key={ingredient.id}>{ingredient.name}, </span>
                            ))}</td>
                            <td>{item.User.username}</td>
                            <td>
                              <li
                                style={{
                                  display: "inline-block",
                                  marginRight: "10px",
                                }}
                              >
                                <Link to={`/edit-item/${item.id}`}
                                  style={{ fontSize: "20px", color: "#51cbce"  }}
                                  className="fa fa-pencil-square-o"
                                />
                              </li>
                              <li style={{ display: "inline-block" }}>
                                <i
                                  style={{ fontSize: "20px", color: "#51cbce", cursor: "pointer" }}
                                  className="fa fa-trash-o"
                                  onClick={() =>
                                     deleteHandler(item.id)}
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
