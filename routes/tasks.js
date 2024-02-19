const express = require("express");
const TaskController = require("../controllers/TaskController");
const router = express.Router();

router.post("/create", TaskController.create);
router.get("/", TaskController.getAll);
router.get("/id/:_id", TaskController.getById);
router.put("/markAsCompleted/:_id", TaskController.markAsCompleted);
router.put("/id/:_id", TaskController.updateTitle);
router.delete("/id/:_id", TaskController.delete)


module.exports = router;