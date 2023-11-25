
export default function Footer(){
    return(
        <footer className="light">
        <div className="footer-top">
          <div className="container">
            <div className="row footer-list">
              <div className="col-md-7 col-lg-4 col-xl-5">
                <h5 className="footer-title">McDonald's</h5>
                <div className="footer-item mb-md-down-4">
                  <div className="row">
                    <div className="col-md-5">
                      <ul className="footer-links">
                        <li><a href="/contact">Hubungi Kami</a></li>
                        <li><a href="/about">Tentang Kami</a></li>
                        <li><a href="/newsroom">Newsroom</a></li>
                        <li><a href="/career">Karier</a></li>
                        {/* <li><a href="/terms-condition">Syarat & Ketentuan</a></li> */}
                      </ul>
                    </div>
                    <div className="col-md-7">
                      <ul className="footer-links">
                        {/* <li><a href="/news">What's On</a></li> */}
                        <li><a href="/services">Layanan</a></li>
                        <li><a href="/food-safety">Sertifikasi &amp; Jaminan Kualitas</a></li>
                        <li><a href="/csr">CSR</a></li>
                        <li><a href="/app">Aplikasi McDonald’s</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-lg-3 col-xl-3">
                <div className="footer-item">
                  <h5 className="footer-title">Hubungi Kami</h5>
                  <ul className="footer-social">
                    <li><a href="http://www.facebook.com/McDonaldsID" target="_blank" className="social-fb"><i className="fab fa-facebook-square" /></a></li>
                    <li><a href="https://twitter.com/mcdonalds_id" target="_blank" className="social-twitter"><i className="fab fa-twitter-square" /></a></li>
                    <li><a href="http://instagram.com/mcdonaldsid" target="_blank" className="social-instagram"><i className="fab fa-instagram" /></a></li>
                    <li><a href="https://www.youtube.com/user/McDonaldsID" target="_blank" className="social-youtube"><i className="fab fa-youtube" /></a></li>
                    <li><a href="https://wa.me/+6281110514045" target="_blank" className="social-whatsapp"><i className="fab fa-whatsapp" /></a></li>
                  </ul>
                  <div className="btn-group-download">
                    <a href="https://apps.apple.com/id/app/mcdonalds/id1217507712" target="_blank">
                      <img src="https://d2vuyvo9qdtgo9.cloudfront.net/assets/img/common/button_appstore.png" className="img-fluid" alt="Play Store" />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.mcdonalds.mobileapp" target="_blank">
                      <img src="https://d2vuyvo9qdtgo9.cloudfront.net/assets/img/common/button_playstore.png" className="img-fluid" alt="Google Store" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-5 col-xl-4">
                <div className="footer-item footer-item-subscribe">
                  <h5 className="footer-title">Berlangganan newsletter McD</h5>
                  <form className="validation-footer" noValidate>
                    <div className="form-group mb-2">
                      <div className="input-group">
                        <input type="email" className="form-control" placeholder="Masukkan email" required name="email" id="subscribe-footer" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" />
                        <div className="input-group-append">
                          <button className="btn btn-primary btn-submit btn-submit-footer sbscrb-tag" type="submit" id="button-addon-footer">
                            Daftar
                          </button>
                        </div>
                        <div className="invalid-feedback">
                          Harap masukkan email Anda
                        </div>
                      </div>
                    </div>
                    <p className="form-status status-footer" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md">
                <ul className="text-md-right">
                  {/* <li><a href="/contact-us">Kontak Kami</a></li> */}
                  <li><a href="/terms-conditions">Syarat &amp; Ketentuan</a></li>
                  <li><a href="/privacy-policy">Kebijakan Privasi</a></li>
                </ul>
              </div>
              <div className="col-md order-md-first">
                © 2023 McDonald's Indonesia
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}