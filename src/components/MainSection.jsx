import { useState, useEffect } from "react";
import deviceImg from "../assets/EA5708AA-944D-4FE0-A483-014383E7B2FF_1_201_a.jpeg";
import logoImg from "../assets/BE6D9726-4743-42D1-9C3E-11BB3C042C9C_1_201_a.jpeg";
import center from "../assets/KETOS-Monitoring-Solution.png";
import logo1 from "../assets/Clients/logofav.png";
import logo2 from "../assets/Clients/cgwb_logo_2.jpg";
import logo3 from "../assets/Clients/UltraTech.avif";
import logo4 from "../assets/Clients/Adani_2012_logo.png";
import logo5 from "../assets/Clients/reliance-logo1.avif";
import logo6 from "../assets/Clients/WonderCement_Logo.jpg";
import logo7 from "../assets/Clients/cipla.jpeg";
import logo8 from "../assets/Clients/bisleri.jpg";
import logo9 from "../assets/Clients/coco-cola_brand.avif";
import logo10 from "../assets/Clients/dlf logo.png";
import logo11 from "../assets/Clients/Haldiram's-Logo.wine.png";
import logo12 from "../assets/Clients/ITC_Limited_Logo.svg.png";
import logo13 from "../assets/Clients/renew power .png";
import logo14 from "../assets/Clients/delhi-jal-board.png";
import IoTHWIcon from "../assets/IoT_5x-icon-1.png";
import ConnectivityIcon from "../assets/Connectivity_5x-icon-1.png";
import DataStorageIcon from "../assets/Data-Storage_5x-icon.png";
import ReportingIcon from "../assets/Reporting-icon.png";
import PredictiveIcon from "../assets/Predictive@5x-icon-1.png";


