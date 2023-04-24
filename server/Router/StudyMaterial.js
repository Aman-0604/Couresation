const express = require("express");

const StudyMaterialRouter = express.Router();
//For readign body content
const bodyParser = require('body-parser')
const sa = bodyParser.urlencoded({extended: false })
const conn = require('../Model/userModel');

async function setcontent(req, res) {
    a = req.body;
    console.log(a);
    //finding user to be verified 
    await conn.query(`select course_id,course_name,course_description from course where course_id = "${a.course_id}";`, async (err, res1) => {
        if (err) {
            console.log(err);
            res.status(500).json("Some error Occured,inconvenience cost is deeply regretted")
        }
        else if (!res1.length) {
            res.status(400).json("No such course exist")
        }

        else {
            // checking password 
            await conn.query(`select link_address from video_link where course_id = "${a.course_id}";`, async (err, res2) => {
                if (err) {
                    console.log(err);
                    res.status(500).json("Some error Occured,inconvenience cost is deeply regretted")
                }
                else if (!res2.length) {
                    res.json({course:res1[0]})
                }
                else {
                    console.log(res1[0],res2[0])
                    res.json({course:res1[0],links:res2});
                }
            })
        }
    })
}

StudyMaterialRouter.route("/")
    .post(sa, setcontent)
module.exports = StudyMaterialRouter;