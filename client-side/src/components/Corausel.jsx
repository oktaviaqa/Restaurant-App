export default function Corausel(){
    return(
        <>
        <div className="section-cover-home animated fadeInUp">
        <div id="carouselCoverResponsive" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators animated fadeInUp delayp3">
            <li data-target="#carouselCoverResponsive" data-slide-to={0} className="active" />
            <li data-target="#carouselCoverResponsive" data-slide-to={1} className />
            <li data-target="#carouselCoverResponsive" data-slide-to={2} className />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <a href="https://www.mcdelivery.co.id/id/" target>
                <img src="https://d2vuyvo9qdtgo9.cloudfront.net/home-banners/October2023/7D3tO5M60QaA70rM952T.webp" className="img-fluid w-100 d-none d-sm-block" />
                <img src="https://d2vuyvo9qdtgo9.cloudfront.net/home-banners/October2023/HlTOICDdIsUqGo9OKKUP.webp" className="img-fluid w-100 d-block d-sm-none" />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://smart.link/obl7d7yyt3ncv" target>
                <img src="https://d2vuyvo9qdtgo9.cloudfront.net/home-banners/October2023/ix6zn8dJ4yzUFoA1yPfd.webp" className="img-fluid w-100 d-none d-sm-block" />
                <img src="https://d2vuyvo9qdtgo9.cloudfront.net/home-banners/October2023/yNA0fqFeCwgcJXNVFrPZ.webp" className="img-fluid w-100 d-block d-sm-none" />
              </a>
            </div>
            <div className="carousel-item">
              <a href="https://smart.link/vg3rdjz2f7zvd" target>
                <img src="https://d2vuyvo9qdtgo9.cloudfront.net/home-banners/October2023/4uXkAyDvq4cEtU1LQV3K.webp" className="img-fluid w-100 d-none d-sm-block" />
                <img src="https://d2vuyvo9qdtgo9.cloudfront.net/home-banners/October2023/Xk6qocgxZWYKP5kYq1nQ.webp" className="img-fluid w-100 d-block d-sm-none" />
              </a>
            </div>
          </div>
          <a className="carousel-control-prev hidden" href="#carouselCoverResponsive" role="button" data-slide="prev">
            <i className="fal fa-angle-left" data-fa-transform="grow-20" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next hidden" href="#carouselCoverResponsive" role="button" data-slide="next">
            <i className="fal fa-angle-right" data-fa-transform="grow-20" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
        </>
    )
}