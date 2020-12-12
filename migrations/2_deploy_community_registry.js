const CommunitiesRegistry = artifacts.require("CommunitiesRegistry");
const NoGSNCommunitiesRegistry = artifacts.require("NoGSNCommunitiesRegistry");

module.exports = function (deployer, network) {
  if (network.includes("NoGSN")) deployer.deploy(NoGSNCommunitiesRegistry);
  else deployer.deploy(CommunitiesRegistry);
};
