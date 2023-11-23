var SampleToken = artifacts.require("SampleToken");

module.exports = function (deployer) {
  deployer.deploy(SampleToken, "MySampleToken", "MST", 18, 1000);
};
