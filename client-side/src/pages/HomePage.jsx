
import { useEffect } from "react";
import Corausel from "../components/Corausel"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchItemsStart } from "../store/actions/actionCreator";

export default function HomePage(){
  const items = useSelector((state) => state.item.data);
  console.log(items, ">>>>>");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItemsStart());
  }, []);
    return (
        <>
        <Corausel />
        <section className="py-main section-menu-list" id="Sarapan Pagi">
        <div className="container">
          <div className="heading text-center animated fadeInUp delayp2">
            <h2 className="title">All Menu</h2>
          </div>
          <div className="row animated fadeInUp delayp3">
            {items.map((el) => (
            <div key={el.id} className="col-6 col-md-3">
              <Link to={`/detail-page/${el.id}`} data-position={1} className="card card-menu">
                <img src={el.imgUrl} />
                <p>{el.name}</p>
              </Link>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Footer /> */}

        </>

    )
}