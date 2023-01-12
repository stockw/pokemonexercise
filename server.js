const express = require('express');
const app = express();

app.use(express.static('public'))

app.get("/get_data", (req,res) => {
    let classes = [
        {name: "cohort 48"}
        {name: "cohort 49"}
    ]
})





 app.listen(5000, () => {
    console.log("listening on port 5000");
 });