import React from "react";

const NewsletterVertical = () => {
  return (
    <div
      className="modal fade"
      id="modalNewsletterVertical"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          {/* <!-- Close --> */}
          <button
            type="button"
            className="close text-white"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i className="fe fe-x" aria-hidden="true"></i>
          </button>

          {/* <!-- Body --> */}
          <div
            className="modal-body mt-2 mr-2 ml-2 py-10 bg-cover text-center text-white"
            style={{ backgroundImage: "url(assets/img/covers/cover-26.jpg)" }}
          >
            {/* <!-- Heading --> */}
            <h4>Subscribe to Newsletter and get 15% Discount</h4>

            {/* <!-- Text --> */}
            <p className="mb-0 font-size-lg">On your next purchase</p>
          </div>

          {/* <!-- Body --> */}
          <div className="modal-body py-9">
            {/* <!-- Form --> */}
            <form>
              <div className="form-row">
                <div className="col">
                  {/* <!-- Input --> */}
                  <label className="sr-only" for="modalNewsletterVerticalEmail">
                    Enter Email *
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="modalNewsletterVerticalEmail"
                    type="email"
                    placeholder="Enter Email *"
                  />
                </div>
                <div className="col-auto">
                  {/* <!-- Button --> */}
                  <button className="btn btn-sm btn-dark" type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* <!-- Footer --> */}
          <div className="modal-footer justify-content-center pt-0">
            {/* <!-- Checkbox --> */}
            <div className="custom-control custom-checkbox">
              {/* <!-- Input --> */}
              <input
                className="custom-control-input"
                id="modalNewsletterVerticalCheckbox"
                type="checkbox"
              />

              {/* <!-- Label --> */}
              <label
                className="custom-control-label font-size-xs"
                for="modalNewsletterVerticalCheckbox"
              >
                Prevent this Pop-up
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterVertical;
