const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');


module.exports = defineConfig({
  screenshotsFolder: './cypress/snapshots/actual',
  trashAssetsBeforeRuns: true,
  video: false,
  env: {
    failSilently: false,
    type: "actual",
    "ALWAYS_GENERATE_DIFF": true,
    "ALLOW_VISUAL_REGRESSION_TO_FAIL": false
  },
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
    setupNodeEvents(on, config) {
        getCompareSnapshotsPlugin(on, config);
    },
  },
});
