import { Container, Row, Col } from "react-bootstrap";
import { semuaKelas } from "../data/index";
import FaqComponent from "../components/FaqComponent";
import { useNavigate } from "react-router-dom";

const PaketPage = () => {
  const navigate = useNavigate();

  const handleBuyClick = (kelas) => {
    navigate("/redirect"); // Adjust the path as necessary
  };

  return (
    <div className="paket-page">
      <div className="paket min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s">
                Semua Paket
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Beberapa paket lengkap untuk pengurusan pemakaman yang kami tawarkan untuk Anda dan keluarga. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </Col>
          </Row>
          <Row>
            {semuaKelas.map((kelas) => {
              return (
                <Col
                  key={kelas.id}
                  className="shadow rounded"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={kelas.delay}
                >
                  <div className="star mb-2 px-3">
                    <i className={kelas.star1}></i>
                    <i className={kelas.star2}></i>
                    <i className={kelas.star3}></i>
                    <i className={kelas.star4}></i>
                    <i className={kelas.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3">{kelas.title}</h5>
                  <p className="mb-2 px-3 ">{kelas.desc}</p>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 text-primary fw-bold">{kelas.price}</p>
                    <button
                      className="btn btn-danger rounded-1"
                      onClick={() => handleBuyClick(kelas)} // Attach the click handler
                    >
                      {kelas.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>

      <FaqComponent />
    </div>
  );
};

export default PaketPage;
