//jshint esversion:6
const express = require("express");
const app = express();

app.use(express.urlencoded());

app.set('view engine', 'ejs');

let toDo = [];
app.get("/", (req, res) => {
    let today = new Date();
    let options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };
    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {thisDay: day, listItem: toDo});
})

app.post("/", (req, res) => {
    let todo = req.body.todoAdd;
    toDo.push(todo);
    res.redirect("/")
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
