import { Router } from "express";
import { SignUpSchema } from "../schemas/SignUpSchema.js";
//import { SignInSchema } from "../schemas/SignInSchema.js";
import { validateMiddleware } from "../middlewares/validateMiddlewares.js";
import { signUp } from "../controllers/UsersController.js";

const usersRouter = Router();

usersRouter.post("/signup", validateMiddleware(SignUpSchema), signUp);
//usersRouter.post("/signin", validateMiddleware(SignInSchema), signIn);

export default usersRouter;
