import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("./index.ejs", {blogs: blogArray});
})

app.get("/create", (req, res) => {
    res.render("./createblog.ejs");
})

app.post("/create", (req, res) => {
    blogArray.push(req.body.blog);
    res.redirect("/");
})

const blogArray = ["I love to blog! Mostly because I love to write and blogging is all about writing.", 
"Okay, this is my second blog. And guess what? It is still about writing. Mmm, I can't help but wonder if my third blog still involves writing",
"You guessed it! My third blog still involves writing. Jeeze! How long will this go on?", "I guess I'll have to just keep blogging to ding out"];

app.listen(port, () => {
    console.log(`I am listening on port ${port}`);
})