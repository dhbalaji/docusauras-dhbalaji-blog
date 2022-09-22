module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
  "plugins": [
    ["prismjs", {
      "languages": ["javascript", "css", "markup"],
      "plugins": ["line-numbers"],
      "theme": "okaidia",
      "css": true
    }]
  ]
};
