import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="container">
          <div className="row">
            <div className="col">
              <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                  <a className="navbar-brand" href="http://google.com">
                    Start Bootstrap
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          aria-current="page"
                          href="http://google.com"
                        >
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="http://google.com">
                          about
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="http://google.com"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          shop
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="http://google.com"
                            >
                              Action
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="http://google.com"
                            >
                              Another action
                            </a>
                          </li>
                          <li>
                            <hr className="dropdown-divider" />
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="http://google.com"
                            >
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <form className="d-flex">
                      <button className="btn btn-outline-dark" type="submit">
                        <i className="bi bi-cart-fill me-2"></i>
                        Cart
                        <span className="span-1">0</span>
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </nav>
      <section className="bg-dark section-1">
        <div className="container">
          <div className="row py-5">
            <div className="col py-5">
              <h1 className="text-center">Shop in style</h1>
              <p className="text-center">With this shop hompeage template</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="container">
        <div className="row mt-5">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card text-center mx-3">
                <img
                  src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Fancy Product</h5>
                  <p className="card-text pb-5">
                    <span>$40.00 - $80.00</span>
                  </p>
                  <a href="http://google.com" className="btn btn-outline-dark mb-3">
                    View options
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card text-center mx-3 ab">
                <img
                  src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <span className="bg-dark text-light sale">Sale</span>
                <div className="card-body">
                  <h5 className="card-title">Special Item</h5>
                  <p className="card-text">
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <del>$20.00</del> <span>$18.00</span>
                  </p>
                  <a
                    href="http://google.com"
                    className="btn btn-outline-dark mb-3"
                    style={{ marginTop: "20px" }}
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card text-center mx-3 ab">
                <img
                  src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <span className="bg-dark text-light sale">Sale</span>
                <div className="card-body">
                  <h5 className="card-title">Fancy Product</h5>
                  <p className="card-text pb-5">
                    <span>$40.00 - $80.00</span>
                  </p>
                  <a href="http://google.com" className="btn btn-outline-dark mb-3">
                    View options
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card text-center mx-3">
                <img
                  src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Special Item</h5>
                  <p className="card-text">
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <del>$20.00</del> <span>$18.00</span>
                  </p>
                  <a
                    href="http://google.com"
                    className="btn btn-outline-dark mb-3"
                    style={{ marginTop: "20px" }}
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card text-center mx-3 ab">
                <img
                  src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <span className="bg-dark text-light sale">Sale</span>
                <div className="card-body">
                  <h5 className="card-title">Fancy Product</h5>
                  <p className="card-text pb-5">
                    <span>$40.00 - $80.00</span>
                  </p>
                  <a href="http://google.com" className="btn btn-outline-dark mb-3">
                    View options
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card text-center mx-3">
                <img
                  src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Special Item</h5>
                  <p className="card-text">
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <del>$20.00</del> <span>$18.00</span>
                  </p>
                  <a
                    href="http://google.com"
                    className="btn btn-outline-dark mb-3"
                    style={{ marginTop: "20px" }}
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card text-center mx-3 ab">
                <img
                  src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <span className="bg-dark text-light sale">Sale</span>
                <div className="card-body">
                  <h5 className="card-title">Fancy Product</h5>
                  <p className="card-text pb-5">
                    <span>$40.00 - $80.00</span>
                  </p>
                  <a href="http://google.com" className="btn btn-outline-dark mb-3">
                    View options
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="card text-center mx-3">
                <img
                  src="	https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Special Item</h5>
                  <p className="card-text">
                    <div class="d-flex justify-content-center small text-warning mb-2">
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                      <div class="bi-star-fill"></div>
                    </div>
                    <del>$20.00</del> <span>$18.00</span>
                  </p>
                  <a
                    href="http://google.com"
                    className="btn btn-outline-dark mb-3"
                    style={{ marginTop: "20px" }}
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-dark text-light mt-5 p-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="text-center">Copyright © Your Website 2021</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
