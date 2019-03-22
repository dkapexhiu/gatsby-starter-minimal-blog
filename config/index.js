module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"

  siteTitle: 'Daniel Kapexhiu Blog', // Navigation and Site Title
  siteTitleAlt: 'Daniel Kapexhiu Minimal Blog', // Alternative Site title for SEO
  siteTitleManifest: 'Daniel Blog',
  siteUrl: 'https://blog.danielkapexhiu.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteHeadline: 'Writing and publishing about technology', // Headline for schema.org JSONLD
  siteBanner: '/social/blog-cover.jpg', // Your image for og:image tag. You can find it in the /static folder
  favicon: 'src/favicon.png', // Your image for favicons. You can find it in the /src folder
  siteDescription: 'Daniel Kapexhiu Blog. Articles about latest technologies', // Your site description
  author: 'Daniel', // Author for schemaORGJSONLD
  siteLogo: '/social/logo.png', // Image for schemaORGJSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@danielkapexhiu', // Twitter Username - Optional
  ogSiteName: 'danielkapexhiublog', // Facebook Site Name - Optional
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-136595265-1',

  // Manifest and Progress color
  // See: https://developers.google.com/web/fundamentals/web-app-manifest/
  themeColor: '#00bfff',
  backgroundColor: '#00bfff',
}
