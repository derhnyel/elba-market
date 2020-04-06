import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
            <div className="container">

                {/* <!-- Promo --> */}
                <div className="mr-xl-8">
                    <i className="fe fe-truck mr-2"></i> <span className="heading-xxxs">Free shipping worldwide</span>
                </div>

                {/* <!-- Toggler --> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topbarCollapse" aria-controls="topbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* <!-- Collapse --> */}
                <div className="collapse navbar-collapse" id="topbarCollapse">

                    {/* <!-- Nav --> */}
                    <ul className="nav nav-divided navbar-nav mr-auto">
                        <li className="nav-item dropdown">

                            {/* <!-- Toggle --> */}
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">
                                <img className="mb-1 mr-1" src="assets/img/flags/usa.svg" alt="..." /> Nigeria
                            </a>

                            {/* <!-- Menu --> */}
                            <div className="dropdown-menu minw-0">
                                <a className="dropdown-item" href="#!">
                                    <img className="mb-1 mr-2" src="assets/img/flags/usa.svg" alt="USA" />Nigeria
                                </a>
                                {/* <a className="dropdown-item" href="#!">
                                    <img className="mb-1 mr-2" src="assets/img/flags/canada.svg" alt="Canada" />Canada
                                </a>
                                <a className="dropdown-item" href="#!">
                                    <img className="mb-1 mr-2" src="assets/img/flags/germany.svg" alt="Germany" />Germany
                                </a> */}
                            </div>

                        </li>
                        <li className="nav-item dropdown">

                            {/* <!-- Toggle --> */}
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">NGN</a>

                            {/* <!-- Menu --> */}
                            <div className="dropdown-menu minw-0">
                                <a className="dropdown-item" href="#!">NGN</a>
                                <a className="dropdown-item" href="#!">USD</a>
                            </div>

                        </li>
                        <li className="nav-item dropdown">

                            {/* <!-- Toggle --> */}
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">English</a>

                            {/* <!-- Menu --> */}
                            <div className="dropdown-menu minw-0">
                                <a className="dropdown-item" href="#">English</a>
                                {/* <a className="dropdown-item" href="#">French</a>
                                <a className="dropdown-item" href="#">German</a> */}
                            </div>

                        </li>
                    </ul>

                    {/* <!-- Nav --> */}
                    <ul className="nav navbar-nav mr-8">
                        <li className="nav-item">
                            <a className="nav-link" href="shipping-and-returns.html">Shipping</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="faq.html">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact-us.html">Contact</a>
                        </li>
                    </ul>

                    {/* <!-- Nav --> */}
                    <ul className="nav navbar-nav flex-row">
                        <li className="nav-item">
                            <a className="nav-link text-gray-350" href="#!">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="nav-item ml-xl-n4">
                            <a className="nav-link text-gray-350" href="#!">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="nav-item ml-xl-n4">
                            <a className="nav-link text-gray-350" href="#!">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li className="nav-item ml-xl-n4">
                            <a className="nav-link text-gray-350" href="#!">
                                <i className="fab fa-medium"></i>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Navbar