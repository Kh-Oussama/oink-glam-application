import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, EffectFade} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import {Link, withRouter} from "react-router-dom";
import DescriptionCard from "../description-product-card/description-product-card.component";
import OrderForm from "../order-form/order-form.component";

SwiperCore.use([Pagination, Navigation]);

const ViewProduct = () => {
    const [isPhone, setIsPhone] = useState(window.innerWidth > 600);
    const [active, setActive] = useState("FirstCard");

    return (
        <div className="view-product">
            <div className="view-product-topLeft">
                <div className="shop-header__top">
                    {/*{*/}
                    {/*    !updateLoading && currentProduct*/}
                    {/*    ? <div className="shop-header__top-block">*/}
                    {/*            <Link to='/'>*/}
                    {/*                <i className="fas fa-home"/> <span><i className="fas fa-chevron-right"/></span> <span*/}
                    {/*                className="linkText">Home</span>*/}
                    {/*            </Link>*/}
                    {/*            <Link to='/categories'>*/}
                    {/*                <span> <i className="fas fa-chevron-right"/></span> <span className="linkText"> categories</span>*/}
                    {/*            </Link>*/}
                    {/*            <Link to={`/categories/sous_Categories/${currentProduct[0].category.id}`}>*/}
                    {/*                <span> <i className="fas fa-chevron-right"/></span> <span className="linkText">{ currentProduct[0].category.title }</span>*/}
                    {/*            </Link>*/}
                    {/*            <Link to={`/categories/sous_Categories/products/${currentProduct[0].subcategory.id}`}>*/}
                    {/*                <span> <i className="fas fa-chevron-right"/></span> <span className="linkText">{ currentProduct[0].subcategory.title }</span>*/}
                    {/*            </Link>*/}
                    {/*            <Link to={`/categories/sous_Categories/products/view_product/${match.params.id}`}>*/}
                    {/*                <span> <i className="fas fa-chevron-right"/></span> <span className="linkText">{ currentProduct[0].type }</span>*/}
                    {/*            </Link>*/}

                    {/*        </div>*/}
                    {/*        : null*/}
                    {/*}*/}

                </div>
            </div>

            <div className="view-product-content">
                                    <div className="imageBlock">

                                        <Swiper
                                            spaceBetween={50}
                                            slidesPerView={1}
                                            navigation={isPhone}
                                            loop
                                            pagination={{
                                                clickable: true,
                                            }}
                                            onSlideChange={() => {

                                            }}
                                            // onSwiper={(swiper) => console.log(swiper)}

                                        >
                                                        <SwiperSlide>
                                                            <div className="item">
                                                                <img src={`/images/p1.png`} alt="img" className="img"/>
                                                            </div>
                                                        </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="item">
                                                    <img src={`/images/p1.png`} alt="img" className="img"/>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="item">
                                                    <img src={`/images/p1.png`} alt="img" className="img"/>
                                                </div>
                                            </SwiperSlide>
                                        </Swiper>

                                    </div>


                      <div className="detail">
                                    <h1 className="detail-title">
                                        <div>ARMANI</div>
                                        <i className="fas fa-palette"/>
                                    </h1>
                                    <p className="detail-p">
                                        PARFUM GIORGIO ARMANI
                                    </p>
                                    <div className="detail-product-number">Product Number : 56877</div>
                                    <div className="detail-stars">
                                        <i className="fas fa-star"/>
                                        <i className="fas fa-star"/>
                                        <i className="fas fa-star"/>
                                        <i className="fas fa-star"/>
                                        <i className="far fa-star"/>
                                    </div>
                                    <div className="detail-description-header">
                        <span className={active === "FirstCard" ? "active" : null}
                              onClick={() => setActive("FirstCard")}>Pompe</span>
                                        <span className={active === "SecondCard" ? "active" : null}
                                              onClick={() => setActive("SecondCard")}>Moteur</span>
                                        <span className={active === "ThirdCard" ? "active" : null}
                                              onClick={() => setActive("ThirdCard")}>Tension lorem</span>
                                    </div>

                                    {
                                        active === "FirstCard" && <DescriptionCard content= {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam aspernatur assumenda ducimus et hic, impedit itaque iure, magnam natus nesciunt nobis officia placeat, quia rem saepe suscipit ullam voluptatibus.'}/>
                                    }
                                    {
                                        active === "SecondCard" && <DescriptionCard content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam aspernatur assumenda ducimus et hic, impedit itaque iure, magnam natus nesciunt nobis officia placeat, quia rem saepe suscipit ullam voluptatibus.'} />
                                    }
                                    {
                                        active === "ThirdCard" && <DescriptionCard content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam aspernatur assumenda ducimus et hic, impedit itaque iure, magnam natus nesciunt nobis officia placeat, quia rem saepe suscipit ullam voluptatibus.'} />
                                    }

                                    <div className="detail-priceBlock">
                                        <div className="price">
                                            Prix : 50$
                                        </div>
                                        <div className="qnt">10+ in stock</div>
                                    </div>
                                    <div className="detail-actions">
                                        <div className="add">

                                        </div>


                                    </div>
                                </div>



                    </div>
            <div className="view-product-content-order">
                <div className="orderForm">
                    <OrderForm/>
                </div>
                <div className="imageBlock">
                    <img src='/images/aa.svg' alt="" className="order-image"/>
                </div>
             </div>
        </div>
    )
}



export default withRouter(ViewProduct);

