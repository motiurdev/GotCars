import React from "react";
import "./CountDown.css";

const CountDown = () => {
  return (
    <div className="text-center py-5 countdown-bg my-5">
      <div className="container">
        <div class="row">
          <div class="col-md-4">
            <div className="row">
              <div className="col-md-4">
                <i class="fas fa-car fa-4x"></i>
              </div>
              <div className="col-md-8">
                <h3 className="text-start">5000+</h3>
                <p className="text-start">NEW CARS IN STOCK</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="row">
              <div className="col-md-4">
                <i class="fas fa-truck-moving fa-4x"></i>
              </div>
              <div className="col-md-8">
                <h3>5000+</h3>
                <p>NEW CARS IN STOCK</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div className="row">
              <div className="col-md-4">
                <i class="fas fa-cogs fa-4x"></i>
              </div>
              <div className="col-md-8">
                <h3>5000+</h3>
                <p>NEW CARS IN STOCK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
