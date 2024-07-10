// src/Pages/Dashboard.js
import React, { useState } from "react";
import QuizCard from "../Components/QuizCard";
import Sidebar from "../Components/Sidebar";

import { Link } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import ExploreIcon from "@mui/icons-material/Explore";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SchoolIcon from "@mui/icons-material/School";
import SettingsIcon from "@mui/icons-material/Settings";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../assets/logo.png";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const quizzes = [
    {
      title: "Financial International",
      questions: 21,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRovMvgaO5nz34-3uMnljtBuId0HTdcw3Y4NA&s",
    },
    {
      title: "Mastering Grammar Basics",
      questions: 5,
      image:
        "https://polylanguages.edu/wp-content/uploads/2023/05/image-27-1024x577.png",
    },
    {
      title: "Discovering West Africa",
      questions: 10,
      image:
        "https://media.istockphoto.com/id/108175482/photo/african-woman-on-the-road.jpg?s=612x612&w=0&k=20&c=yvfECTz4mrAdNsjf5uMPRiepSJOhMm4o5_Q0ltmyiPU=",
    },
    {
      title: "CAREERS",
      questions: 16,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLOndIQ-6Ht8BWimAwQybiDTg3spXQx7_3A&s",
    },
    {
      title: "Tokyo Unveiled",
      questions: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXo_zf8WE1OjtkTMzpDSzc0XM1LXB-mJxDMQ&s",
    },
    {
      title: "Founding Fathers Face",
      questions: 16,
      image:
        "https://m.media-amazon.com/images/I/41dY5fonY-L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Unleash your Quirk",
      questions: 14,
      image: "https://avatarfiles.alphacoders.com/370/370602.jpg",
    },
    {
      title: "Financial Fundamentals",
      questions: 21,
      image:
        "https://media.istockphoto.com/id/936338764/photo/a-stock-trader-checking-chart-fundamentals.jpg?s=612x612&w=0&k=20&c=o52twcctAdczSbN0NRdMP8qnVkfj-f5f7qwDuBfdsyM=",
    },
    {
      title: "Saving Our Planet",
      questions: 16,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlehbHrJLHC1KIi7hk0OjsOW_QTZMRYxX3g&s",
    },
    {
      title: "Exploring the past",
      questions: 16,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxPKNye3IxkkSVHPJV8MfQPxPjL9CZLOh1aA&s",
    },
    {
      title: "Evolving Elegance",
      questions: 18,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSuBU78nxsIYEaOSviftSucE8pX4_rrjfKw&s",
    },
    {
      title: "Water Wonders",
      questions: 25,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdqq4aulKcU8nHk9HY27uLfrfEkHXbt1An8g&s",
    },
    {
      title: "Unlocking Words",
      questions: 16,
      image:
        "https://t4.ftcdn.net/jpg/04/44/43/97/360_F_444439785_eJKmocrMa5lnf4WEdWRcjSGvsW7MyuQr.jpg",
    },
    {
      title: "Navigating the Workspace",
      questions: 6,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMKsbbXkVQfs2zKpVfunr9lprlkSTt6XVvA&s",
    },
    {
      title: "Celebrating Mothers Day",
      questions: 16,
      image:
        "https://media-bucket112825-prod.s3.us-east-1.amazonaws.com/protected/us-east-1%3A73a33874-0525-475e-bceb-8400e1e7b98c/d2a2bf2a-cd9f-4f72-962a-c43f4c4cf8aa.jpg?x-amz-content-sha256=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAQZMKHIGD2S3NY64Q%2F20240709%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240709T075404Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLWVhc3QtMSJHMEUCIEewyS4tplnStgiN%2FbwZWTa2irDoi01VIZ0mRr0qnX62AiEAygVsF72wx%2Bw1un3enl27BvL66AtU4dpre1iutJQv4HUqxAQIKBABGgwwNTQ1MTM4NDQ2MTUiDCrwlXUHLyP%2Ba%2B4AaCqhBMOwueM0y%2B8TBLseruLXoNV%2F3XbOCFsEZY5ujkRrx7hFIVkVpXAbrGB9Aq40EDInwOFNFVW36xmz%2B7KFrOd6jMjx%2BNxA2Bc3lMedAG79ZwcBChQbf2L98VuayeMeQ%2F1DoDNmd85CbfM1UueSVK5M73bGR2HzK2noAyYBoXk9Bf5MAco0JBL8N7EdqQGd5K0m%2BP7pBwwiUgMq7JlL3y64s98pwmqMs6o%2B%2BssYWeJPPXp0q0U7G9JADpuL7gR6iaYAnzjBdiZwsAtw2Bf%2Ff%2BhJe3hA3WgEEjPGgcfD0lhgMoO%2FwDpJt95phzHpwxUbi5I5CpUtw1p0UVYdAnTgy3ye%2BcP6T1ciSgCVJqHBxnxd2p5v6XW80kU3fiZh4wvN9T5by3tVnd1zHr3QsNPX3Z4spcqx24yI4FthNOXxqLRUtOMQn1pg5mG9CRspspBO6%2FnxvfyE9in2LaUzjHg3gIQLv7ZJClbCrW6heWgTEoQUWyAm32Bz3%2Bp9FCrkV81j%2FyzBxHeEY5STQXg4H72nlE4xYjHFE06bAfQbpb3j1UoOgn4VLPD98JtHDTo9Ttyk%2FR9Ul1FrzcpLZoxpa2kEqq4bbtGlcKSlVs0Aw4H0q9qiUnmklQk6bafnkaOId5yfCN45tAEZNHmGZrv1a5eQGEWiytH0XYDZXTo%2FJp0GSg3KmjGSGN5Lf5HHJD4sXL2m5GRavGx2nhR7%2FGp%2F4fEY%2F8s%2FoWaFUl3CcB1u0DwNCwZxjIKu82t8kgqAKuHgGZTF8P9uKt3cGpILdu%2FcVbA69MoA4lAMGhQSnkmn57mjX5%2FbPoXqtq6oA1y1OWc7lMc6yxL3kRgS5Vpg2PUHwbDBnCSH%2FwvVss1ntD%2FL%2FoHe8mZKedI14PryK46jF8ddOhW%2Fk0VuqDzBPTG99q%2FwDjZB9mK%2Bn30nAkp69Nh3I9CnCRuOhA2Z%2BS7%2FGHLyflNK5uHYr7WgndvlPGJK0x13vLvSUHGyfPA3SypaV%2FKq4O%2FJQd7O8sQPhF4x%2FhLzJhBzuzREs6YUs2o5%2F0UP1BzGiTpRIBwVYHV%2F27qciIZ%2FPkNRvsWxsCF4%2BqC4S47ZCyzVgSDz9NbbX5ScOavT0CUHBm4gNHwPVSjPj3PPgTTi95W5rtdrA5PYRXHYPJJX6GEG4DYfKjK0b%2BNC6RCBa6%2B0UKcUS4TT4HtM0JaQ7ZjlWv6IAKnt4CCbGLPylqa%2B6VZ5Olz50BzGJ2%2FfqA9PMlMTsYbwUnqfD0%2FTYbCE9wE8DiZlHhvID7c0gBhqLs08KZ85dqkD91Zz%2Flpn5OQScv84iizZXyWrB1%2FQaouRyha9XzJ0uDsmpZhcyFCmL%2B6K92IEftGA%2FiUYETiVrRgdoTifAEcZcQ%2B6n3ug%2F1AZ2jvN%2FjQdQDsR24dZb39dWI3NPMEMkP2UsJHwv39hgD6AA9P4t%2F7hFdZmX2KiEit%2BuFHPd03ig3MAEsG9qxDBQcdBzxV4xk5ziiUGdiVbemDwCL%2BBdyK%2Fmjvn90m1YT2SrEKnMI5mrm8kY1MsTJn5WB3NUcF0bWit32x8VcrhxSsXj%2FazT2YSQ66hGf8mYfrtnweY2loy1V%2BN7JPWJOKZvWskdeAuvmBohPA%2F1UgXxDBWn9cWYbamEzWr%2FLW8185vZVUW%2FJ4E7AwIS%2BG1cSC5tqoXRUhYMnLlcYKsRLvjmGD0jlyVRUNNlOSTGKbySgUKd6ZumEM4m9rB5bTy0pb0yJHUx7JKPYEwgx89MLDIs7QGOoUCq%2Fxq%2B4WDb6fPuIH08HKjSY%2F4fzsHHU%2F%2F8V26O3ZoA1DkWBx6QOa9EpjYCaPWV35Fi34VeGpxldBunQVZGoBz2yUIsdS82dLje%2Bo%2Bd8noCueXaB%2FlOFM6vSa0RY5dmy9UyN%2Brf2SgWd6xpNgvwIUVsL7qlqAOGaqFzpGB1j2Y8DbL9mvZwA4leJZhPSSCbRhldVW613Vg11ZIv9ucDJnSCUAQPTi9Yp%2FTSQ2QAyjnC%2FVaG%2BS38q%2FfKuSXcAR8V16vDYhOiFs0nJAa1M8VRtnRkw1rUI3rPN7bKHPv4Pte4HF2MQdW6R23jQTQM2ACscVujuR1CSPmAJVJDPI08TQ9LePhKHHL&X-Amz-Signature=1f3dec27620f77cc0fe8a4b32a17659aab2c179f28b2cde98bae9ef7183060a4",
    },
  ];

  return (
    // <div className="p-4">
    //   <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    //   <div className='flex justify-between items-center mb-6'>
    //     <img src={Logo} alt="Gibbly Logo" className="h-16" />

    //   </div>
    <div className="grid grid-cols-10 gap-4 ">
      <div className="col-span-1 md:hidden">
        <button
          onClick={() => {
            setIsSidebarOpen(true);
          }}
          className="p-2 text-gray-600 hover:text-gray-900 "
        >
          <MenuIcon fontSize="large" />
        </button>
      </div>
      <div
        className={`fixed inset-y-0 left-0 w-45 bg-white shadow-lg p-4 overflow-y-auto transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:w-40`}
      >
        <div className="flex justify-between items-center mb-4">
          <img src={Logo} alt="Gibbly Logo" className="h-16" />
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            <CloseIcon fontSize="large" />
          </button>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <button className="w-full text-left h-30 p-2 rounded hover:bg-orange-300">
                <div
                  onClick={() => (window.location.href = "/create")}
                  className="flex flex-col items-center"
                >
                  <CreateIcon />
                  <p className="text-orange-600 font-bold">Create</p>
                </div>
              </button>
            </li>
            <li className="mb-4">
              <button className="w-full text-left h-30 p-2 rounded hover:bg-orange-300">
                <div
                  onClick={() => (window.location.href = "/loader")}
                  className="flex flex-col items-center"
                >
                  <ExploreIcon />
                  <p className="text-orange-600">Discover</p>
                </div>
              </button>
            </li>
            <li className="mb-4">
              <button className="w-full text-left h-30 p-2 rounded hover:bg-orange-300">
                <div
                  onClick={() => (window.location.href = "/loader")}
                  className="flex flex-col items-center"
                >
                  <LibraryBooksIcon />
                  <p className="text-orange-600">My Library</p>
                </div>
              </button>
            </li>
            <li className="mb-4">
              <button className="w-full text-left h-30 p-2 rounded hover:bg-orange-300">
                <div
                  onClick={() => (window.location.href = "/pages/Class")}
                  className="flex flex-col items-center"
                >
                  <SchoolIcon />
                  <p className="text-orange-600">Classes</p>
                </div>
              </button>
            </li>
            <li className="mb-4">
              <button className="w-full text-left h-30 p-2 rounded hover:bg-orange-300">
                <div
                  onClick={() => (window.location.href = "/pages/Settingcard")}
                  className="flex flex-col items-center"
                >
                  <SettingsIcon />
                  <p className="text-orange-600">Settings</p>
                </div>
              </button>
            </li>
            <li className="mb-4">
              <button className="w-full text-left h-30 p-2 rounded hover:bg-orange-300">
                <div
                  onClick={() => (window.location.href = "/pages/Upgrade")}
                  className="flex flex-col items-center"
                >
                  <UpgradeIcon />
                  <p className="text-yellow-600 font-bold">Upgrade</p>
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="col-span-1"></div>
      <div className="col-span-8">
        <div className="py-5 justify-end flex">
          <button
            className="bg-[#008a19] text-white w-relative  text-lg h-9 py-0  px-4 rounded-lg hover:bg-[#14b80e] flex items-center space-x-2"
            onClick={() => {
              window.location.href = "/pages/Upgrade";
            }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"></path>
            </svg>
            <span>Buy Tokens</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {quizzes.map((quiz, index) => (
            <QuizCard
              key={index}
              title={quiz.title}
              questions={quiz.questions}
              image={quiz.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
