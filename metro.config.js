const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

// Get the default Expo Metro configuration
const config = getDefaultConfig(__dirname);

// Add SVG support
const { transformer, resolver } = config;
config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
};
config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...resolver.sourceExts, 'svg'],
};

// Apply NativeWind configuration
module.exports = withNativeWind(config, { input: './global.css' });