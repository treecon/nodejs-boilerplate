"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT;
const app = express_1.default();
app.use(helmet_1.default());
app.get('/', (req, res) => {
    res.send('<h1>Hey there!</h1>');
});
app.listen(PORT, () => console.log(`Running on ${PORT}`));
