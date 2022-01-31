const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

// add prefix of `/pizzax` to routes create in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);

module.exports = router;