const express = require("express");

const router = express.Router();//express ke andar router hota hai

//For readign body content
const bodyParser = require('body-parser')
// const sa = bodyParser.urlencoded({ extended: false })
const conn = require('../Model/userModel');

router.get("/:subject", (req, res) => {

    conn.query(`select course_id,course_name,course_description from course where course_id = "${req.params.subject}";`, (err, res1) => {
        if (err) {
            console.log(err);
            res.status(500).json("Some error Occured,inconvenience cost is deeply regretted")
        }
        else if (!res1.length) {
            res.status(400).json("No such course exist")
        }

        else {
            // checking password 
            conn.query(`select link_address from video_link where course_id = "${req.params.subject}";`, (err, res2) => {
                if (err) {
                    console.log(err);
                    res.status(500).json("Some error Occured,inconvenience cost is deeply regretted")
                }
                else if (!res2.length) {
                    res.json({ course: res1[0] })
                }
                else {
                    // console.log(res1[0],res2[0])
                    res.json({ course: res1[0], links: res2 });
                }
            })
        }
    })
});
module.exports = router;

// StudyMaterialRouter.route("/")
//     .get(sa, setcontent)
// module.exports = StudyMaterialRouter;