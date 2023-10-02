import express from "express";
const router = express.Router();
import {
  registerController,
  loginController,
  forgotPasswordController,
  verificationController,//me
} from "../controllers/authController.js";




//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || METHOD POST
router.post("/login", loginController);

//Forgot Password|| METHOD POST
router.post("/forgot-Password", forgotPasswordController);

//Email verification route
router.get("/verify/:token", verificationController); 
// router.get("/trigger-verification/:token", async (req, res) => {
//   try {
//     const { token } = req.params;
//     await verificationController(req, res); // Call the verificationController function
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({
//       success: false,
//       message: "Error triggering verification",
//       error,
//     });
//   }
// });

export default router;

