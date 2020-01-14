"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// port is now available to the Node.js runtime
// as if it were an environment variable
/*
if (!process.env.SERVER_PORT) {
    process.exit(1);
  }
const port = process.env.SERVER_PORT;
*/
const port = "8080";
const app = express_1.default();
dotenv.config();
// Configure Express to use EJS
app.set("views", path_1.default.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
    // render the index template
    res.render("index");
});
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map