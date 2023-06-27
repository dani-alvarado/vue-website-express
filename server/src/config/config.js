module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || "product-store",
    user: process.env.DB_USER || "product-store",
    password: process.env.DB_PASS || "product-store",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: "./product-store.sqlite",
    },
  },
};
