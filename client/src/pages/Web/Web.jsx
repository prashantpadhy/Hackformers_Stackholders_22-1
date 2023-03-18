import React from 'react'

const Web = () => {
  return (
    <>
    <div class="container-fluid my-3">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item" id="accordionExample1">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              {" "}
              Phase 1: (Introduction){" "}
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Basic Introduction.</strong>

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
                    A back-end developer is responsible for building and maintaining the server-side of web applications.
They work with databases, servers, and APIs to ensure that the web application functions smoothly and efficiently.
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
                            In back-end development, Python is often used for tasks such as data processing and storage, server-side scripting, and API development.
It is also commonly used for building machine learning and artificial intelligence applications.
                            </li>
                            <li>
                            Overall, Python is a powerful and flexible language that is well-suited to back-end development.
Its simplicity, ease of use, and large ecosystem of libraries and frameworks make it a popular choice among developers.
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
              Phase 2: (){" "}
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong>
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
                    Accordion Item #2.1{" "}
                  </button>
                </h2>
                <div
                  id="cThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="hThree"
                >
                  <div class="accordion-body"> CIAO </div>
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
              Phase 3: (){" "}
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Web