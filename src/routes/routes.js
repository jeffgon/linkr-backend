import { Router } from "express";
import {authenticationRoute} from "./authenticationRoute.js"
import { postsRoute } from "./postsRoute.js";
import { hashtagRoute } from "./hashtagRoute.js";

const router = Router();

router.use(authenticationRoute);
router.use(postsRoute);
router.use(hashtagRoute);

export default router;