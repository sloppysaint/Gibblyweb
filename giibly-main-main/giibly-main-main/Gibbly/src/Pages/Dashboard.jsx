// src/Pages/Dashboard.js
import React, { useState } from "react";
import QuizCard from "../Components/QuizCard";
import SearchBar from "../Components/SearchBar";
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
  const [searchQuery, setSearchQuery] = useState("");

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
        "https://vistagrandevilla.com/wp-content/uploads/2023/05/Vista-Grande-Villa-Mothers-Day-1.jpg",
    },
  ];

  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    // <div className="p-4">
    //   <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    //   <div className='flex justify-between items-center mb-6'>
    //     <img src={Logo} alt="Gibbly Logo" className="h-16" />

    //   </div>

    <div className="grid grid-cols-10 gap-4">
  <div className="col-span-1 md:hidden">
    <button
      onClick={() => {
        setSidebarOpen(true);
      }}
      className="p-2 text-gray-600 hover:text-gray-900"
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
      <button onClick={() => (window.location.href = "/")}>
        <img src={Logo} alt="Gibbly Logo" className="h-16" />
      </button>
      <button
        onClick={() => setSidebarOpen(false)}
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
            <div className="flex flex-col items-center">
              <ExploreIcon />
              <Link to="#" className="text-orange-600">
                Discover
              </Link>
            </div>
          </button>
        </li>
        <li className="mb-4">
          <button className="w-full text-left h-30 p-2 rounded hover:bg-orange-300">
            <div
              onClick={() => (window.location.href = "/pages/Dashboard")}
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
  <div className="col-span-7" style={{ marginLeft: '-1rem' }}>
    <div className="py-5 justify-end flex">
      <button
        className="bg-[#008a19] text-white w-relative text-lg h-9 py-0 px-4 rounded-lg hover:bg-[#14b80e] flex items-center space-x-2"
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
    <SearchBar
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
      {filteredQuizzes.map((quiz, index) => (
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
