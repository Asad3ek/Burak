import express from "express";
import memberController from "./controllers/member.controller";
import uploader from "./libs/utils/uploader"
import productController from "./controllers/product.controller";
const router = express.Router();


/** Members API **/
router.get("/member/restaurant", memberController.getRestaurant);
router.post("/member/signup", memberController.signUp);
router.post("/member/login", memberController.login);
router.post(
    "/member/logout",
    memberController.verifyAuth,
    memberController.logout
);
router.get(
    "/member/detail",
    memberController.verifyAuth,
    memberController.getMemberDetail
);

router.post(
    "/member/update",
    memberController.verifyAuth,
    uploader("members").single("memberImage"),
    memberController.updateMember
);

router.get("/member/top-users", memberController.getTopUsers);

/** Products API **/
router.get("/product/all", productController.getProducts);


/** Orders API **/
export default router;