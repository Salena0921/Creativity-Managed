const router = require("express").Router();
const fabricsController = require("../../controllers/fabricsController");

// Matches with "/api/books"
router.route("/")
  .get(fabricsController.findAll)
  .post(fabricsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(fabricsController.findById)
  .put(fabricsController.update)
  .delete(fabricsController.remove);

module.exports = router;