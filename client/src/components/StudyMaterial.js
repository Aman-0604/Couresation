import React, { useState, useEffect } from "react";
import "../styles/studymaterial.css";

const propTypes = {};
const defaultProps = { Title: "DSA" };

const StudyMaterial = (props) => {
    const initial =[];
    const [content, setContent] = useState(initial);
    console.log("before");
  const fetchContent=async()=>{
    console.log("entered the func")
    console.log("props has been taken",props.Title);
      const response = await fetch("http://localhost:8000/studyMaterial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ course_id: props.Title }),
      });
      const data = await response.json();
      setContent(data);
  }
  
  useEffect(() => {
    console.log("under use effect")
    fetchContent();
  }, [])

  return (
    <>
      <div className="text-muted row container my-5 m-auto">
        <div className="col-md-9">
          <h1 className="d-block text-center mb-4">
            {content.course.course_id} Study Material
          </h1>
          <span
            className="text-decoration-underline"
            style={{ fontWeight: "bolder" }}
          >
            About {content.course.course_name}
          </span>
          <div className="my-4">
            <p>{content.course.course_description}</p>
          </div>

          <span
            className="text-decoration-underline"
            style={{ fontWeight: "bolder" }}
          >
            Topic List
          </span>
          <div className="d-flex justify-content-start flex-wrap my-4">
            <div className="card goals text-muted ms-3 mb-3 d-flex flex-row justify-content-center align-items-center">
              <div
                className="ms-3 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid black",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "cyan",
                }}
              >
                <div>
                  <h3>C</h3>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card goals text-muted ms-3 mb-3  d-flex flex-row justify-content-center align-items-center">
              <div
                className="ms-3 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid black",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "cyan",
                }}
              >
                <div>
                  <h3>C</h3>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card goals text-muted ms-3 mb-3  d-flex flex-row justify-content-center align-items-center">
              <div
                className="ms-3 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid black",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "cyan",
                }}
              >
                <div>
                  <h3>C</h3>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card goals text-muted ms-3 mb-3  d-flex flex-row justify-content-center align-items-center">
              <div
                className="ms-3 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid black",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "cyan",
                }}
              >
                <div>
                  <h3>C</h3>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card goals text-muted ms-3 mb-3  d-flex flex-row justify-content-center align-items-center">
              <div
                className="ms-3 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid black",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "cyan",
                }}
              >
                <div>
                  <h3>C</h3>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card goals text-muted ms-3 mb-3  d-flex flex-row justify-content-center align-items-center">
              <div
                className="ms-3 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid black",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "cyan",
                }}
              >
                <div>
                  <h3>C</h3>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card goals text-muted ms-3 mb-3  d-flex flex-row justify-content-center align-items-center">
              <div
                className="ms-3 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid black",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "cyan",
                }}
              >
                <div>
                  <h3>C</h3>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card goals text-muted ms-3 mb-3  d-flex flex-row justify-content-center align-items-center">
              <div
                className="ms-3 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid black",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "cyan",
                }}
              >
                <div>
                  <h3>C</h3>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
            <div className="card goals text-muted ms-3 mb-3  d-flex flex-row justify-content-center align-items-center">
              <div
                className="ms-3 d-flex justify-content-center align-items-center"
                style={{
                  border: "1px solid black",
                  borderRadius: "50%",
                  width: "50px",
                  height: "50px",
                  backgroundColor: "cyan",
                }}
              >
                <div>
                  <h3>C</h3>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 border border-5 ">
          <h3 className="text-center my-4">Related Links</h3>
          <p>
            We are temporarily pasting the related YouTube Playlists links here.
          </p>
          <p>{content.links[0].link_address}</p>
          <p>{content.links[1].link_address}</p>
          <p>{content.links[2].link_address}</p>
          <p>{content.links[3].link_address}</p>
          <p>{content.links[4].link_address}</p>
        </div>
      </div>
    </>
  );
};

StudyMaterial.propTypes = propTypes;
StudyMaterial.defaultProps = defaultProps;
export default StudyMaterial;
