// Extend Metro config to recognize .jfif image assets (served as static assets)
const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

// Ensure resolver exists and add jfif to asset extensions
defaultConfig.resolver = defaultConfig.resolver || {};
defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts || [];
if (!defaultConfig.resolver.assetExts.includes("jfif")) {
  defaultConfig.resolver.assetExts.push("jfif");
}

module.exports = defaultConfig;
