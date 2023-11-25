import { useDispatch, useSelector } from "react-redux";
import { editItem, getItemById, fetchCategoryStart } from "../stores/actions/actionCreator";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
export default function EditItem() {
  const { id } = useParams()
  const itemById = useSelector((state) => state.itemById.data);
  const categories = useSelector((state) => state.category.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editedItem, setEditedItem] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    categoryId: "",
  });

  useEffect(() => {
    dispatch(fetchCategoryStart());
    dispatch(getItemById(id));
  }, []);

  useEffect(() => {
    setEditedItem({
      name: itemById.name,
      description: itemById.description,
      price: itemById.price,
      imgUrl: itemById.imgUrl,
      categoryId: itemById.categoryId,
    });
  }, [itemById]);


  const handleEdit = (e) => {
    const { name, value } = e.target;
    setEditedItem({
      ...editedItem,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editItem(id, editedItem, navigate));
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
                            value={editedItem.name}
                            onChange={handleEdit}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Description</label>
                          <textarea
                            className="form-control textarea"
                            name="description"
                            value={editedItem.description}
                            onChange={handleEdit}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Price</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Price"
                            name="price"
                            value={editedItem.price}
                            onChange={handleEdit}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Image url</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="image url"
                            name="imgUrl"
                            value={editedItem.imgUrl}
                            onChange={handleEdit}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Category</label>
                          <select
                            className="form-control"
                            name="categoryId"
                            value={editedItem.categoryId}
                            onChange={handleEdit}
                          >
                            {categories.map((el) => (
                              <option key={el.id} value={el.id}>
                                {el.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="update ml-auto mr-auto">
                        <button
                          type="submit"
                          className="btn btn-primary btn-round"
                        >
                         Edit Item
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
