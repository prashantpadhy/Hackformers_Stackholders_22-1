import React from 'react'
import StarIcon from "@mui/icons-material/Star";
import WorkIcon from "@mui/icons-material/Work";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import PaidIcon from "@mui/icons-material/Paid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Webimg from '../../assets/55.jpg'
// import './Web.css'

const Web = () => {
  return (
    <>
    <div class="container-fluid my-3">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item" id="accordionExample1">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed show"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {" "}
              Phase 1: (Introduction to the Web development){" "}
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Learn all the basics of web development</strong>

              {/* frontend */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="hThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#cThree"
                    aria-expanded="false"
                    aria-controls="cThree"
                  >
                    {" "}
                    Frontend
                  </button>
                </h2>
                <div
                  id="cThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="hThree"
                >
                  <div class="accordion-body">
                    <strong>
                      Front-end development is the process of creating the
                      visual and interactive elements of a website or
                      application that users interact with directly. Front-end
                      developers use a combination of programming languages,
                      frameworks, and libraries to create the user interface
                      and ensure that it is functional, intuitive, and
                      visually appealing.
                    </strong>

                    {/* html */}
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="html">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#ml"
                          aria-expanded="false"
                          aria-controls="cThree"
                        >
                          {" "}
                          HTML
                        </button>
                      </h2>
                      <div
                        id="ml"
                        class="accordion-collapse collapse"
                        aria-labelledby="html"
                      >
                        <div class="accordion-body">
                          <ul>
                            <li>
                              HTML is the markup language used to structure
                              content on the web. It provides the basic
                              structure of a web page and is used to define
                              the layout and content of text, images, and
                              other media. HTML is used extensively by
                              front-end developers to create and design web
                              pages.
                            </li>
                            <li>
                              HTML knowledge is essential for creating clean,
                              well-structured code that is optimized for
                              search engines and user experience. HTML is also
                              used by web designers to create mockups and
                              wireframes of web pages, which are then
                              translated into code by front-end developers.
                            </li>
                            <li>
                              Resource link:
                              <a href="https://www.w3schools.com/html/">
                                w3schools
                              </a>
                              ,
                              <a href="https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/">
                                freecodechamp
                              </a>
                            </li>
                            <li>
                              {" "}
                              IDE link:
                              <a href="https://code.visualstudio.com/">
                                VScode
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* css */}
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="css">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#cs"
                          aria-expanded="false"
                          aria-controls="cs"
                        >
                          {" "}
                          CSS{" "}
                        </button>
                      </h2>
                      <div
                        id="cs"
                        class="accordion-collapse collapse"
                        aria-labelledby="css"
                      >
                        <div class="accordion-body">
                          <ul>
                            <li>
                              CSS (Cascading Style Sheets) developer is
                              responsible for designing and implementing the
                              visual elements of a website or web application.
                              This involves creating and styling the layout,
                              typography, colors, and other design elements of
                              a website or application using CSS.
                            </li>
                            <li>
                              A CSS developer works closely with web designers
                              and developers to ensure that the visual design
                              of a website or application is both
                              aesthetically pleasing and functional.
                            </li>
                            <li>
                              Resource link:
                              <a href="https://www.w3schools.com/css/">
                                w3schools
                              </a>
                              ,
                              <a href="https://www.freecodecamp.org/learn/responsive-web-design/basic-css/">
                                freecodechamp
                              </a>
                            </li>
                            <li>
                              {" "}
                              IDE link:
                              <a href="https://code.visualstudio.com/">
                                VScode
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* js */}
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="js">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#sj"
                          aria-expanded="false"
                          aria-controls="sj"
                        >
                          {" "}
                          JS{" "}
                        </button>
                      </h2>
                      <div
                        id="sj"
                        class="accordion-collapse collapse"
                        aria-labelledby="js"
                      >
                        <div class="accordion-body">
                          <ul>
                            <li>
                            JavaScript developer is responsible for creating and implementing complex web applications using the JavaScript programming language.
 JavaScript is a front-end language that allows developers to create interactive web pages and user interfaces.

                            </li>
                            <li>
                            The role of a JavaScript developer is critical to building complex web applications that are user-friendly, efficient, and secure.
 They are essential members of web development teams and play a key role in ensuring that websites and web applications function smoothly and effectively.
                            </li>
                            <li>
                              Resource link:
                              <a href="https://www.w3schools.com/js/">
                                w3schools
                              </a>
                              ,
                              <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript//">
                                freecodecamp
                              </a>
                            </li>
                            <li>
                              {" "}
                              IDE link:
                              <a href="https://code.visualstudio.com/">
                                VScode
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end */}

              {/* Backend */}
              <div class="accordion-item">
                <h2 class="accordion-header" id="be">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#eb"
                    aria-expanded="false"
                    aria-controls="eb"
                  >
                    {" "}
                    Backend
                  </button>
                </h2>
                <div
                  id="eb"
                  class="accordion-collapse collapse"
                  aria-labelledby="be"
                >
                  <div class="accordion-body">
                    <strong>
                      A back-end developer is responsible for building and
                      maintaining the server-side of web applications. They
                      work with databases, servers, and APIs to ensure that
                      the web application functions smoothly and efficiently.
                    </strong>

                    {/* python */}
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="py">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#yp"
                          aria-expanded="false"
                          aria-controls="yp"
                        >
                          {" "}
                          PYTHON
                        </button>
                      </h2>
                      <div
                        id="yp"
                        class="accordion-collapse collapse"
                        aria-labelledby="py"
                      >
                        <div class="accordion-body">
                          <ul>
                            <li>
                              In back-end development, Python is often used
                              for tasks such as data processing and storage,
                              server-side scripting, and API development. It
                              is also commonly used for building machine
                              learning and artificial intelligence
                              applications.
                            </li>
                            <li>
                              Overall, Python is a powerful and flexible
                              language that is well-suited to back-end
                              development. Its simplicity, ease of use, and
                              large ecosystem of libraries and frameworks make
                              it a popular choice among developers.
                            </li>
                            <li>
                              Resource link:
                              <a href="https://www.w3schools.com/html/">
                                w3schools
                              </a>
                              ,
                              <a href="https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/">
                                freecodechamp
                              </a>
                            </li>
                            <li>
                              {" "}
                              IDE link:
                              <a href="https://code.visualstudio.com/">
                                VScode
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* js */}
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="jav">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#vaj"
                          aria-expanded="false"
                          aria-controls="vaj"
                        >
                          {" "}
                          JAVASCRIPT{" "}
                        </button>
                      </h2>
                      <div
                        id="vaj"
                        class="accordion-collapse collapse"
                        aria-labelledby="jav"
                      >
                        <div class="accordion-body">
                          <ul>
                            <li>
                              CSS (Cascading Style Sheets) developer is
                              responsible for designing and implementing the
                              visual elements of a website or web application.
                              This involves creating and styling the layout,
                              typography, colors, and other design elements of
                              a website or application using CSS.
                            </li>
                            <li>
                              A CSS developer works closely with web designers
                              and developers to ensure that the visual design
                              of a website or application is both
                              aesthetically pleasing and functional.
                            </li>
                            <li>
                              Resource link:
                              <a href="https://www.w3schools.com/js/">
                                w3schools
                              </a>
                              ,
                              <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript//">
                                freecodecamp
                              </a>
                            </li>
                            <li>
                              {" "}
                              IDE link:
                              <a href="https://code.visualstudio.com/">
                                VScode
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* backend  */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              {" "}
              Phase 2: (Build your portfolio by developing the projects){" "}
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Following are some latest trends and technology based projects to enhance your skills and keeps you upto date. </strong>

              <div class="accordion-item">
                <h2 class="accordion-header" id="p1">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#1p"
                    aria-expanded="false"
                    aria-controls="1p"
                  >
                    {" "}
                    Responsive Website{" "}
                  </button>
                </h2>
                <div
                  id="1p"
                  class="accordion-collapse collapse"
                  aria-labelledby="p1"
                >
                  <div class="accordion-body">
                    {" "}
                    Technology Stack:
                    <ul>
                      <li>
                        HTML for creating the structure and content of the
                        website
                      </li>
                      <li>
                        CSS for styling the website, including responsive
                        design techniques for different screen sizes
                      </li>
                      <li>
                        JavaScript for adding interactivity and dynamic
                        features to the website
                      </li>
                      <li>
                        Bootstrap or another CSS framework for responsive
                        design and styling
                      </li>
                    </ul>
                    <p>
                      The website will need to have the following features:
                    </p>
                    <ul>
                      <li>
                        A responsive design that adapts to different screen
                        sizes and device orientations
                      </li>
                      <li>
                        High-quality images and multimedia content that load
                        quickly and look great on all devices
                      </li>
                      <li>
                        A user-friendly interface with well-organized content
                        and easy-to-use buttons and links
                      </li>
                      <li>
                        Optimized performance with fast load times and smooth
                        transitions between pages
                      </li>
                      <li>
                        Compatibility with popular web browsers, including
                        Chrome, Firefox, Safari, and Edge
                      </li>
                      <li>
                        Reference Link:{" "}
                        <a href="https://github.com/bedimcode/responsive-portfolio-website-Alexa">
                          Portfolio website
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="p2">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#2p"
                    aria-expanded="false"
                    aria-controls="2p"
                  >
                    {" "}
                    E-commerce website{" "}
                  </button>
                </h2>
                <div
                  id="2p"
                  class="accordion-collapse collapse"
                  aria-labelledby="p2"
                >
                  <div class="accordion-body">
                    {" "}
                    Technology Stack:
                    <ul>
                      <li>
                        HTML for creating the structure and content of the
                        website
                      </li>
                      <li>
                        CSS for styling the website, including responsive
                        design techniques for different screen sizes
                      </li>
                      <li>
                        JavaScript for adding interactivity and dynamic
                        features to the website
                      </li>
                      <li>
                        PHP for server-side programming and processing of user
                        input
                      </li>
                      <li>
                        MySQL for database management and storage of product
                        and user data
                      </li>
                      <li>
                        Payment gateway APIs like PayPal or Stripe for secure
                        payment processing.
                      </li>
                    </ul>
                    <p>
                      The website will need to have the following features:
                    </p>
                    <ul>
                      <li>
                        A catalog of products with high-quality images and
                        detailed descriptions
                      </li>
                      <li>
                        A user-friendly interface with a search bar and
                        filters for browsing and finding products
                      </li>
                      <li>
                        A shopping cart that stores items and allows users to
                        adjust quantities or remove items before checkout
                      </li>
                      <li>
                        Secure payment processing with payment gateway APIs to
                        protect users' financial information
                      </li>
                      <li>
                        User accounts with login and registration
                        functionality, allowing users to save billing and
                        shipping information and view past orders
                      </li>
                      <li>
                        Email notifications for order confirmations, shipping
                        updates, and other important information
                      </li>
                      <li>
                        An administrative dashboard for managing product
                        listings, orders, and user accounts
                      </li>
                      <li>
                        Reference Link:{" "}
                        <a href="https://github.com/shopizer-ecommerce/shopizer">
                          E-commerce
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="p3">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#3p"
                    aria-expanded="false"
                    aria-controls="3p"
                  >
                    {" "}
                    Realtime Application{" "}
                  </button>
                </h2>
                <div
                  id="3p"
                  class="accordion-collapse collapse"
                  aria-labelledby="p3"
                >
                  <div class="accordion-body">
                    {" "}
                    Technology Stack:
                    <ul>
                      <li>
                        HTML, CSS, and JavaScript for the front-end user
                        interface
                      </li>
                      <li>
                        Node.js for the back-end server and application logic
                      </li>
                      <li>
                        Socket.io for real-time communication between the
                        server and client
                      </li>
                      <li>
                        Express.js for server-side routing and API management
                      </li>
                      <li>MongoDB or MySQL for database management</li>
                      <li>Passport.js for user authentication</li>
                      <li>
                        Bootstrap or another CSS framework for responsive
                        design and styling
                      </li>
                    </ul>
                    <p>
                      The website will need to have the following features:
                    </p>
                    <ul>
                      <li>User registration and login with authentication</li>
                      <li>Creating and joining chat rooms</li>
                      <li>
                        Real-time messaging with the ability to send images,
                        videos, and links
                      </li>
                      <li>Private messaging between users</li>
                      <li>User status tracking (online/offline)</li>
                      <li>Notification system for new messages and alerts</li>
                      <li>
                        Responsive design for desktop and mobile devices
                      </li>
                      <li>
                        Reference Link:{" "}
                        <a href="https://github.com/aslanyanhaik/Quick-Chat">
                          Chat App
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              {" "}
              Phase 3: (Get Hired!){" "}
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Vacancies</strong>

              <div class= "row">
              <div class="col card mx-2  w-50 " style={{ maxWidth: "50vw" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://agenciescdn.notifyvisitors.com/agencies/wp-content/uploads/2021/03/0-2020-07-17T154836.466.png"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                    <p class="mx-4">
                      Rating:4.6
                      <StarIcon />
                    </p>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Web Developer</h5>
                      <p class="card-text">
                        <WorkIcon />
                        0-2 years
                        <br />
                        <CurrencyRupeeIcon />
                        2-4 Lacs P.A.
                        <br />
                        <LocationOnIcon />
                        Thane, Navi Mumbai
                      </p>
                      <a
                        href="https://www.matrixbricks.com/about/careers/"
                        class="btn btn-primary"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mx-2  w-50 " style={{ maxWidth: "50vw" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://brandwitty.com/wp-content/uploads/2019/02/accord-exhibit.png"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                    <p class="mx-4">
                      Rating:4.5
                      <StarIcon />
                    </p>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Web Developer</h5>
                      <p class="card-text">
                        <WorkIcon />
                        0-4 years
                        <br />
                        <CurrencyRupeeIcon />
                        2-3 Lacs P.A.
                        <br />
                        <LocationOnIcon />
                        Thane, Navi Mumbai, Kalyan
                      </p>
                      <a
                        href="https://accordexhibit.com/contact"
                        class="btn btn-primary"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              </div>

            </div>

            <div class="accordion-body">
            

              <div class= "row">
              <div class="col card mx-2  w-50 " style={{ maxWidth: "50vw" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://media.glassdoor.com/sqll/520247/t-and-m-services-consulting-pvt-squarelogo-1461672174562.png"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                    <p class="mx-4">
                      Rating:4.0
                      <StarIcon />
                    </p>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Web Developer</h5>
                      <p class="card-text">
                        <WorkIcon />
                        5-7 years
                        <br />
                        <CurrencyRupeeIcon />
                        5-10 Lacs P.A.
                        <br />
                        <LocationOnIcon />
                        Mumbai
                      </p>
                      <a
                        href="https://livelihoodjobs.tnmhr.com/Landing.aspx"
                        class="btn btn-primary"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card mx-2 mb-3 w-50 " style={{ maxWidth: "50vw" }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img
                      src="https://media.licdn.com/dms/image/C4D0BAQH4bJgv3wo--Q/company-logo_200_200/0/1649247137148?e=2147483647&v=beta&t=FB02-RUiT2GPJyEK3DJ5B0akVi5n4WLnGa-YPuLvEu0"
                      class="img-fluid rounded-start"
                      alt="..."
                    />
                    <p class="mx-4">
                      Rating:4.7
                      <StarIcon />
                    </p>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Web Developer</h5>
                      <p class="card-text">
                        <WorkIcon />
                        0-2 years
                        <br />
                        <CurrencyRupeeIcon />
                        3-5 Lacs P.A.
                        <br />
                        <LocationOnIcon />
                         Navi Mumbai
                      </p>
                      <a
                        href="https://www.itvedant.com/careers"
                        class="btn btn-primary"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              </div>

            </div>


          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Web