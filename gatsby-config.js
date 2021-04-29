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
        url: `https://${process.env.STEPZEN_ACCOUNT}.stepzen.net/${process.env.NEXT_PUBLIC_STEPZEN_FOLDER}/${process.env.NEXT_PUBLIC_STEPZEN_ENDPOINT}/__graphql`,
        headers: {
          Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        },
      },
    },
  ],
};