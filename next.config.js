// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      "mongodb+srv://eCommerce:Store@reactreserve-aaq7z.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "<insert-jwt-secret>",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/ddgeddjzm/image.upload",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
