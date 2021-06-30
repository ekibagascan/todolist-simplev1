//jshint esversion:6
const express = require("express");
const app = express();

app.use(express.urlencoded());

app.set('view engine', 'ejs');

const toDo = [];
app.get("/", (req, res) => {
    var today = new Date();
    var options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };
    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {thisDay: day, listItem: toDo});
})

app.post("/", (req, res) => {
    var todo = req.body.todoAdd;
    toDo.push(todo);
    res.redirect("/")
})

app.listen(3000, () => {
    console.log("Server started on port 3000");
});