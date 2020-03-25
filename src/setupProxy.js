const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = app => {
  app.use(
    "/facebook/wedding/albums",
    createProxyMiddleware({
      target: "https://denmercsphotography-be.herokuapp.com/",
      changeOrigin: true
    })
  );

  app.use(
    "/facebook/engagement/albums",
    createProxyMiddleware({
      target: "https://denmercsphotography-be.herokuapp.com/",
      changeOrigin: true
    })
  );
};
