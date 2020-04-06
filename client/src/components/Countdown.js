import React, { Component } from 'react'

class Countdown extends Component {
    render() {
        return (
            <section className="py-13 bg-cover" style={{ backgroundImage: 'url(assets/img/covers/cover-4.jpg)' }}>
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-12 col-md-8 col-lg-6">

                            {/* <!-- Heading --> */}
                            <h3 className="mb-7">
                                Get -50% from <br />Summer Collection
                          </h3>

                            {/* <!-- Counter --> */}
                            <div className="d-flex mb-9" data-countdown data-date="Jan 5, 2021 15:37:25">
                                <div className="text-center">
                                    <div className="font-size-h1 font-weight-bolder text-primary" data-days>00</div>
                                    <div className="heading-xxs text-muted">Days</div>
                                </div>
                                <div className="px-1 px-md-4">
                                    <div className="font-size-h2 font-weight-bolder text-primary">:</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-size-h1 font-weight-bolder text-primary" data-hours>00</div>
                                    <div className="heading-xxs text-muted">Hours</div>
                                </div>
                                <div className="px-1 px-md-4">
                                    <div className="font-size-h2 font-weight-bolder text-primary">:</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-size-h1 font-weight-bolder text-primary" data-minutes>00</div>
                                    <div className="heading-xxs text-muted">Minutes</div>
                                </div>
                                <div className="px-1 px-md-4">
                                    <div className="font-size-h2 font-weight-bolder text-primary">:</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-size-h1 font-weight-bolder text-primary" data-seconds>00</div>
                                    <div className="heading-xxs text-muted">Seconds</div>
                                </div>
                            </div>

                            {/* <!-- Button --> */}
                            <a className="btn btn-success" href="shop.html">
                                Shop Now <i className="fe fe-arrow-right ml-2"></i>
                            </a>

                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Countdown