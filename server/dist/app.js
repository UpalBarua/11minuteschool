"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var error_handler_1 = __importDefault(require("./middlewares/error-handler"));
// routes
var user_route_1 = __importDefault(require("./modules/user/user.route"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
// routes
app.use("/api/users", user_route_1.default);
app.all("*", function (_req, res) {
    res.status(404).json({
        success: false,
        message: "There is no such route",
    });
});
app.use(error_handler_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map