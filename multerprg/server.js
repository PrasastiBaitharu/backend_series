const express = require("express");
const multer = require("multer");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const newFileName = Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

const upload = multer({ storage: storage });

app.post("/signup", upload.single("profileimg"), (req, res) => {
  res.send({
    success: "true",
    data: req.body,
  });
});

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server is running at the port ${PORT}`);
});
