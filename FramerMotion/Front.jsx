import React, { useRef } from "react";
import Card from "./Card";

function Front() {
  const ref = useRef(null);
  const data = [
    {
      description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
      size: "0.8 mb",
      isClosable: true,
      status: { isVisible: true, label: "Downloaded", color: "lightgreen" },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
      size: "0.7 mb",
      isClosable: true,
      status: { isVisible: true, label: "DownloadNow", color: "green" },
    },
    {
      description: "Lorem ipsum dolor sit amet consectetur adipiscing.",
      size: "0.6 mb",
      isClosable: false,
      status: { isVisible: false, label: "Download", color: "green" },
    },
  ];

  return (
    <div className="card-container" ref={ref}>
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Front;
