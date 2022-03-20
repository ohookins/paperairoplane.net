import React from "react";
import Layout from "../components/Layout"
import oliver from "./oliver.jpg";
import angela from "./angela.jpg";

const AboutPage = () => (
  <Layout>
    <div className="flex flex-column">
      <h2>About the authors...</h2>
      <div>
        <img className="fl pa2 mw3 mw3-m mw-100-ns" src={oliver} />
        <p className="f6 f6-m f5-ns pl1">
          You can find Oliver on{" "}
          <a href="https://www.linkedin.com/in/oliverhookins/" className="b">
            {" "}
            LinkedIn{" "}
          </a>
          and{" "}
          <a href="https://twitter.com/OliverHookins" className="b">
            Twitter
          </a>.
        </p>
      </div>
      <div>
        <img className="fl pa2 mw3 mw3-m mw-100-ns" src={angela} />
        <p className="f6 f6-m f5-ns pl1">
          You can find Angela on{" "}
          <a
            href="https://www.facebook.com/angelacollinsyogaberlin/"
            className="b"
          >
            Facebook
          </a>,
          <a href="https://twitter.com/Yogawithangela" className="b">
            {" "}
            Twitter{" "}
          </a>
          and{" "}
          <a href="https://www.instagram.com/angelacollinsyoga/" className="b">
            Instagram
          </a>.
        </p>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
