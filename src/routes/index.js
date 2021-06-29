const { getAllShoes, getSingleShoe } = require("../controllers");

const router = require("express").Router();

router.get('/collections/:category', getAllShoes)
router.get('/products/:shoeId', getSingleShoe)

module.exports = router;

