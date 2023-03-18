import React from 'react'
import "./Home.css"
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  // const [agree , setAgree] = useState(false)
  const Navigate = useNavigate()


  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="0" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            Click on the below tab and answer few questions based on your interests and we will recommend you the best career option for you in the technical field based on your interests!!
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{Navigate('/aptitude')}}>Proceed</button>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex vh-100 text-center text-bg-dark">
        <div className="cover-container d-flex vw-100 vh-100 p-3 mx-auto flex-column">
          <header className="mb-auto">
            <div>
              <h2 className="float-md-start mb-0">CareerMate</h2>
              <nav className="nav nav-masthead justify-content-center float-md-end">
                <Link
                  className="nav-link fw-bold py-1 px-0 active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
                <Link className="nav-link fw-bold py-1 px-0" to="/about">
                  About
                </Link>
                <Link className="nav-link fw-bold py-1 px-0" to="/signup">
                  Login
                </Link>

              </nav>
            </div>
          </header>

          <main className="px-3">
            <h1>Empowering you to reach your career goals</h1>
            <p className="lead">
              We are dedicated to providing you with the tools, resources, and guidance necessary to make informed decisions about your career path and to help you achieve your professional goals.
            </p>
            <p className="lead">
              <button
                className="btn btn-lg btn-light fw-bold border-white bg-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Explore More {`>`}
              </button>
            </p>
          </main>

          <footer className="mt-auto text-white">
            <p>
              With 🧡 by StackHolders
            </p>
          </footer>
        </div></div>
    </>
  )
}

export default Home