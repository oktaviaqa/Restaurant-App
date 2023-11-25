import { useDispatch, useSelector } from "react-redux";
import { getItemById } from "../store/actions/actionCreator";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function DetailPage() {
  const items = useSelector((state) => state.itemById.data);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getItemById(id));
  }, [id]);
  return (
    <>
      <section className="section-menu-detail-cover bg-cream">
        <div className="container position-relative py-main">
          <div className="row">
            <div className="col-md-5">
              <img src={items.imgUrl} />
            </div>
            <div className="col-md-7 content-center">
              <div className="heading">
                <h2 className="title animated fadeInUp delayp2">
                  {items.name}
                </h2>
                <p className="subtitle animated fadeInUp delayp3 mb-0">
                  {items.description}
                </p>
                <p className="subtitle animated fadeInUp delayp3 mb-0">
                  Comes with ingredients:{" "}
                  {items.Ingredients &&
                    items.Ingredients.map((el) => el.name).join(", ")}
                </p>

                <div className="detail-info">
                  <p
                    className="subtitle animated fadeInUp delayp2"
                    style={{
                      color: "#ff5733",
                      fontSize: "18px",
                      margin: "10px 0",
                    }}
                  >
                    Rp {items.price}
                  </p>
                  {items.Category && (
                    <p
                      className="subtitle animated fadeInUp delayp2"
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        margin: "10px 0",
                      }}
                    >
                      {items.Category.name}
                    </p>
                  )}
                   {items.User && (
                    <p
                      className="subtitle animated fadeInUp delayp2"
                      style={{
                        fontSize: '13px',
                        margin: "10px 0",
                        position: "absolute",
                        bottom: "0",
                        right: "0",
                      }}
                    >
                      Created By: {items.User.username}
                    </p>
                   )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
