import React from "react";

const Product = () => {
  return (
    <div
      className="modal fade"
      id="modalProduct"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-xl"
        role="document"
      >
        <div className="modal-content">
          {/* <!-- Close --> */}
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i className="fe fe-x" aria-hidden="true"></i>
          </button>

          {/* <!-- Content --> */}
          <div className="container-fluid px-xl-0">
            <div className="row align-items-center mx-xl-0">
              <div className="col-12 col-lg-6 col-xl-5 py-4 py-xl-0 px-xl-0">
                {/* <!-- Image --> */}
                <img
                  className="img-fluid"
                  src="assets/img/products/product-7.jpg"
                  alt="..."
                />

                {/* <!-- Button --> */}
                <a
                  className="btn btn-sm btn-block btn-primary"
                  href="product.html"
                >
                  More Product Info <i className="fe fe-info ml-2"></i>
                </a>
              </div>
              <div className="col-12 col-lg-6 col-xl-7 py-9 px-md-9">
                {/* <!-- Heading --> */}
                <h4 className="mb-3">Leather Sneakers</h4>

                {/* <!-- Price --> */}
                <div className="mb-7">
                  <span className="h5">$85.00</span>
                  <span className="font-size-sm">(In Stock)</span>
                </div>

                {/* <!-- Form --> */}
                <form>
                  <div className="form-group">
                    {/* <!-- Label --> */}
                    <p>
                      Color:{" "}
                      <strong id="modalProductColorCaption">White</strong>
                    </p>

                    {/* <!-- Radio --> */}
                    <div className="mb-8 ml-n1">
                      <div className="custom-control custom-control-inline custom-control-img">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="modalProductColorOne"
                          name="modalProductColor"
                          data-toggle="form-caption"
                          data-target="#modalProductColorCaption"
                          value="White"
                          checked
                        />
                        <label
                          className="custom-control-label"
                          for="modalProductColorOne"
                        >
                          <span
                            className="embed-responsive embed-responsive-1by1 bg-cover"
                            style={{
                              backgroundImage:
                                "url(assets/img/products/product-7.jpg)"
                            }}
                          ></span>
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-img">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="modalProductColorTwo"
                          name="modalProductColor"
                          data-toggle="form-caption"
                          data-target="#modalProductColorCaption"
                          value="Black"
                        />
                        <label
                          className="custom-control-label"
                          for="modalProductColorTwo"
                        >
                          <span
                            className="embed-responsive embed-responsive-1by1 bg-cover"
                            style={{
                              backgroundImage:
                                "url(assets/img/products/product-49.jpg)"
                            }}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    {/* <!-- Label --> */}
                    <p>
                      Size:{" "}
                      <strong>
                        <span id="modalProductSizeCaption">7.5</span> US
                      </strong>
                    </p>

                    {/* <!-- Radio --> */}
                    <div className="mb-2">
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="modalProductSize"
                          id="modalProductSizeOne"
                          value="6"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label
                          className="custom-control-label"
                          for="modalProductSizeOne"
                        >
                          6
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="modalProductSize"
                          id="modalProductSizeTwo"
                          value="6.5"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                          disabled
                        />
                        <label
                          className="custom-control-label"
                          for="modalProductSizeTwo"
                        >
                          6.5
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="modalProductSize"
                          id="modalProductSizeThree"
                          value="7"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label
                          className="custom-control-label"
                          for="modalProductSizeThree"
                        >
                          7
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="modalProductSize"
                          id="modalProductSizeFour"
                          value="7.5"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                          checked
                        />
                        <label
                          className="custom-control-label"
                          for="modalProductSizeFour"
                        >
                          7.5
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="modalProductSize"
                          id="modalProductSizeFive"
                          value="8"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label
                          className="custom-control-label"
                          for="modalProductSizeFive"
                        >
                          8
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="modalProductSize"
                          id="modalProductSizeSix"
                          value="8.5"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label
                          className="custom-control-label"
                          for="modalProductSizeSix"
                        >
                          8.5
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="modalProductSize"
                          id="modalProductSizeSeven"
                          value="9"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                          disabled
                        />
                        <label
                          className="custom-control-label"
                          for="modalProductSizeSeven"
                        >
                          9
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="modalProductSize"
                          id="modalProductSizeEight"
                          value="9.5"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                          disabled
                        />
                        <label
                          className="custom-control-label"
                          for="modalProductSizeEight"
                        >
                          9.5
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="modalProductSize"
                          id="modalProductSizeNine"
                          value="10"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label
                          className="custom-control-label"
                          for="modalProductSizeNine"
                        >
                          10
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="modalProductSize"
                          id="modalProductSizeTen"
                          value="10.5"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label
                          className="custom-control-label"
                          for="modalProductSizeTen"
                        >
                          10.5
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="modalProductSize"
                          id="modalProductSizeEleven"
                          value="11"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label
                          className="custom-control-label"
                          for="modalProductSizeEleven"
                        >
                          11
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="modalProductSize"
                          id="modalProductSizeTwelve"
                          value="12"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label
                          className="custom-control-label"
                          for="modalProductSizeTwelve"
                        >
                          12
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="modalProductSize"
                          id="modalProductSizeThirteen"
                          value="13"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label
                          className="custom-control-label"
                          for="modalProductSizeThirteen"
                        >
                          13
                        </label>
                      </div>
                      <div className="custom-control custom-control-inline custom-control-size mb-2">
                        <input
                          type="radio"
                          className="custom-control-input"
                          name="modalProductSize"
                          id="modalProductSizeFourteen"
                          value="14"
                          data-toggle="form-caption"
                          data-target="#modalProductSizeCaption"
                        />
                        <label
                          className="custom-control-label"
                          for="modalProductSizeFourteen"
                        >
                          14
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-0">
                    <div className="form-row">
                      <div className="col-12 col-lg-auto">
                        {/* <!-- Quantity --> */}
                        <select className="custom-select mb-2">
                          <option value="1" selected>
                            1
                          </option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                      <div className="col-12 col-lg">
                        {/* <!-- Submit --> */}
                        <button
                          type="submit"
                          className="btn btn-block btn-dark mb-2"
                        >
                          Add to Cart{" "}
                          <i className="fe fe-shopping-cart ml-2"></i>
                        </button>
                      </div>
                      <div className="col-12 col-lg-auto">
                        {/* <!-- Wishlist --> */}
                        <button
                          className="btn btn-outline-dark btn-block mb-2"
                          data-toggle="button"
                        >
                          Wishlist <i className="fe fe-heart ml-2"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
