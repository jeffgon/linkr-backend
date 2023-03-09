import { Router } from "express";

export const hashtagRoute = Router();

router.get("/hashtags");
router.get("/trending", ...);
router.post("/hashtag");
router.post("/hashtagUse/:hashtagId/:postId");
router.delete("/hashtag/:hashtagId");