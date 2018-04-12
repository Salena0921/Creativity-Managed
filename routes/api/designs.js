const router = require("express").Router();
const designsController = require("../../controllers/designsController");

// Matches with "/api/books"
router.route("/")
  .get(designsController.findAll)
  .post(designsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(designsController.findById)
  .put(designsController.update)
  .delete(designsController.remove);

module.exports = router;