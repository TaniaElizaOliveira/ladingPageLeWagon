const Home = () => {
    return (
        <div id="page-top">
            <nav className="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="#page-top">Tech Recruiter, StepByTech Presents...</a>
                    <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button"
                        data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive"
                        aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#ladding">Hard Skills</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About the Program</a></li>
                            <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="..." />
                    <h1 className="masthead-heading text-uppercase mb-0">YOUR NEXT WEB DEVELOPMENT IS HERE</h1>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <p className="masthead-subheading font-weight-light mb-0">See Soon</p>
                </div>
            </header>

            <section className="page-section ladding" id="ladding">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-primary mb-0">Hard Skills</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="ladding-item mx-auto" data-bs-toggle="modal" data-bs-target="#laddingModal2">
                                <div className="ladding-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="ladding-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="assets/img/ladding/ladding-1.jpg" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-section bg-primary text-white mb-0" id="about">
                <div className="container">

                    <h2 className="page-section-heading text-center text-uppercase text-white">About the Program</h2>

                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 ms-auto">
                            <p className="lead">ABOUT THE PROGRAM
                                Promoted by the Lisbon City Council, through Future of Work 
                                Lisboa, and with the support of Le Wagon Portugal, StepByTech 
                                is a 100% free program that focuses on developing the skills 
                                of the future. Taught Hard Skills and Soft Skills!</p>
                        </div>
                        <div className="col-lg-4 me-auto">
                            <p className="lead">Five participants will have the opportunity
                             to participate in Le Wagon's intensive Web Development bootcamp, 
                             with advanced training and international recognition. Tech Recruiter,
                              know that your team's new star will emerge from the lineup!</p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="page-section" id="contact">
                <div className="container">

                    <h2 className="page-section-heading text-center text-uppercase text-primary mb-0">Contact Us</h2>

                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xl-7">

                            <form id="contactForm" data-sb-form-api-token="API_TOKEN">

                                <div className="form-floating mb-3">
                                    <input className="form-control" id="name" type="text" placeholder="Enter your name..."
                                        data-sb-validations="required" />
                                    <label for="name">Name</label>
                                    <div className="invalid-feedback" data-sb-feedback="name:required">Name required.</div>
                                </div>

                                <div className="form-floating mb-3">
                                    <input className="form-control" id="email" type="email" placeholder="name@example.com"
                                        data-sb-validations="required,email" />
                                    <label for="email">E-mail</label>
                                    <div className="invalid-feedback" data-sb-feedback="email:required">E-mail required.</div>
                                    <div className="invalid-feedback" data-sb-feedback="email:email">Invalid E-mail.</div>
                                </div>

                                <div className="form-floating mb-3">
                                    <input className="form-control" id="phone" type="tel" placeholder="(123) 456-78900"
                                        data-sb-validations="required" />
                                    <label for="phone">Phone Number</label>
                                    <div className="invalid-feedback" data-sb-feedback="phone:required">
                                        Phone Number required
                                    </div>
                                </div>

                                <div className="form-floating mb-3">
                                    <textarea className="form-control" id="message" type="text"
                                        placeholder="Enter your message here..."
                                        data-sb-validations="required"></textarea>
                                    <label for="message">Message</label>
                                    <div className="invalid-feedback" data-sb-feedback="message:required">Write your message please
                                    </div>
                                </div>
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Send ;)!</div>
                                    </div>
                                </div>

                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3">error sending</div>
                                </div>
                                <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">To Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer text-center">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">LOCATION</h4>
                            <a className="lead mb-0" href="https://www.google.com/maps/place/Le+Wagon+Lisboa+
                    -+Escola+de+Programa%C3%A7%C3%A3o/@38.7260865,-9.145487,15z/data=!4m14!1m7
                    !3m6!1s0xd19351a74f8e2a3:0x779f5b9fe8faf6a7!2sLe+Wagon+Lisboa+-+Escola+de+
                    Programa%C3%A7%C3%A3o!8m2!3d38.7260865!4d-9.145487!16s%2Fg%2F11gpnfk187!3m5!
                    1s0xd19351a74f8e2a3:0x779f5b9fe8faf6a7!8m2!3d38.7260865!4d-9.145487!16s%2Fg%2F11gpnfk187"
                                target="_blank">
                                Rua do Conde de Redondo 91B,
                                <br />
                                1150-103 Lisboa
                            </a>
                        </div>

                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h4 className="text-uppercase mb-4">Web</h4>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/lewagonportugal/"
                                target="_blank"><i className="fab fa-fw fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://twitter.com/lewagonlondon?lang=en"
                                target="_blank"><i className="fab fa-fw fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1"
                                href="https://www.linkedin.com/showcase/lewagonportugal/?originalSubdomain=pt"
                                target="_blank"><i className="fab fa-fw fa-linkedin-in"></i></a>
                            <a className="btn btn-outline-light btn-social mx-1" href="https://www.lewagon.com/?utm_adgroup=&utm_term=
                    le%20wagon&utm_campaign=WW_|_Brand_|_EN_|_S&utm_source=google&utm_medium=cpc&hsa_acc=9887519486&hsa_
                    cam=17795863130&hsa_grp=138703896883&hsa_ad=634543295246&hsa_src=g&hsa_tgt=aud-1887943845009:kwd-3
                    02815296608&hsa_kw=le%20wagon&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw0N6hBhAUEiwAXab-
                    TcF7JzQ8Am1tkRjaJSdrfzVt9koB-d2n6t-d2dKhFmEuk7_P4FZtXxoCdosQAvD_BwE" target="_blank"><i
                                    className="fab fa-fw fa-dribbble"></i></a>
                        </div>

                        <div className="col-lg-4">
                            <h4 className="text-uppercase mb-4">FOR COMPANIES</h4>
                            <p className="lead mb-0">
                            Accelerate your transformation, train your teams for Tech.
                                <a href="https://business.lewagon.com/#solutions">Explore Our Solutions</a>

                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright &copy; Your Website 2023</small></div>
            </div>
            <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
        </div>
    );
}

export default Home;

