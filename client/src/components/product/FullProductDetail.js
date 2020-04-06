import React, { Component } from 'react'

class FullProductDetail extends Component {
    render() {
        return (
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-md-6">

                                    {/*-- Card */}
                                    <div className="card">

                                        {/*-- Badge */}
                                        <div className="badge badge-primary card-badge text-uppercase">
                                            Sale
                                        </div>

                                        <div className="mb-4 flickity-enabled is-fade" data-flickity={"{&quot;draggable&quot;: false, &quot;fade&quot;: true}"} id="productSlider" tabindex="0">
                    

                                            <div className="flickity-viewport" style={{height: '341.328px', touchAction: 'pan-y'}}>
                                                <div className="flickity-slider" style={{left: '0px', transform: 'translateX(0%)'}}>
                                                    <a href="/assets/img/products/product-7.jpg" dataFancybox="" className="is-selected" style={{position: 'absolute', left: '0%', opacity: 1}}>
                                                        <img src="/assets/img/products/product-7.jpg" alt="..." className="card-img-top" />
                                                    </a>
                                                    <a href="/assets/img/products/product-122.jpg" dataFancybox="" ariaHidden="true" style={{position: 'absolute', left: '0%', opacity: 0}}>
                                                        <img src="/assets/img/products/product-122.jpg" alt="..." className="card-img-top" />
                                                    </a>
                                                    <a href="/assets/img/products/product-146.jpg" dataFancybox="" ariaHidden="true" style={{position: 'absolute', left: '0%', opacity: 0}}>
                                                        <img src="/assets/img/products/product-146.jpg" alt="..." className="card-img-top" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/*-- Slider */}
                                    <div className="flickity-nav mx-n2 mb-10 mb-md-0 flickity-enabled is-draggable" data-flickity={"{&quot;asNavFor&quot;: &quot;#productSlider&quot;, &quot;contain&quot;: true, &quot;wrapAround&quot;: false}"} tabindex="0">

                                        {/*-- Item */}


                                        <div className="flickity-viewport" style={{height: '97px', touchAction: 'pan-y'}}>
                                            <div className="flickity-slider" style={{left: '0px', transform: 'translateX(0%)'}}>
                                                <div className="col-12 px-2 is-nav-selected is-selected" style={{maxWidth: '113px', position: 'absolute', left: '0%'}}>

                                                    {/*-- Image */}
                                                    <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{backgroundImage: 'url(/assets/img/products/product-7.jpg)'}}></div>

                                                </div>
                                                <div className="col-12 px-2" style={{maxWidth: '113px', position: 'absolute', left: '37.17%'}} aria-hidden="true">

                                                    {/*-- Image */}
                                                    <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{backgroundImage: 'url(/assets/img/products/product-122.jpg)'}}></div>

                                                </div>
                                                <div className="col-12 px-2" style={{maxWidth: '113px', position: 'absolute', left: '74.34%'}} aria-hidden="true">

                                                    {/*-- Image */}
                                                    <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{backgroundImage: 'url(/assets/img/products/product-146.jpg)'}}></div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-12 col-md-6 pl-lg-10">

                                    {/*-- Header */}
                                    <div className="row mb-1">
                                        <div className="col">
                                            {/*-- Preheading */}
                                            <a className="text-muted" href="shop.html">Sneakers</a>

                                        </div>
                                        <div className="col-auto">

                                            {/*-- Rating */}
                                            <div className="rating font-size-xs text-dark" data-value="4">
                                                <div className="rating-item">
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <div className="rating-item">
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>

                                            <a className="font-size-sm text-reset ml-2" href="#reviews">
                                                Reviews (6)
                                            </a>

                                        </div>
                                    </div>

                                    {/*-- Heading */}
                                    <h3 className="mb-2">Leather Sneakers</h3>

                                    {/*-- Price */}
                                    <div className="mb-7">
                                        <span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">$115.00</span>
                                        <span className="ml-1 font-size-h5 font-weight-bolder text-primary">$85.00</span>
                                        <span className="font-size-sm ml-1">(In Stock)</span>
                                    </div>

                                    {/*-- Form */}
                                    <form>

                                        {/*-- Quantity */}
                                        <div className="col-12 col-lg">
                                            <select className="custom-select mb-2">
                                                <option value="1" selected="">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                        </div>
                                        


                                        <div className="col-12 col-lg">

                                            {/*-- Submit */}
                                            <button type="submit" className="btn btn-block btn-success mb-2">
                                                Add to Cart <i className="fe fe-shopping-cart ml-2"></i>
                                            </button>

                                        </div>
                                        <div className="col-12 col-lg-auto">

                                            {/*-- Wishlist */}
                                            <button className="btn btn-outline-dark btn-block mb-2" data-toggle="button">
                                                Wishlist <i className="fe fe-heart ml-2"></i>
                                            </button>

                                        </div>

                                        <div className="col-12 col-lg-auto">
                                            <p>
                                                <span className="text-gray-500">Is your size/color sold out?</span>
                                                <a className="text-reset text-decoration-underline" data-toggle="modal" href="#modalWaitList">Join the Wait List!</a>
                                            </p>

                                            {/*-- Share */}
                                            <p className="mb-0">
                                                <span className="mr-4">Share:</span>
                                                <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                                <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                                <a className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350" href="#!">
                                                    <i className="fab fa-pinterest-p"></i>
                                                </a>
                                            </p>

                                        </div>

                                        {/*-- Text */}
                                        

                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default FullProductDetail