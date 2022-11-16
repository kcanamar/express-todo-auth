// ================================
// Enviorment Variables
// ================================
require("dotenv").config()
// ================================
// Import Dependencies
// ================================
const express = require("express")
const methodOverride = require("method-override")
const cors = require("cors")
const morgan = require("morgan")
const MainCtrl = require("./controllers/MainCtrl.js")
const APICtrl = require("./controllers/APICtrl.js")
const cowsay = require("cowsay")

// ================================
// Global Variables & Class Based Controller Instantiation
// ================================
const PORT = process.env.PORT || 4200
const mainCtrl = new MainCtrl()
const apiCtrl = new APICtrl()

// ================================
// Create Application Object
// ================================
const app = express()

// ================================
// Routers
// ================================
const MainRoutes = express.Router()
const ApiRoutes = express.Router()

// ================================
// Middleware
// ================================
// Global Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride("_method"))
app.use("/static", express.static("static"))
app.use(morgan("dev"))
app.use("/", MainRoutes)
app.use("/api", ApiRoutes)
// Router Specific Middleware
ApiRoutes.use(cors())

// ================================
// Routes that Render EJS
// ================================
MainRoutes.get("/", mainCtrl.example)

// ================================
// API Routes the Return JSON
// ================================
ApiRoutes.get("/", apiCtrl.example)

// ================================
// Server Listener
// ================================
app.listen(PORT, () => console.log(cowsay.say({
    text: `grazing on PORT:${PORT}`,
    e: "WA",
    t: 'u'
})))