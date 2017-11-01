const express = require('express');
const router = require("express").Router();
const filesController = require("../../controllers/filesController");

// Matches with "/api/saved"
router.route("/")
  .post(filesController.create);

// Matches with "/api/saved/:id"
router
  .route("/:id")

module.exports = router;
