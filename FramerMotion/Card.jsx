import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu"; 
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div drag dragConstraints={reference} className="card">
      <FaFileAlt className="file-icon" />
      <p className="card-text">{data.description}</p>

      <div className="footer">
        <span className="file-size">{data.size}</span>
        {data.isClosable ? <IoClose /> : <LuDownload className="download-icon" />}
      </div>

      {data.status.isVisible ? (
        <div className="download-section" style={{ backgroundColor: data.status.color }}>
          {data.status.label}
        </div>
      ) : null}
    </motion.div>
  );
}

export default Card;
