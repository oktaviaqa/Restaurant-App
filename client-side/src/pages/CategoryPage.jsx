import { useDispatch, useSelector } from "react-redux";
import BanerBirthday from "../components/BanerBirthday"
import { getCategoryById } from "../store/actions/actionCreator";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
export default function CategoryPage(){
  const { id }= useParams()
  const categoriesById = useSelector(state => state.categoryById.data)
  console.log(categoriesById);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoryById(id));
  }, [id]);
    return(
        <>
        <BanerBirthday />
        
      <section className="py-main section-menu-list" id="Ayam">
        <div className="container">
          <div className="heading text-center animated fadeInUp delayp2">
            <h2 className="title">
              { categoriesById.name }
            </h2>
          </div>
          <div className="row animated fadeInUp delayp3">
            { categoriesById && categoriesById.Items && categoriesById.Items.map((el) => (
            <div className="col-6 col-md-3">
              <Link to={`/detail-page/${el.id}`} data-id={536} data-name="Thai Sweet Chili" data-category="Ayam" data-position={1} className="card card-menu">
                <img src={el.imgUrl} className="img-fluid" />
                <p>{el.name}</p>
              </Link>
            </div>
              
            ))}
          </div>
        </div>
      </section>
        </>
    )
}