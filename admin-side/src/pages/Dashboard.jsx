import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsStart, fetchCategoryStart } from "../stores/actions/actionCreator";

export default function Dashboard() {

  const items = useSelector(state => state.item.data)
  const categories = useSelector(state => state.category.data)
  // const ingredients = useSelector(state => state.ingredient.data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItemsStart())
    dispatch(fetchCategoryStart())
  }, [])
  return (
    <>
      <div className="main-panel">
        <div className="content">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <div className="numbers">
                        <p className="card-category">Item total</p>
                        <p className="card-title">{items.length}</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh" />
                    Update Now
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-body ">
                  <div className="row">
                    <div className="col-5 col-md-4">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </div>
                    <div className="col-7 col-md-8">
                      <div className="numbers">
                        <p className="card-category">Category Total</p>
                        <p className="card-title">{categories.length}</p>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer ">
                  <hr />
                  <div className="stats">
                    <i className="fa fa-refresh" />
                    Update now
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
