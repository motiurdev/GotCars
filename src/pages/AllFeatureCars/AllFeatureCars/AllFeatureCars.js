import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import AllFeatureCar from "../AllFeatureCar/AllFeatureCar";

const AllFeatureCars = () => {
  const [allFeatureCars, setAllFeatureCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // load all featureCars data
  useEffect(() => {
    setIsLoading(true);
    fetch("https://evening-retreat-05338.herokuapp.com/featureCars")
      .then((res) => res.json())
      .then((data) => setAllFeatureCars(data))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="py-5">
      <Container>
        <h2>
          Latest Premium <span className="sub-title">Cars</span>
        </h2>
        {isLoading ? (
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {allFeatureCars.map((allFeatureCar) => (
              <AllFeatureCar
                key={allFeatureCar._id}
                allFeatureCar={allFeatureCar}
              ></AllFeatureCar>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default AllFeatureCars;
