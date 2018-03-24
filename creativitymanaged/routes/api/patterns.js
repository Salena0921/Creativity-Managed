const router = require("express").Router();
const patternsController = require("../../controllers/patternsControllers");

// Matches with "/api/books"
router.route("/")
  .get(patternsController.findAll)
  .post(patternsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(patternsController.findById)
  .put(patternsController.update)
  .delete(patternsController.remove);

module.exports = router;