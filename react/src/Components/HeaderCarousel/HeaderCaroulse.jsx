import React from 'react'
import './HeaderCarousel.css'
import carousel_img_1 from "../Assets/slider-1.jpeg"
import carousel_img_2 from "../Assets/slider-2.jpeg"
import carousel_img_3 from "../Assets/slider-3.jpeg"

const HeaderCaroulse = () => {
  return (
    <div>
        <section class="pt-3 slider">
            <div class="container">
                <main class="card">
                    <div class="row p-lg-3 p-1">
                        <aside class="d-none d-lg-block col-lg-3">
                            <nav class="nav nav-pills flex-column flex-nowrap overflow-auto slider__nav">
                                <a href="#" class="nav-link active">Elektronik</a>
                                <a href="#" class="nav-link">Moda</a>
                                <a href="#" class="nav-link">Kozmetik</a>
                                <a href="#" class="nav-link">Market</a>
                                <a href="#" class="nav-link">Spor</a>
                                <a href="#" class="nav-link">Kitap</a>
                                <a href="#" class="nav-link">Anne Bebek</a>
                                <a href="#" class="nav-link">Ev Eşyası</a>
                                <a href="#" class="nav-link">Aksesuar</a>
                                <a href="#" class="nav-link">Hediyelik</a>
                                <a href="#" class="nav-link">Günün Fırsatları</a>
                                <a href="#" class="nav-link">Araç Aksesuarları</a>
                            </nav>
                        </aside>
                        <div class="col-lg-9">
                            <div id="slider" class="carousel slider" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#slider" data-bs-slide-to="0" class="active"></button>
                                    <button type="button" data-bs-target="#slider" data-bs-slide-to="1" ></button>
                                    <button type="button" data-bs-target="#slider" data-bs-slide-to="2" ></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={carousel_img_1} alt="" class="d-block w-100"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={carousel_img_2} alt="" class="d-block w-100"/>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={carousel_img_3} alt="" class="d-block w-100"/>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon"></span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
                                    <span class="carousel-control-next-icon"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    </div>
  )
}

export default HeaderCaroulse
