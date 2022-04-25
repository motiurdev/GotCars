import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FeatureCar from "../FeatureCar/FeatureCar";
import "./FeatureCars.css";

const FeatureCars = () => {
  const [featureCars, setFeatureCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://evening-retreat-05338.herokuapp.com/featureCars")
      .then((res) => res.json())
      .then((data) => setFeatureCars(data.slice(0, 6)))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="py-5">
      <Container>
        <h2 className="pb-3">
          Latest Premium <span className="sub-title">Cars</span>
        </h2>
        {isLoading ? (
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {featureCars.map((featureCar) => (
              <FeatureCar
                key={featureCar._id}
                featureCar={featureCar}
              ></FeatureCar>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default FeatureCars;
