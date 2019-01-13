module.exports = () => ({
  presets: [
    "@babel/env",
    "@babel/preset-react"
  ],
  plugins:[
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }],
    "add-react-displayname",
    "@babel/plugin-proposal-object-rest-spread"
  ]
});
