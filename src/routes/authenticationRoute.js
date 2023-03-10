// import { Router } from "express";

// const router = Router();

// router.post('/sign-in', () => {});
// router.post('/sign-up', () => {});
// router.get('/user/:userId', () => {});

// export default router;

import { Router } from "express";
import { SignInSchema } from "../schemas/SignInSchema.js";
import { validateMiddleware } from "../middlewares/validateMiddlewares.js";
import { signIn } from "../controllers/UsersController.js";

const authenticationRouter = Router();

authenticationRouter.post("/", validateMiddleware(SignInSchema), signIn);

export default authenticationRouter;
