import Carousel from "./Carousel";
import golfing from "../Images/Golfing.jpg";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <div className="container mt-4">
        <div className="d-flex justify-content-center mb-3">
          <div className="me-5">
            <img
              style={{
                borderRadius: "100%",
                border: "1px solid #ccc",
                padding: "5px",
              }}
              src={golfing}
              width="250"
              height="320"
              alt="thumbImg"
            />
          </div>
          <div className="pt-5">
            <h3>Hi!</h3>
            <h2>Ishmael Khalil</h2>
            <p>
              Chief Administrative Officer, Delta State Job and Wealth Creation
              Bureau
            </p>
          </div>
        </div>

        <div className="row text-center">
          <div className="offset-2 col-8 flex justify-content-center">
            <h2>About Me</h2>
            <p>
              Ishmael is a gentleman, plays golf and deligent in the discharge
              of his duties in the Job and Wealth Creation Bureau of Delta
              State. It is clear that the Okowa led Administration has gone
              beyond expectation to make sure youths of Delta State are
              gainfully employed and Ishmael is proud to be among the drivers of
              this laudable mission.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
