//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const homeStartingContent = "Welcome to our blog—a vibrant hub where creativity meets insight, and every post is crafted with care to inspire, educate, and entertain. Dive into our collection of articles spanning a wide array of topics, from the latest trends in technology to deep dives into the human condition. Our homepage is designed to captivate your curiosity, offering a glimpse into the richness of our content. Whether you're a seasoned enthusiast or new to the fold, our blog promises a journey filled with discovery and engagement. Join us as we explore the world through words, images, and ideas, and let's embark on this adventure together.";

const aboutContent = " Welcome to our blog writing website We're thrilled to have you join us on this journey of exploration, learning, and growth in the vast world of digital content creation. Our mission is to empower writers, bloggers, and content creators of all levels with the knowledge, tools, and inspiration needed to craft engaging, impactful, and SEO-friendly content that resonates with audiences worldwide. At the heart of our platform lies a commitment to providing comprehensive guides, tips, and resources that demystify the art and science of blog writing. Whether you're a seasoned professional looking to refine your skills or a beginner eager to dip your toes into the world of blogging, our content is designed to cater to your needs. Our 'About Me' page serves as a testament to our dedication to transparency, authenticity, and community-building. It's not just about us, it's about how we can help you navigate the challenges and celebrate the triumphs of blog writing. We believe in fostering a supportive environment where everyone, regardless of their background or expertise, can find valuable insights and encouragement to pursue their passion for writing. From understanding your audience and crafting compelling narratives to mastering SEO strategies and leveraging the power of visual storytelling, our content covers a wide spectrum of topics crucial to successful blogging. We're passionate about sharing real-world experiences, practical tips, and innovative approaches to blogging, aiming to equip you with the knowledge and confidence to excel in your writing endeavors. Join us on this exciting journey, and let's explore the endless possibilities of blog writing together. Whether you're looking to start a blog, grow your existing one, or simply enhance your writing skills, we're here to support you every step of the way. Dive into our resources, engage with our community, and let's create something truly remarkable together. Thank you for choosing to be part of our community. We can't wait to see where this journey takes us.";

const contactContent = "We invite you to connect with us through our Contact Us page, designed with simplicity and efficiency in mind. Here, you'll find a clean, user-friendly interface that prioritizes your ability to easily reach out to us. Whether you have questions, comments, or wish to collaborate, our contact form is ready to receive your message. Directly below, you'll find our email address and phone number for immediate assistance. Additionally, follow us on our social media platforms to stay updated with our latest news and opportunities. Your feedback is invaluable to us, and we're committed to responding promptly to ensure your satisfaction. Thank you for choosing to connect with us.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/blogDB", { useNewUrlParser: true, useUnifiedTopology: true });


const postSchema = {
  title: String,
  content: String
};

const Post = mongoose.model("Post", postSchema);

app.get("/", async function (req, res) {
  try {
    const posts = await Post.find({}).exec();
    res.render("home", {
      startingContent: homeStartingContent,
      posts: posts
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    // res.render("error", { message: "Error fetching posts. Please try again later." });
  }
});


app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", async function (req, res) {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });

  try {
    await post.save();
    res.redirect("/");
  } catch (error) {
    console.error("Error saving post:", error);
    // Handle error appropriately
  }
});


app.get("/posts/:postId", async function (req, res) {
  const requestedPostId = req.params.postId;

  try {
    const post = await Post.findOne({ _id: requestedPostId }).exec();
    res.render("post", {
      title: post.title,
      content: post.content
    });
  } catch (error) {
    console.error("Error fetching post:", error);
    // Handle error appropriately
  }
});


app.get("/about", function (req, res) {
  res.render("about", { aboutContent: aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent: contactContent });
});


app.listen(3000, function () {
  console.log("Server started on port https://localhost:3000");
});
