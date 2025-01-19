import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../assets/img/hero.png";

import { kelasTerbaru } from "../data/index";
import { useNavigate } from "react-router-dom";
import FaqComponent from "../components/FaqComponent";

const HomePage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 ">
        <Container>
          <Row className="header-box d-flex align-items-center overflow-hidden">
            <Col lg="6">
              <h1 className="mb-5 animate__animated animate__fadeInUp animate__delay-1s">
                Berikan Kepada <br /> <span>Orang Tercinta</span> <br />
                Penghormatanmu
              </h1>
              <p className="mb-5 animate__animated animate__fadeInUp animate__delay-1s">
                Kehilangan orang tercinta bukan hanya meninggalkan duka, tetapi
                juga berbagai hal lain yang perlu dihadapi. Kami hadir untuk
                membantu Anda merencanakan dan mengurus segala kebutuhan terkait
                kedukaan, memberikan ketenangan bagi Anda dan mereka yang
                dicintai saat "hari itu" tiba.
              </p>
              <button
                className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s"
                onClick={() => navigate("/paket")}
              >
                Lihat Paket
              </button>
              <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s">
                Lihat Promo
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img
                src={HeroImage}
                alt="hero-img"
                className="animate__animated animate__fadeInUp"
              />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="paket w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold ">Paket</h1>
              <p className="text-center">
                Kami menawarkan layanan kedukaan terlengkap dan terintegrasi
              </p>
            </Col>
          </Row>
          <Row onClick={() => navigate("/paket")}>
            {kelasTerbaru.map((kelas) => {
              return (
                <Col
                  key={kelas.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={kelas.delay}
                >
                  <img
                    src={kelas.image}
                    alt="unsplas.com"
                    className="w-100 mb-5 rounded-top"
                  />
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    <button className="btn btn-danger rounded-1">
                      {kelas.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="btn btn-success rounded-5 btn-lg shadow"
                onClick={() => navigate("/paket")}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Lihat Semua Paket{" "}
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* secrion FAQ */}
      <FaqComponent />
      {/* secrion FAQ */}
    </div>
  );
};

export default HomePage;
