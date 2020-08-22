const router = require("express").Router();
const employeeRoutes = require("./employees");
const fileRoutes = require("./files")

// article routes
router.use("/saved", employeeRoutes);
router.use("/file", fileRoutes);


module.exports = router;