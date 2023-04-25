import React, { useContext, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "../styles/studymaterial.css";
import studyMaterialContext from '../context/studymaterial/studyMaterialContext';

export default function StudyMaterial() {

  let { subject } = useParams();
  const material = useContext(studyMaterialContext);
  const { content, fetchContent } = material;

  useEffect(() => {
    fetchContent(subject)
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <div className="text-muted row container my-5 m-auto">
        <div className="col-md-9">
          {console.log("content is: ", content)}
          <h1 className="d-block text-center mb-4">
            {content && content.course.course_id} Study Material
          </h1>
          <span
            className="text-decoration-underline"
            style={{ fontWeight: "bolder" }}
          >
            About {content && content.course.course_name}
          </span>
          <div className="my-4">
            <p>{content && content.course.course_description}</p>
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
        <div className="col-md-3 border border-5 overflow-scroll">
          <h3 className="text-center my-4">Related Links</h3>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={`content && content.links[0].link_address`} /*title={`content && content.links[0].link_title`}*/ allowfullscreen></iframe>
          </div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={`content && content.links[1].link_address`} /*title={`content && content.links[1].link_title`}*/ allowfullscreen></iframe>
          </div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={`content && content.links[2].link_address`} /*title={`content && content.links[2].link_title`}*/ allowfullscreen></iframe>
          </div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={`content && content.links[3].link_address`} /*title={`content && content.links[3].link_title`}*/ allowfullscreen></iframe>
          </div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={`content && content.links[4].link_address`} /*title={`content && content.links[4].link_title`}*/ allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

