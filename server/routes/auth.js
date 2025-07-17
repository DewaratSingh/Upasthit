import express from "express";
import jwt from "jsonwebtoken";
import pool from "../db/database.js";
import cookieParser from "cookie-parser";
const router = express.Router();

router.post("/signIn", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const result = await pool.query("SELECT * FROM teacher WHERE email = $1", [
      email,
    ]);

    const user = result.rows[0];
    console.log("User found:", user);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    if (password !== user.password) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
      secure: false,
      path: "/",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ success: true, message: "Login successful"});
  } catch (error) {
    console.error("SignIn Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
});

// router.get("/signOut", async (req, res) => {
//   res.cookie("token", "", {
//     httpOnly: true,
//     secure: false,
//     sameSite: "lax",
//     maxAge: 0,
//   });

//   return res.status(200).json({
//     success: true,
//     message: "Logout successful",
//   });
// });

// router.get("/isvalidUser", async (req, res) => {
//   try {
//     const token = req.cookies.token;

//     if (!token) {
//       return res.status(401).json({ success: false, message: "Token missing" });
//     }
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     const user = await User.findByIdAndUpdate(decoded.id,{$set:{online:true}});

//     const newtoken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     res.cookie("token", newtoken, {
//       httpOnly: true,
//       sameSite: "Lax",
//       secure: false,
//       path: "/",
//       maxAge: 24 * 60 * 60 * 1000,
//     });

//     const userData = {
//       name: user.name,
//       contact: user.contact,
//       email: user.email,
//       image: user.image,
//       id:user._id,
//     };

//     let friends = [];

//     for (let i = 0; i < user.friends.length; i++) {
//       const friendsArr = user.friends[i];
//       const use = await User.findById(friendsArr.friendId);
//       if (use) {
//         friends.push({
//           name: use.name,
//           contact: use.contact,
//           email: use.email,
//           image: use.image,
//           friendId: use._id,
//           roomId: friendsArr.roomId,
//           online:use.online,
//           noifiy: friendsArr.noifiy,
//         });
//       }
//     }

//     return res.json({
//       success: true,
//       user: userData,
//       contactList: friends,
//       token: newtoken,
//     });
//   } catch (error) {
//     console.error("isvalidUser Error:", error);
//     return res.status(500).json({ success: false, message: "Internal error" });
//   }
// });

export default router;
