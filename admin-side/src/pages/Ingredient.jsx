// import { useDispatch, useSelector } from "react-redux"
// import { fetchIngredientStart } from "../stores/actions/actionCreator"
// import { useEffect } from "react"

// export default function Ingredient() {
//     const ingredients = useSelector(state => state.ingredient.data)
//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(fetchIngredientStart())
//     }, [])
    // return (
        // <>
        <div>
        <div className="main-panel">
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title"> Simple Table</h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead className=" text-primary">
                        <tr>
                          <th>No</th>
                          <th>Item</th>
                          <th>Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {ingredients.map((item, index) => (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>{item.itemId}</td>
                          <td>{item.name}</td>
                        </tr>
                        ))} */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
        // </>
    // )
    
// }