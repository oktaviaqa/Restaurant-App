import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategoryStart, 
  addItemStart,
} from "../stores/actions/actionCreator";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export default function AddItem() {
  const categories = useSelector((state) => state.category.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryStart());
  }, []);

  const [addItem, setAddItem] = useState({
    name: "",
    description: "",
    price: "",
    imgUrl: "",
    categoryId: "",
  });

  const [addIngredient, setAddIngredient] = useState([
    {
      name: "",
    },
    {
      name: "",
    },
    {
      name: ""
    }
  ]);

  const targetHandler = (e) => {
    const { name, value } = e.target;

    setAddItem({
      ...addItem,
      [name]: value,
    });
  };

  const handleIngredient = (e, i) => {
    const { name, value } = e.target;

    const newArray = [...addIngredient]
    newArray[i][name] = value
    
    setAddIngredient(newArray);
  };

  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    addItem.ingredients = addIngredient
    dispatch(addItemStart(addItem));
    
    navigate("/item");
    toast.success('success')
  };
  return (
    <>
     <Toaster />
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
                            value={addItem.name}
                            onChange={targetHandler}
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
                            value={addItem.description}
                            onChange={targetHandler}
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
                            value={addItem.price}
                            onChange={targetHandler}
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
                            value={addItem.imgUrl}
                            onChange={targetHandler}
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
                            value={addItem.categoryId}
                            onChange={targetHandler}
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
                      <div className="col-md-4 pr-1">
                        <div className="form-group">
                          <label>Ingredient 1</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ingredient 1"
                            name="name"
                            value={addIngredient[0].name}
                            onChange={(e) => handleIngredient(e, 0)}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 px-1">
                        <div className="form-group">
                          <label>Ingredient 2</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ingredient 2"
                            name="name"
                            value={addIngredient[1].name}
                            onChange={(e) => handleIngredient(e, 1)}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 pl-1">
                        <div className="form-group">
                          <label>Ingredient 3</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="ingredient 3"
                            name="name"
                            value={addIngredient[2].name}
                            onChange={(e) => handleIngredient(e, 2)}
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
                          Add Item
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
