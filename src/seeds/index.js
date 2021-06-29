const sequelize = require('../config/connection');
const seedProducts = require('./productData');
// const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedProducts();

  console.log('PRODUCTS SEEDED');

//   await seedPaintings();

  process.exit(0);
};

seedAll();