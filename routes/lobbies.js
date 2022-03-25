import { Router } from "express";
import * as lobbiesCtrl from "../controllers/lobbies.js";
import { decodeUserFromToken, checkAuth } from "../middleware/auth.js";

const router = Router();


/*---------- Public Routes ----------*/
router.get("/", lobbiesCtrl.index);

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken);

router.post("/", checkAuth, lobbiesCtrl.create);
router.delete("/", checkAuth, lobbiesCtrl.delete);

export { router };
