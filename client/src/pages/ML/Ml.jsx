import React from 'react'
import StarIcon from "@mui/icons-material/Star";
import WorkIcon from "@mui/icons-material/Work";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import PaidIcon from "@mui/icons-material/Paid";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Webimg from '../../assets/55.jpg'
// import './Web.css'

const Ml = () => {
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
              Phase 1: (Introduction to the Machine Learning){" "}
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>Learn all the basics of Machine Learning</strong>

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
                    Data Scientist
                  </button>
                </h2>
                <div
                  id="cThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="hThree"
                >
                  <div class="accordion-body">
                    <strong>
                    A data scientist in machine learning is a skilled professional who is adept at using advanced algorithms and statistical techniques to extract insights from complex data sets. They possess a unique combination of expertise in computer science, mathematics, and domain-specific knowledge that allows them to analyze large amounts of data and build predictive models that can be used to make informed business decisions.
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
                          Python
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
                            Python is a popular programming language for data science, thanks to its easy-to-learn syntax, powerful libraries for data analysis and visualization (such as NumPy, Pandas, and Matplotlib), 
and support for machine learning and deep learning frameworks (such as scikit-learn, TensorFlow, and PyTorch).
                            </li>
                            <li>
                              Resource link:
                              <a href="https://www.datacamp.com/courses/intro-to-python-for-data-science">
                                w3schools
                              </a>
                              ,
                              <a href="https://www.python.org/about/gettingstarted/">
                                freecodechamp
                              </a>
                            </li>
                            <li>
                              {" "}
                              IDE link:
                              <a href="https://jupyter.org/">
                                Jupyter Notebook
                              </a>
                              <a href="https://www.spyder-ide.org/">
                                Spyder
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
                          SQL{" "}
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
                            Structured Query Language (SQL) is a language used for managing and manipulating relational databases.
 As a data scientist, you may need to work with large datasets stored in databases, so learning SQL can be helpful for querying and extracting the data you need.
                            </li>
                            <li>
                              Resource link:
                              <a href="https://www.codecademy.com/learn/learn-sql">
                                Code Academy
                              </a>
                              ,
                              <a href="https://sqlzoo.net/">
                                SQLZoo
                              </a>
                            </li>
                            <li>
                              {" "}
                              Tool link:
                              <a href="https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms">
                                 SQL server Management studio
                              </a>
                              <a href="https://www.navicat.com/">
                                Navicat
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
                          SCALA{" "}
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
                              CScala is a programming language that combines object-oriented and functional programming paradigms.
 It's popular in big data applications, thanks to its compatibility with Hadoop and Spark, as well as its concise syntax and powerful libraries.
                            </li>
                            <li>
                              Resource link:
                              <a href="https://www.coursera.org/learn/progfun1">
                                Coursera
                              </a>
                              ,
                              <a href="https://horstmann.com/scala/">
                                Horstmann
                              </a>
                            </li>
                            <li>
                              {" "}
                              IDE link:
                              <a href="https://www.jetbrains.com/idea/">
                                JETBrains
                              </a>
                              <a href="https://www.sublimetext.com/">
                                Sublime Text
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
                    Data Analyst
                  </button>
                </h2>
                <div
                  id="eb"
                  class="accordion-collapse collapse"
                  aria-labelledby="be"
                >
                  <div class="accordion-body">
                    <strong>
                    Data analysis is an exciting and rewarding career path for those who enjoy working with data and using it to drive decision-making.
 As a data analyst, you will be responsible for collecting, processing, and analyzing large datasets to extract insights and inform business strategy.
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
                            Python is one of the most widely used programming languages for data analysis.
 It is user-friendly and has a large number of libraries specifically designed for data analysis and visualization, such as pandas, NumPy, and Matplotlib.
                            </li>
                            <li>
                              Resource link:
                              <a href="https://www.datacamp.com/courses/intro-to-python-for-data-science">
                                Datacamp
                              </a>
                              ,
                              <a href="https://jakevdp.github.io/PythonDataScienceHandbook/">
                                Github
                              </a>
                            </li>
                            <li>
                              {" "}
                              IDE link:
                              <a href="https://www.jetbrains.com/pycharm/">
                                Pycharm
                              </a>
                              <a href="https://jupyter.org/">
                                Jupyter Notebook
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
                          R{" "}
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
                            R is a programming language and software environment for statistical computing and graphics.
 It's particularly well-suited for data analysis and visualization, and has a large library of packages for statistical analysis, machine learning, and data visualization.

                            </li>
                            <li>
                              Resource link:
                              <a href=" https://www.datacamp.com/courses/free-introduction-to-r">
                                Data Camp
                              </a>
                              ,
                              <a href="https://swirlstats.com/">
                                swirlstats
                              </a>
                            </li>
                            <li>
                              {" "}
                              IDE link:
                              <a href="https://www.rstudio.com/products/rstudio/download/">
                                R studio
                              </a>,
                              <a href="https://jupyter.org/install">
                                Jupyter Notebook
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
                    Image classification using convolutional neural networks{" "}
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
                      Python: a popular programming language for machine learning and data science.
                      </li>
                      <li>
                      TensorFlow or PyTorch: deep learning frameworks for building and training neural networks.
                      </li>
                      <li>
                      OpenCV: an open-source computer vision library for image processing and analysis.
                      </li>
                      <li>
                      Scikit-learn: a machine learning library for data preprocessing, model selection, and evaluation.
                      </li>
                    </ul>
                    <p>
                      The website will need to have the following features:
                    </p>
                    <ul>
                      <li>
                      Preprocessing the images by resizing and normalizing them.
                      </li>
                      <li>
                      Training the model on a large dataset of labeled images.
                      </li>
                      <li>
                      Creating a convolutional neural network architecture with multiple layers, including convolutional, pooling, and dense layers.
                      </li>
                      <li>
                      Evaluating the model's performance using metrics such as accuracy, precision, and recall.
                      </li>
                      <li>
                        Tuning the model's hyperparameters to improve its performance.
                      </li>
                      <li>
                      Using transfer learning to leverage pre-trained models for image classification tasks.
                      </li>
                      <li>
                        Reference Link:{" "}
                        <a href="https://github.com/CatchZeng/bing_images">
                          Github
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
                    Recommendation system using collaborative filtering{" "}
                  </button>
                </h2>
                <div
                  id="2p"
                  class="accordion-collapse collapse"
                  aria-labelledby="p2"
                >
                  <div class="accordion-body">
                    {" "}
                    Problem Statement :  Build a recommendation system that can suggest relevant products or services to users based on their past behavior or preferences.
                    Technology Stack:
                    <ul>
                      <li>
                      Python, Scikit-learn, Pandas, Surprise or TensorRec problem statement and key features
                      </li>
                    </ul>
                    <p>
                      The website will need to have the following features:
                    </p>
                    <ul>
                      <li>
                      Collaborative filtering is a technique that predicts a user's preference for an item based on the preferences of other users with similar past behavior or preferences.
                      </li>
                      <li>
                      Python is the programming language used to develop the recommendation system.
                      </li>
                      <li>
                      Scikit-learn is a Python library used for machine learning tasks such as data preprocessing, model selection, and model training
                      </li>
                      <li>
                      Pandas is a Python library used for data manipulation and analysis.
                      </li>
                      <li>
                      Surprise is a Python library used for recommendation systems that provides a variety of algorithms for collaborative filtering, such as user-based or item-based collaborative filtering.
                      </li>
                      <li>
                      TensorRec is a Python library for building recommendation systems using matrix factorization.
                      </li>
                      <li>
                        Reference Link:{" "}
                        <a href="https://github.com/XuefengHuang/RecommendationSystem">
                          Github
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
                      <h5 class="card-title">ML engineer</h5>
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
                      <h5 class="card-title">ML engineer</h5>
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
                      <h5 class="card-title">Data scientist</h5>
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
                      <h5 class="card-title">Data Analyst</h5>
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

export default Ml