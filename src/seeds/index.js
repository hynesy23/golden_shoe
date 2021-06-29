const sequelize = require('../config/connection');
const seedProducts = require('./productData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProducts();

  console.log('PRODUCTS SEEDED');

  process.exit(0);
};

seedAll();