const express = require("express");
var bcrypt = require("bcryptjs");

const app = express();
const cors = require("cors");
app.use(cors());
const { default: mongoose } = require("mongoose");
const User = require("./usermodel/user");

app.use(express.json());


mongoose
  .connect(`mongodb://localhost:27017/fullStackSocailmedia`)
  .then(() => {
    console.log(`hey database is connected`);
  })
  .catch((res) => {
    console.log(`oh we have an error`, res);
  });

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body; // Extract credentials from request body

    // Validation (optional but recommended)
    if (!username || !password) {
      return res.status(400).json({ message: "Missing username or password" });
    }

    const userFind = await User.findOne({ username: username });

    if (userFind?._id != null) {
      console.log(`hey we have find the user`, userFind?.username);
      return res.status(100).json({
        message: "User is find ",
      });
    }
   
    const data = await User.create({ password:password, username:username });
    if (data?._id !== null) {
      return res.status(200).json({
        message: "we have created user successfully",
      });
    }
  } catch (e) {
    console.log(`we are having some error`, e);
  }
});

app.listen(4000, () => {
  console.log("Server listening on port 4112");
});
