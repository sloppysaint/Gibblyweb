const express = require("express");
const usermodel = require("./model/user");
const userModel = require("./model/users");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const updatedata = require("./functions/updatedata");
const createData = require("./functions/createdata");
var fs = require("fs");
PDFDocument = require("pdfkit");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // so that we can get cookies
  })
);

app.use(cookieParser());

app.post("/add/manually", async (req, res) => {
  try {
    const { specificusername, title, questions } = req.body;
    // to check if data exists or not
    const existingData = await usermodel.findOne({
      specificusername,
      title,
    });

    if (!existingData) {
      result = await createData(specificusername, title, questions);
    } else {
      result = await updatedata(specificusername, title, questions);
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/teacherquestion", async (req, res) => {
  try {
    const { username, title } = req.cookies;

    const userData = await usermodel.findOne({
      specificusername: username,
      title,
    });

    res.json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/pdf", async (req, res) => {
  try {
    const { username, title } = req.cookies;

    const { questions } = await usermodel.findOne({
      specificusername: username,
      title,
    });
    console.log(questions);

    doc = new PDFDocument();

    doc.pipe(fs.createWriteStream("../Gibbly/public/output.pdf")); // would have to change the path

    doc.fontSize(35).text(title, {
      align: "center",
      underline: true,
    });

    let yPosition = 150;

    questions.forEach(({ question, mcq }) => {
      doc.fontSize(25).text(question, 50, yPosition);
      yPosition += 30;

      mcq.forEach((ele, index) => {
        doc.fontSize(15).text(`${index + 1}. ${ele}`, 70, yPosition);
        yPosition += 20;
      });

      yPosition += 20;
    });

    doc.end();
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post("/register", async (req, res) => {
  try {
    // check if user already exists
    const userExists = await userModel.findOne({ email: req.body.email });
    if (userExists) {
      return res
        .status(200)
        .send({ message: "User already exists", success: false });
    }

    // hash password
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // req.body.password = hashedPassword;

    // create new user
    const newUser = new userModel(req.body);
    await newUser.save();
    res.send({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});

// user login

app.post("/login", async (req, res) => {
  try {
    // check if user exists
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) {
      return res
        .status(200)
        .send({ message: "User does not exist", success: false });
    }

    // check password
    const validPassword = req.body.password;

    if (!validPassword) {
      return res
        .status(200)
        .send({ message: "Invalid password", success: false });
    }

    res.send({
      message: "User logged in successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
      data: error,
      success: false,
    });
  }
});
app.listen(3000, () => {
  console.log("server is connected");
});
