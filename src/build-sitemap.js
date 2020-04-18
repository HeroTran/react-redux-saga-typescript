require("babel-register")({
  presets: ["es2015", "react"]
});
 
const router = require("./app/routesTest.tsx").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
      new Sitemap(router)
          .build("https://www.example.com")
          .save("src/dist/sitemap.xml")
    );
}

generateSitemap();