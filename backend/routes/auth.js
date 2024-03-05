const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post(
  "/createuser",
  [
    body("mailId", "Invalid Mail").isEmail(),
    body("password", "Invalid Password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send("Invalid input. Please check your data.");
    }

    try {
      let user = await User.findOne({ mailId: req.body.mailId });
      if (user) {
        return res
          .status(400)
          .send("Error! User with this mail already exists.");
      }
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        mailId: req.body.mailId,
        password: hashedPassword,
        ...(req.body.contact != null && { contact: req.body.contact }),
        ...(req.body.age != null && { age: req.body.age }),
        ...(req.body.gender != null && { gender: req.body.gender }),
        ...(req.body.category != null && { category: req.body.category }),
      });
      console.log("User Successfully created !");
      res.send("User Credentials STored in DB !");
    } catch (error) {
      console.log(error.message);
      return res.status(400).send("Internal Server Error");
    }
  }
);

router.post("/signin", [
  body("mailId", "Invalid Mail").isEmail(),
    body("password", "Invalid Password").isLength({ min: 6 }), async (req, res) => {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res
                .status(400).send("Error ! Mail or Password entered is incorrect !")
        }

        const mail = req.body.mailId;
        const pass = req.body.password;
        try {
            
            let user = await User.findOne({ mailId : mail });
            if (!user) {
                return res.status(404).send("No user with this mail found! Signup Instead");
            }
            
            const validPassowrd = await bcrypt.compare(pass, user.password);
            if (!validPassowrd) {
                return res.status(401).send("Incorrect Password! Try Again");
            }
            
        console.log("User Logged into the system !");
        res.send("User logged into the system !")
        
        }
        catch (error) {
            console.log(error.message);
        }
        
    }
]);

module.exports = router;