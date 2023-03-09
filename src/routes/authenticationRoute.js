import { Router } from "express"

export const authenticationRoute = Router();

router.post('/sign-in', ...)
router.post('/sign-up', ...)
router.get('/user/:userId', ...)