"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// INFO import packages
const express_1 = __importDefault(require("express"));
// INFO import routes
const todo_routes_1 = __importDefault(require("./routes/todo.routes"));
const app = express_1.default();
// INFO register middlewares
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/todos', todo_routes_1.default);
app.listen(3000);
