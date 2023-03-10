import { Router } from "express";
import authenticationRouter from "./authenticationRoute.js";
// import { postsRoute } from "./postsRoute.js";
// import { hashtagRoute } from "./hashtagRoute.js";
import usersRouter from "./usersRoute.js";

const router = Router();

router.use(usersRouter);
router.use(authenticationRouter);

// router.use(postsRoute);
// router.use(hashtagRoute);

export default router;
