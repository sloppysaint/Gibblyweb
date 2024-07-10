import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";

const Home = () => {
  const [theme, setTheme] = useState("light");

  const alterarTemaSite = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <>
      <Navbar />
      <html data-bs-theme={theme}>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <title>replit</title>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
          />
        </head>
        <body>
          <section className="flex flex-wrap justify-between items-center bg-orange-500 text-white p-8">
            <div className="max-w-lg">
              <h2 className="text-3xl mb-4">
                Generate Lessons & Quizzes with AI
              </h2>
              <p className="text-xl mb-6">
                Save hours of prep each week with Gibbly! Generate ready to use
                lessons, lesson plans, assessments, quizzes, and gamified review
                assignments in minutes on any topic with AI.
              </p>
              <div className="flex gap-4">
                <button className="bg-orange-400 text-white px-6 py-3 rounded-md">
                  Start learning
                </button>
                <button className="bg-orange-400 text-white px-6 py-3 rounded-md">
                  Play
                </button>
                <button
                  className="bg-orange-400 text-white px-6 py-3 rounded-md"
                  onClick={() => {
                    window.location.href = "/pages/Login";
                  }}
                >
                  Login
                </button>
              </div>
            </div>
            <div>
              <img
                src="StudentStudying.png"
                alt="Student Studying"
                className="h-96 w-96"
              />
            </div>
          </section>
          <div>
            <div className="text-center p-8">
              <h2 className="text-3xl mb-4">Save Time on Lesson Prep</h2>
              <p className="text-xl mb-8">
                Create lessons, gamified quizzes, assessments, and review
                assignments that your students love and that save you hours of
                prep every week.
              </p>
              <div className="flex flex-wrap justify-center">
                <div className="bg-orange-200 m-4 p-6 rounded-lg shadow-md flex-1 max-w-xs">
                  <img
                    src="AIGenerator.png"
                    alt="AI Lesson Generator Icon"
                    className="mx-auto mb-4 w-12"
                  />
                  <h3 className="text-xl mb-2">AI Lesson Generator</h3>
                  <p>
                    With a few button clicks, generate full lesson slides and
                    lesson plan on any topic with AI.
                  </p>
                </div>
                <div className="bg-orange-200 m-4 p-6 rounded-lg shadow-md flex-1 max-w-xs">
                  <img
                    src="quiz.png"
                    alt="AI Quiz Generator Icon"
                    className="mx-auto mb-4 w-12"
                  />
                  <h3 className="text-xl mb-2">AI Quiz Generator</h3>
                  <p>
                    Generate a gamified quiz from a YouTube video, document,
                    topic, or pasted text in no time.
                  </p>
                </div>
                <div className="bg-orange-200 m-4 p-6 rounded-lg shadow-md flex-1 max-w-xs">
                  <img
                    src="curriculum.png"
                    alt="Curriculum Aligned Icon"
                    className="mx-auto mb-4 w-12"
                  />
                  <h3 className="text-xl mb-2">Curriculum Aligned</h3>
                  <p>
                    Paste in your curriculum and expectations and instantly get
                    locally relevant learning material.
                  </p>
                </div>
                <div className="bg-orange-200 m-4 p-6 rounded-lg shadow-md flex-1 max-w-xs">
                  <img
                    src="resource.png"
                    alt="Teacher Created Resources Icon"
                    className="mx-auto mb-4 w-12"
                  />
                  <h3 className="text-xl mb-2">Teacher Created Resources</h3>
                  <p>
                    Pick from our library of ready-to-use materials made by
                    teachers, for teachers.
                  </p>
                </div>
                <div className="bg-orange-200 m-4 p-6 rounded-lg shadow-md flex-1 max-w-xs">
                  <img
                    src="dashboard.png"
                    alt="Teacher Dashboard Icon"
                    className="mx-auto mb-4 w-12"
                  />
                  <h3 className="text-xl mb-2">Teacher Dashboard</h3>
                  <p>
                    Manage your classes, assignments, and student progress with
                    ease.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <section className="text-center p-8 bg-gray-100">
              <h1 className="text-3xl mb-4">Reviews</h1>
              <div className="flex flex-wrap justify-center gap-8">
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg w-80">
                  <p className="mb-4">
                    Gibbly has been an absolute pleasure to use! It has made
                    lesson planning so fun and easy! It has saved me so much
                    time while creating relevant curriculum based lessons!
                  </p>
                  <div className="flex items-center">
                    <img
                      src="user.png"
                      alt="Reviewer 1"
                      className="rounded-full w-12 h-12 mr-4"
                    />
                    <div>
                      <h4 className="text-lg">Chris Jake</h4>
                      <p className="text-sm">Google</p>
                      <div className="text-yellow-500">
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg w-80">
                  <p className="mb-4">
                    Gibbly helps take the game off the computer and into the
                    minds of the students. Using AI to create a quiz that ties
                    into the content and then made into a lesson sets Gibbly
                    apart.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="user.png"
                      alt="Reviewer 2"
                      className="rounded-full w-12 h-12 mr-4"
                    />
                    <div>
                      <h4 className="text-lg">Gemma Nolen</h4>
                      <p className="text-sm">Google</p>
                      <div className="text-yellow-500">
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 p-6 rounded-lg w-80">
                  <p className="mb-4">
                    Gibbly is excellent for peer induced teamwork! My students
                    love and I love having the option to have teams. Great for
                    review or study guides.
                  </p>
                  <div className="flex items-center">
                    <img
                      src="user.png"
                      alt="Reviewer 3"
                      className="rounded-full w-12 h-12 mr-4"
                    />
                    <div>
                      <h4 className="text-lg">John Tate</h4>
                      <p className="text-sm">Google</p>
                      <div className="text-yellow-500">
                        &#9733;&#9733;&#9733;&#9733;&#9733;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <section className="text-center p-8 bg-white">
              <h2 className="text-3xl mb-4">
                Start learning by creating a free account and get register
              </h2>
              <form className="flex justify-center gap-4">
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-3 rounded-md"
                >
                  <a href="subscribe.html" className="no-underline text-white">
                    Subscribe...
                  </a>
                </button>
              </form>
            </section>
          </div>
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ENjdO4Dr2bkBIFxQpeo8E7I6r6VojoI2+HEvITOnMk66jrSLAxBBhGxM++I1B1wB"
            crossorigin="anonymous"
          ></script>
        </body>
      </html>
    </>
  );
};

export default Home;
