import React, { useState } from "react";
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

const PricingTable = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="grid grid-cols-10 gap-4">
      <div className="col-span-1 md:hidden">
        <button
          onClick={() => setIsSidebarOpen(true)}
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
      <div className="flex flex-col col-span-8 items-center p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Elevate Your Teaching with Time-Saving AI Tools!
        </h1>
        <p className="text-center mb-6">
          Save time on lesson prep, boost student engagement, and enhance
          learning by gamifying your classroom. Reclaim your valuable time with
          AI-enhanced teaching tools.
        </p>
        <div className="flex justify-center mb-6">
          <span className="mr-2">Monthly</span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <span className="ml-2">Yearly</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center text-orange-500">
              Starter
            </h2>
            <p className="text-2xl font-bold text-center">FREE</p>
            <p className="text-center mb-6">$0 / month</p>
            <button className="bg-orange-500 text-white py-2 px-4 rounded w-full mb-4">
              Current Plan
            </button>
            <ul className="text-left">
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✔️
                </span>{" "}
                10K AI text generation tokens/month
              </li>
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✔️
                </span>{" "}
                Host unlimited review games
              </li>
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✔️
                </span>{" "}
                Create unlimited quizzes and lessons
              </li>
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✔️
                </span>{" "}
                Create unlimited classes
              </li>
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✔️
                </span>{" "}
                Unlimited access to Discover content
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center text-blue-500">
              Premium
            </h2>
            <p className="text-2xl font-bold text-center">
              {isYearly ? "$8.99 USD / month" : "$11.99 CAD"}
            </p>
            <p className="text-center mb-6">
              charged {isYearly ? "yearly" : "monthly"}
            </p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded w-full mb-4">
              Upgrade
            </button>
            <ul className="text-left">
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✔️
                </span>{" "}
                Everything in Starter
              </li>
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✔️
                </span>{" "}
                Unlimited AI text generation tokens/month
              </li>
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✔️
                </span>{" "}
                Smarter AI Model
              </li>
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✔️
                </span>{" "}
                Translation capabilities
              </li>
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✔️
                </span>{" "}
                Future LMS integrations
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center text-purple-500">
              20 Premium Licenses
            </h2>
            <p className="text-2xl font-bold text-center">
              {isYearly ? "$5.49 USD" : "$7.49 CAD"}
            </p>
            <p className="text-center mb-6">
              per license, per month, charged {isYearly ? "yearly" : "monthly"}
            </p>
            <button className="bg-purple-500 text-white py-2 px-4 rounded w-full mb-4">
              Contact Us
            </button>
            <ul className="text-left">
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✔️
                </span>{" "}
                Everything in Premium
              </li>
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✔️
                </span>{" "}
                Professional development and training
              </li>
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✔️
                </span>{" "}
                Dedicated support and check-ins
              </li>
              <li className="mb-2">
                <span role="img" aria-label="check">
                  ✔️
                </span>{" "}
                Customization and branding requests
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
