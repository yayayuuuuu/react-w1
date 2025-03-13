import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '/index.css'



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-primary" style={{ backgroundColor: "#E8E2D6" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            <img src="image/111111111111.png" alt="YYJ" />
          </a>

          <button
            className="navbar-toggler d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav me-auto my-2 my-md-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button">
                  ABOUT US
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="about us/aboutus.html">
                      設計理念
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="about us/aboutus.html">
                      環保里程
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button">
                  商品簡介
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="商品簡介/product.html">
                      Ocean Threads
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://ecolife2.moenv.gov.tw/Coastal/SeaCleanEvent/SeaCleanEvent">
                  淨灘活動
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="image/8.jpg" className="d-block w-100" alt="飾品示意圖" />
          </div>
          <div className="carousel-item">
            <img src="image/Ocean Treads (2).png" className="d-block w-100" alt="threads" />
          </div>
          <div className="carousel-item">
            <img src="image/Ocean Treads (3).png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <img id="home_product1" src="image/home_product1.webp" alt="home product" />

      <p>
        在美麗的飾品中傳遞對海洋的守護之心。
        <br />
        不只是一條手鍊，更是一場關於海洋與自己的對話
      </p>

      <div className="image-container">
        <a href="商品簡介/product.html">
          <img id="home_product2" src="image/home_product2.webp" className="zoom-image" alt="product 2" />
        </a>
        <a href="商品簡介/product.html">
          <img id="home_product3" src="image/home_product3.webp" className="zoom-image" alt="product 3" />
        </a>
        <a href="商品簡介/product.html">
          <img id="home_product4" src="image/home_product4.webp" className="zoom-image" alt="product 4" />
        </a>
      </div>

      <a href="about us/aboutus.html">
        <button type="button" className="btn btn-outline-primary">查看更多</button>
      </a>

      <div className="container-expand-lg text-center" style={{ backgroundColor: "#E8E2D6" }}>
        <div className="row">
          <div className="col"></div>
          <div className="col-4">
            <p id="letter">
              <strong>購買須知</strong>
              <br />
              下單與售後服務
              <br />
              隱私權申明
            </p>
          </div>
          <div className="col-4">
            <p id="letter">
              <strong>聯絡我們</strong>
              <br />
              service@yyj.com
              <br />
              平日10:00-18:00
            </p>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default App;

