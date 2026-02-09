import { motion } from "framer-motion";
import ExampleCarouselImage from "./Farming.png";
import Intro from "./download.jpeg";
import Soil from "./images.jpeg";
import crop from "./crops-growing-in-thailand.jpg";
import "./home.css";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

function Homes() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        <motion.img
          src={ExampleCarouselImage}
          alt="Farming"
          className="hero-img"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Soil Information Site 🌱
        </motion.h1>
      </div>

      {/* INTRO */}
      <motion.section
        className="section intro"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="content">
          <h1>Introduction</h1>
          <p>
            Matching crops with the right soil is essential for higher yield.
            Our platform connects soil characteristics with suitable crops in a
            simple, farmer-friendly way.
          </p>
        </div>
        <motion.img
          src={Intro}
          alt="Intro"
          className="section-img"
          whileHover={{ scale: 1.05 }}
        />
      </motion.section>

      {/* SOIL */}
      <motion.section
        className="section soil"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={Soil}
          alt="Soil"
          className="section-img"
          whileHover={{ scale: 1.05 }}
        />
        <div className="content">
          <h1>Soil Information</h1>
          <p>
            Learn about physical, chemical, and biological soil properties.
            Identify soil types easily and understand what works best for your
            land.
          </p>
        </div>
      </motion.section>

      {/* CROP */}
      <motion.section
        className="section crop"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="content">
          <h1>Crop Information</h1>
          <p>
            Get tailored crop recommendations based on soil type, climate, and
            conditions — maximizing productivity.
          </p>
        </div>
        <motion.img
          src={crop}
          alt="Crop"
          className="section-img"
          whileHover={{ scale: 1.05 }}
        />
      </motion.section>
    </>
  );
}

export default Homes;
