import React from 'react'
import "./Home.css"
import logo from "./Logo.png";
import background from "../../../public/assets/bg-1";

const Home = () => {
  return (
    <>
    <div
        className="d-flex vh-100 vw-100 text-center text-bg-dark"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          opacity: 1,
          backgroundSize: "cover",
        }}
      >
        <div className="cover-container d-flex vw-100 vh-100 p-3 mx-auto flex-column">
          <header className="mb-auto">
            <img className="float-md-start my-0 mb-0" src={logo} alt="logo" />
            <div className="my-4">
              {/* <img className="float-md-start my-0 mb-0" src={logo} alt="logo" /> */}
              <h2 className="float-md-start mb-0"></h2>
              <nav className="nav nav-masthead justify-content-center float-md-end">
                <a
                  className="nav-link fw-bold py-1 px-0 active my-1"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
                <a className="nav-link fw-bold py-1 px-0 my-1" href="#">
                  About
                </a>
                <a className="nav-link fw-bold py-1 px-0 my-1" href="#">
                  Login
                </a>
                <a className="nav-link fw-bold py-1 px-0 my-1" href="#">
                  Signup
                </a>
              </nav>
            </div>
          </header>

          <main className="px-3">
            <h1>Empowering you to reach your career goals</h1>
            <p className="lead">
              We are dedicated to providing you with the tools, resources, and
              guidance necessary to make informed decisions about your career
              path and to help you achieve your professional goals.
            </p>
            <p className="lead">
              <a
                href="#"
                className="btn btn-lg btn-light fw-bold border-white bg-white"
              >
                Explore More?
              </a>
            </p>
          </main>

          <footer className="mt-auto text-white">
            <p>With 🧡 by StackHolders</p>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Home