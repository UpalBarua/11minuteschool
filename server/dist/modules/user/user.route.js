"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = require("./user.controller");
var router = (0, express_1.Router)();
router.get("/:email", user_controller_1.getUserByEmail);
router.post("/register", user_controller_1.registerUser);
router.post("/login", user_controller_1.loginUser);
exports.default = router;
//# sourceMappingURL=user.route.js.map