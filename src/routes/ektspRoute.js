const ektspRoute = require("express").Router()
const ektspController = require("../controllers/ektspController")
const authMiddleware = require("../helpers/authMiddleware")

ektspRoute.post("/", authMiddleware.checkLogin, ektspController.createEKtsp)
ektspRoute.get("/", authMiddleware.checkLogin, ektspController.getKtspByUser)



module.exports = ektspRoute