const express = require('express');
const router = require("express").Router();
const employeesController = require("../../controllers/employeesController");

// Matches with "/api/saved"
router.route("/")
  .get(employeesController.findAll)
  .post(employeesController.create);

// Matches with "/api/saved/:id"
router
  .route("/:id")
  .get(employeesController.findById)
  .put(employeesController.update)
  .delete(employeesController.remove);

module.exports = router;
