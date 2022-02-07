import React from "react";
import "./Homepage.css";
import img1 from "../../images/logo.png";
import img2 from "../../images/banner.png";
import img3 from "../../images/banner1.png";
export default function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__header">
        <div className="homepage__header__top">
          <div className="homepage__top__left">
            <a className="homepage__header__link" href="#">
              Kênh người bán
            </a>
            <a className="homepage__header__link" style={{ fontSize: "24px" }}>
              {"|"}
            </a>
            <a className="homepage__header__link" href="#">
              Trở thành người bán GearVN
            </a>
          </div>
          <div className="homepage__top__right">
            <a className="homepage__mid__link" href="#">
              Chăm sóc khách hàng
            </a>
            <a className="homepage__mid__link" style={{ fontSize: "24px" }}>
              {"|"}
            </a>
            <a className="homepage__mid__link" href="#">
              Tiếng việt
            </a>
            <a
              className="homepage__mid__link"
              href="#"
              style={{ marginLeft: "20px" }}
            >
              Đăng nhập
            </a>
            <a className="homepage__mid__link" style={{ fontSize: "24px" }}>
              {"|"}
            </a>
            <a className="homepage__mid__link" href="#">
              Đăng ký
            </a>
          </div>
        </div>
        <div className="homepage__header__bottom">
          <img src={img1}></img>
          <div className="homepage__bottom__right">
            <input
              className="homepage__header__search"
              placeholder="Enter...."
            ></input>
            <button className="homepage__header__button">Tìm kiếm</button>
            <a href="#" className="homepage__header__basket">
              Giỏ hàng
            </a>
          </div>
        </div>
      </div>
      <div className="homepage__banner">
        <div className="homepage__banner__left">
          <div className="banner__left__top">
            <button className="homepage__banner__button">
              Danh mục sản phẩm
            </button>
          </div>
          <div className="banner__left__bottom">
            <ul>
              <li>
                <a href="#">
                  <span>hello</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>hello</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>hello</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="homepage__banner__right">
          <div className="banner__right__top">
            <button className="homepage__banner__button">
              Thông tin mùa dịch
            </button>
            <button className="homepage__banner__button">
              Hướng dẫn thanh toán
            </button>
            <button className="homepage__banner__button">
              Hướng dẫn trả góp
            </button>
            <button className="homepage__banner__button">
              Chính sách bảo hành
            </button>
            <button className="homepage__banner__button">
              Chính sách vận chuyển
            </button>
          </div>
          <div className="banner__right__mid">
            <img src={img2}></img>
            <img className="image" src={img3}></img>
          </div>
          <div className="banner__right__bottom">
            <img src={img3}></img>
            <img src={img3}></img>
            <img src={img3}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
