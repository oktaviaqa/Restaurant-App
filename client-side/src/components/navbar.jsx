import { useSelector, useDispatch } from "react-redux"
import { fetchCategoryStart } from "../store/actions/actionCreator"
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"

export default function Navbar(){
  const categories = useSelector(state => state.category.data)
  console.log(categories);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCategoryStart())
  }, [])
    return(
        <nav className="navbar navbar-mcd navbar-expand-md fixed-top light">
        <div className="container">
          <Link to='/' className="navbar-brand animated fadeInDown delayp4">
            <img src="https://d2vuyvo9qdtgo9.cloudfront.net/assets/img/brand/logo_mcd.png" alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ml-auto">
            {categories.map((el) => (
              <li key={el.id} className="nav-item">
                <Link to={`/category/${el.id}`} className="nav-link">
                  {el.name} 
                </Link>
              </li>
              ))}
             
              <li className="nav-item">
                <a className="nav-link m-0" href="/MyM-Rewards">
                  <img src="https://www.mcdonalds.co.id/assets/img/reward/my-reward.svg" className="img-fluid navbar-reward-item" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link m-0" href="/mcdxpokemongo">
                  <img src="https://www.mcdonalds.co.id/assets/img/pokemon-go/img_pkemon-go-7.png" className="img-fluid navbar-pokemon-item" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-slide light">
          <div className="navbar-slide-close">
            <span className="icon-bar icon-bar-1" />
            <span className="icon-bar icon-bar-2" />
            <span className="icon-bar icon-bar-3" />
          </div>
          <div className="content">
            <a href="https://www.mcdelivery.co.id/" className="btn btn-yellow mb-3 pesan-tag" target="_blank">
              <img src="https://d2vuyvo9qdtgo9.cloudfront.net/assets/img/icon/ic_mcdelivery.svg" className="mcd-delivery-icon" alt="Yellow Element" />
              <span>Pesan Sekarang</span>
            </a>
            <ul className="nav-slide-list">
              <li className="nav-slide-item animated fadeInUp delayp2" id="navMenuMobile">
                <a className="nav-link">Menu</a>
              </li>
              <li className="nav-slide-item animated fadeInUp delayp3" id="navPromoMobile">
                <a href="/promo" className="nav-link">
                  Promo
                </a>
              </li>
              <li className="nav-slide-item animated fadeInUp delayp3">
                <a className="nav-link d-flex align-items-center" href="/MyM-Rewards">
                  <img src="https://www.mcdonalds.co.id/assets/img/reward/my-reward.svg" className="img-fluid navbar-reward-item" />
                </a>
              </li>
              <li className="nav-slide-item animated fadeInUp delayp3">
                <a className="nav-link d-flex align-items-center" href="/mcdxpokemongo">
                  <img src="https://www.mcdonalds.co.id/assets/img/pokemon-go/img_pkemon-go-7.png" className="img-fluid navbar-pokemon-item" />
                </a>
              </li>
              <li className="nav-slide-item animated fadeInUp delayp4" id="navDuniaAnakMobile">
                <a href="/dunia-anak" className="nav-link">
                  Dunia Anak
                </a>
              </li>
              <li className="nav-slide-item animated fadeInUp delayp5" id="navWhatsOnMobile">
                <a href="/whats-on" className="nav-link">
                  Berita Terkini
                </a>
              </li>
              <li className="nav-slide-item animated fadeInUp delayp6" id="navMakinKenalMakinSayang">
                <a href="https://mcd-pahlawan-sekitarkita.com/?utm_source=mcdonalds.co.id&utm_medium=referral&utm_campaign=mcd-pahlawan-sekitarkita" className="nav-link">
                  Pahlawan di Sekitar Kita
                </a>
              </li>
              <li className="nav-slide-item animated fadeInUp delayp6" id="navMakinKenalMakinSayang">
                <a href="/makin-kenal-makin-sayang" className="nav-link">
                  Makin Kenal Makin Sayang
                </a>
                <ul className="pl-0">
                  <li>
                    <a href="/makin-kenal-makin-sayang/produk-kami">Produk Kami</a>
                  </li>
                  <li>
                    <a href="/makin-kenal-makin-sayang/restoran-kami">Restoran Kami</a>
                  </li>
                  <li>
                    <a href="/makin-kenal-makin-sayang/komitmen-dan-tanggungjawab">Komitmen dan Tanggung Jawab
                      Kami</a>
                  </li>
                </ul>
              </li>
              <li className="nav-slide-item animated fadeInUp delayp7" id="navLocationMobile">
                <a href="/locations" className="nav-link">
                  Lokasi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}