import { Container, Col, Row } from "react-bootstrap";
import FaqComponent from "../components/FaqComponent";

const SyaratKetenPage = () => {
  return (
    <div className="syarat-ketentuan-page">
      <div className="syarat-ketentuan min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center mb-2 animate__animated animate__fadeInUp animate__delay-1s">
                Syarat & Ketentuan
              </h1>
              <p className="text-center animate__animated animate__fadeInUp animate__delay-1s">
                Syarat dan Ketentuan Layanan Pemesanan Jasa Pemakaman
                Oberlin-hills
              </p>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col>
              <p>
                Jasa pemakaman Islam yang mencakup, namun tidak terbatas pada,
                perawatan jenazah (memandikan, mengkafani), shalat jenazah,
                pengantaran ke pemakaman, dan penguburan sesuai ketentuan Islam.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">1. Ketentuan Umum</h4>
              <p>
                Dengan menggunakan layanan ini, pengguna dianggap telah membaca,
                memahami, dan menyetujui seluruh syarat dan ketentuan yang
                berlaku.
              </p>
              <p>
                Layanan pemakaman dilakukan sesuai syariat Islam dan mengikuti
                aturan setempat yang berlaku.
              </p>
              <p>
                Pengguna wajib memberikan informasi yang lengkap dan benar
                mengenai jenazah dan kebutuhan pemakaman.
              </p>
            </Col>
          </Row>
          <Row className="py-3">
            <Col>
              <h4 className="fw-bold">2. Proses Pemesanan</h4>
              <p>
                Pemesanan dilakukan melalui situs web dengan mengisi formulir
                pemesanan yang disediakan. Setelah pengajuan pesanan, pengguna
                akan menerima penawaran dan rincian biaya melalui email atau
                kontak yang terdaftar. Layanan akan diproses setelah pembayaran
                uang muka diterima
              </p>
            </Col>
          </Row>
          <Row className="py-4">
            <Col>
              <h4 className="fw-bold">3. Pembayaran</h4>
              <p>
                Pembayaran dilakukan melalui metode yang disediakan di situs
                web, seperti transfer bank atau pembayaran elektronik lainnya.
              </p>
              <p>
                Pembayaran penuh wajib dilakukan sebelum pelaksanaan layanan
                kecuali ada kesepakatan lain. Uang muka yang telah dibayarkan
                tidak dapat dikembalikan jika pengguna membatalkan pesanan
                setelah proses koordinasi dimulai.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <FaqComponent />
    </div>
  );
};

export default SyaratKetenPage;
