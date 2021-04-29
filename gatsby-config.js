require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "StepZen",
        fieldName: "stepzen",
        url: `https://hollister.stepzen.net/api/telling-guppy/__graphql`,
        headers: {
          Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        },
      },
    },
  ],
};