import {
  FaCalendarAlt,
  FaBolt,
  FaGlobe,
  FaWater,
  FaHandsHelping,
  FaTint,
  FaSeedling,
  FaIndustry,
  FaCity,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import './Slider.css'; 

const icons = [
  {
    id: 1,
    title: "Iot HW",
    icon: IoTHWIcon,
    text: "The patented AQUASENSE IoT Sensor System automates water quality monitoring and water efficiency. The AQUASENSE WAVE monitors flow, pressure, volume, and other efficiency data points. The AQUASENSE SHIELD provides lab-accurate water quality data in real-time across dozens of parameters.",
  },
  {
    id: 2,
    title: "Connectivity",
    icon: ConnectivityIcon,
    text: "AQUASENSE IoT Sensor Systems include cloud integration through several connectivity options including LoRa, WiFi, cellular, and customer networks.",
  },
  {
    id: 3,
    title: "Data Storage",
    icon: DataStorageIcon,
    text: "Data is aggregated in a secure centralized data warehouse and is automatically organized and structured to facilitate turn-key analytics. In addition, the AQUASENSE solution is interoperable and can connect to public data and existing SCADA systems.",
  },
  {
    id: 4,
    title: "Reporting",
    icon: ReportingIcon,
    text: "Eliminating the need for BI Analytics or data science expertise, users have access to automated, out-of-the-box reporting, and users can easily create and configure customized, real-time reports and alerts to support specific operational requirements and process controls..",
  },
  {
    id: 5,
    title: "Predictive",
    icon: PredictiveIcon,
    text: "Leveraging AQUASENSE machine learning algorithms, water operators are able to correlate data with several planning models, understand consumer behavior, and understand forecasting patterns for custom operations. As a result, they are able to identify and get ahead of issues before they become real concerns including potential compliance issues, maintenance requirements, water usage, and water quality anomalies.",
  },
];

const MainSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

   const [activeIndex, setActiveIndex] = useState(0);

   useEffect(() => {
     const interval = setInterval(() => {
       setActiveIndex((prevIndex) => (prevIndex + 1) % icons.length);
     }, 5000); // Change text every 5 seconds
     return () => clearInterval(interval);
   }, []);

  

  const topImages = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo12,
    logo13,
  ];

  const bottomImages = [
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo14,
  ];


  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-between sticky p-6 bg-blue-800 text-white">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img src={logoImg} alt="Company Logo" className="h-12" />
          <div className="text-left">
            <h5 className="font-bold">Aquasense</h5>
            <p>THE WATER IOT COMPANY</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 relative">
          {/* Water Monitoring Solutions Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-yellow-500 focus:outline-none">
              <span>Water Monitoring Solutions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-auto h-auto  hidden group-hover:block"
              // style={{ zIndex: "1" }}
            >
              <div className="flex space-x-10 p-6" style={{zIndex:"1000"}}>
                {/* Left Section */}
                {/* <div>
                  <h5 className="font-bold mb-2">AQUASENSE SOLUTIONS</h5>
                  <ul>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Overview
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        AQUASENSE Analytics
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        AQUASENSE SHIELD
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        AQUASENSE WAVE
                      </a>
                    </li>
                  </ul>
                </div> */}

                {/* Middle Section */}
                <div>
                  <h5 className="font-bold mb-2">AGRICULTURE</h5>
                  <ul>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Open Field Agriculture
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Indoor Farming
                      </a>
                    </li>
                  </ul>

                  <h5 className="font-bold mb-2 mt-4">MUNICIPALITIES</h5>
                  <ul>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Municipal & City
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Right Section */}
                <div>
                  <h5 className="font-bold mb-2">INDUSTRIAL</h5>
                  <ul>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Mining
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Manufacturing
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Pulp and Paper
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Automotive Manufacturing
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Chemical Manufacturing
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Consumer Goods
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Beverage Companies
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Food Production
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Extra Section */}
                <div>
                  <h5 className="font-bold mb-2">WATER TYPE</h5>
                  <ul>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Surface Water
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Ground Water
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Drinking Water
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Produced Water
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Process Water
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Wastewater
                      </a>
                    </li>
                    <li className="mb-1">
                      <a href="#" className="hover:text-yellow-500">
                        Recycled Water
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Water Treatment Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-yellow-500 focus:outline-none">
              <span>Water Treatment Solutions</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-64 h-auto z-10 hidden group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Sewage
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Effluent
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Leachate
              </a>
            </div>
          </div>

          {/* Control & Automation Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-yellow-500 focus:outline-none">
              <span>Control & Automation</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-64 h-auto z-10 hidden group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Supply
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Treatment
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Agriculture
              </a>
            </div>
          </div>

          {/* Add other dropdowns in a similar way */}

          <a href="#" className="hover:text-yellow-500">
            About Us
          </a>
          <a href="#" className="hover:text-yellow-500">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Mobile Navigation */}
        <nav
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-full left-0 w-full bg-blue-800 text-white p-4 z-20`}
        >
          <a href="#" className="block py-2 hover:text-yellow-500">
            Water Monitoring Solutions
          </a>
          <a href="#" className="block py-2 hover:text-yellow-500">
            Water Treatment Solutions
          </a>
          <a href="#" className="block py-2 hover:text-yellow-500">
            Control & Automation
          </a>
          <a href="#" className="block py-2 hover:text-yellow-500">
            About Us
          </a>
          <a href="#" className="block py-2 hover:text-yellow-500">
            Contact
          </a>
        </nav>

        {/* Demo Button for Desktop */}
        <button className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-lg hover:bg-yellow-600 hidden md:block">
          REQUEST A DEMO
        </button>
      </header>

      {/* Hero Section */}
      <section
        style={{ zIndex: "1" }}
        className="flex flex-col-reverse md:flex-row items-center justify-between text-center px-4 py-10 mt-10  md:py-20"
      >
        <div className="md:w-1/2 md:pr-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Digital Water Intelligence Reimagined
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-6">
            Transforming how water operators measure, manage, and forecast water
            quality and efficiency in Industrial, Agricultural, and Municipal
            applications.
          </p>
        </div>
        <div className="relative md:w-1/2 flex justify-center">
          <img
            src={deviceImg}
            alt="Device"
            style={{ borderRadius: "15px", zIndex: "1" }}
            className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto"
          />
        </div>
      </section>

      {/* Feature Icons */}
      <div className="flex flex-col md:flex-row justify-center  space-y-4 md:space-y-0 md:space-x-6 mb-8">
        {[
          {
            icon: FaCalendarAlt,
            title: "WATER USAGES COMPLIANCE",
            description:
              "AI-powered monitoring solutions ensuring compliance with standards.",
          },
          {
            icon: FaBolt,
            title: "WATER QUALITY MONITORING",
            description: "Real-time data analytics to ensure water quality.",
          },
          {
            icon: FaGlobe,
            title: "PUMPHOUSE + FLOW MONITORING",
            description: "Remote integration of flow meters and pump control.",
          },
          {
            icon: FaWater,
            title: "WATER LEVEL MONITORING",
            description: "Accurate water level measurements.",
          },
          {
            icon: FaHandsHelping,
            title: "REMOTE WATER CONTROL",
            description: "Remotely manage and control your water systems.",
          },
          {
            icon: FaTint,
            title: "WATER LEAK DETECTION",
            description:
              "Early leak detection with advanced monitoring systems.",
          },
        ].map(({ icon: Icon, title, description }, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center text-center transition-all duration-700 ease-in-out transform delay-${
              idx * 100
            } ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Icon className="text-2xl md:text-4xl" />
            <p className="mt-2 text-sm md:text-base font-bold ">{title}</p>
            <p className="mt-2 text-sm md:text-base">{description}</p>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 px-4 py-10">
        {[
          {
            icon: FaSeedling,
            title: "Agriculture",
            description:
              "Improve yield, product quality, and reduce rejected batches. Automate water quality monitoring in real-time with the AQUASENSE Smart Water Intelligence Platform.",
          },
          {
            icon: FaIndustry,
            title: "Industrial",
            description:
              "Ensure influent, effluent, and process water quality in real-time with the EPA-Compliant AQUASENSE Smart Water Intelligence Platform.",
          },
          {
            icon: FaCity,
            title: "Municipality",
            description:
              "Autonomously measure dozens of parameters including heavy metals. Review real-time water quality reports and receive threshold-based alerts.",
          },
        ].map(({ icon: Icon, title, description }, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center border rounded-lg shadow-lg p-6 bg-white text-black hover:bg-gray-100 transform hover:-translate-y-2 transition-all duration-300"
          >
            <Icon className="text-4xl text-blue-700 mb-4" />
            <h3 className="font-bold text-lg mb-2">{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center bg-white py-12">
        {/* Heading */}
        <h1 className="text-3xl lg:text-4xl text-black font-bold mb-8 text-center">
          Fully Integrated Water Monitoring Solution
        </h1>

        {/* Icons Section */}
        <div className="w-full">
          <img
            src={center}
            alt="Device"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto"
          />
        </div>

        {/* Description Text */}
        <p className="text-center text-lg text-black lg:text-xl mb-12 px-6 max-w-4xl">
          Aquasense is a fully integrated platform that combines hardware,
          software, connectivity, automated reporting, predictive analytics, and
          maintenance to{" "}
          <a href="#!" className="text-blue-500 underline">
            automate water quality monitoring and testing
          </a>
          . AQUASENSE enables water operators to identify and solve
          mission-critical water efficiency and quality challenges in real-time,
          or before they happen through predictive algorithms, to ensure that
          water quality meets specific quality and safety standards.
        </p>

        {/* Button */}
        <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
          DOWNLOAD SHIELD DATA SHEET
        </button>
      </div>

      {/* {Reports} */}
      <div className="flex flex-col md:flex-row justify-center items-center p-8 space-x-0 md:space-x-12">
        {/* Left Side - Icons */}
        <div className="space-y-4">
          {/* First row with 3 icons */}
          <div className="grid grid-cols-3 gap-4">
            {icons.slice(0, 3).map((icon, index) => (
              <div
                key={icon.id}
                className={`p-4 rounded-lg border ${
                  activeIndex === index ? "bg-blue-100 shadow-lg" : "bg-white"
                } flex flex-col justify-center items-center space-y-2 cursor-pointer`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)} // Optional: Reset when mouse leaves
              >
                <img src={icon.icon} alt={icon.title} className="w-16 h-16" />
                <p
                  className={`font-bold text-center ${
                    activeIndex === index ? "text-blue-600" : "text-gray-800"
                  }`}
                >
                  {icon.title}
                </p>
              </div>
            ))}
          </div>

          {/* Second row with 2 icons */}
          <div className="grid grid-cols-2 gap-4">
            {icons.slice(3).map((icon, index) => (
              <div
                key={icon.id}
                className={`p-4 rounded-lg border ${
                  activeIndex === index + 3
                    ? "bg-blue-100 shadow-lg"
                    : "bg-white"
                } flex flex-col justify-center items-center space-y-2 cursor-pointer`}
                onMouseEnter={() => setActiveIndex(index + 3)}
                onMouseLeave={() => setActiveIndex(null)} // Optional
              >
                <img src={icon.icon} alt={icon.title} className="w-16 h-16" />
                <p
                  className={`font-bold text-center ${
                    activeIndex === index + 3
                      ? "text-blue-600"
                      : "text-gray-800"
                  }`}
                >
                  {icon.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">
            {activeIndex !== null ? icons[activeIndex].title : ""}
          </h2>
          <p className="text-lg text-white mb-8">
            {activeIndex !== null ? icons[activeIndex].text : "Default Text"}
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Download Solution Details
          </button>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 p-10 flex flex-col items-center justify-center">
        <div className="text-center mb-8">
          <h3 className="text-lg text-blue-600 font-semibold">
            TRANSFORMATIVE BUSINESS MODEL
          </h3>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">
            A ₹0 Capex Solution
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            The water industry is accustomed to siloed purchases,
            vendor-oriented decision making, and point solutions that require
            high capital investments and labor-intensive maintenance for
            specialized equipment. In conjunction with the rapid digital
            transformation occurring in the water industry, the AQUASENSE
            business model is changing the way water operations are funded,
            scaled, and implemented around the world. The AQUASENSE solution is
            a $0 CAPEX solution. AQUASENSE only charges an annual service fee
            and it includes:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Left section */}
          <div>
            <ul className="list-none text-left text-gray-800 space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span> 24/7
                Remote Water Monitoring
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span> No
                Additional Cost for Consumables
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span> Testing
                Across Multiple Parameters
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span> Fully
                Configurable
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-2">✓</span>{" "}
                Real-Time Analytics & Alerts
              </li>
            </ul>
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              AQUASENSE Overview
            </button>
          </div>

          {/* Right section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                {/* Installation & Maintenance Icon */}
                <span className="text-blue-600 text-2xl">🔧</span>
              </div>
              <p className="font-semibold text-gray-800">
                Installation & Maintenance
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                {/* Warranty & Support Icon */}
                <span className="text-blue-600 text-2xl">💸</span>
              </div>
              <p className="font-semibold text-gray-800">Warranty & Support</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                {/* Unlimited Testing Frequency Icon */}
                <span className="text-blue-600 text-2xl">⚙️</span>
              </div>
              <p className="font-semibold text-gray-800">
                Unlimited Testing Frequency
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                {/* No Cleaning or Calibration Icon */}
                <span className="text-blue-600 text-2xl">🎯</span>
              </div>
              <p className="font-semibold text-gray-800">
                No Cleaning or Calibration
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* {Slider} */}
      <div className="bg-gray-100 py-12">
        <h2 className="text-center text-3xl text-black font-bold mb-8">
          OUR ESTEEMED CLIENTS
        </h2>

        <div className="slider-container">
          {/* Top Row - Sliding from right */}
          <div className="slider-row top">
            <div className="slider-content">
              {/* Duplicating the top row images for loop */}
              {[...topImages, ...topImages].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Client ${index}`}
                  className="h-16 mx-8"
                />
              ))}
            </div>
          </div>

          <h3 className="text-center text-3xl text-black font-bold  mt-6">
            Your Water Management solution will
            <p className="text-blue-500 ">
              integrate with anything, including:
            </p>
          </h3>
          {/* Bottom Row - Sliding from left */}
          <div className="slider-row bottom mt-8">
            <div className="slider-content">
              {/* Duplicating the bottom row images for loop */}
              {[...bottomImages, ...bottomImages].map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Client ${index}`}
                  className="h-16 mx-8"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* {footer} */}

      <footer className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-8">
        <div className="container mx-auto px-4 flex flex-wrap justify-between">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0 flex ">
            {/* Image on the left */}
            <img src={logoImg} alt="AQUA Logo" className="h-16 mr-4 " />

            {/* Text on the right */}
            <div className="text-left">
              <h5 className="font-bold">Aquasense</h5>
              <p>THE WATER IOT COMPANY</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold mb-2">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  About AQUASENSE
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Resources
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h5 className="font-bold mb-2">Connect With Us</h5>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:underline flex items-center"
                >
                  <FaTwitter className="mr-2" /> Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="hover:underline flex items-center"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  className="hover:underline flex items-center"
                >
                  <FaFacebook className="mr-2" /> Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  className="hover:underline flex items-center"
                >
                  <FaYoutube className="mr-2" /> YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/4">
            <h5 className="font-bold mb-2">Contact Info</h5>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1" />
                <div>
                  Regd. Office: - Unit 501A, 5th Floor, Salcon Ras Vilas,
                  District Center, Saket
                  <br />
                  New Delhi, 110027
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-2 mt-1" />
                <div>
                  Corporate Office: - G-120, 3rd Floor, Sector-63
                  <br />
                  Noida - 201301, Uttar Pradesh
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="mr-2 mt-1" />
                <a
                  href="mailto:info@aquasense.tech"
                  className="hover:underline"
                >
                  info@aquasense.tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8 text-sm">
          <p>Copyright © 2024 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainSection;
