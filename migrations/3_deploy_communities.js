const CommunitiesRegistry = artifacts.require("CommunitiesRegistry");
const NoGSNCommunitiesRegistry = artifacts.require("NoGSNCommunitiesRegistry");

module.exports = async function (deployer, network) {
  let communitiesRegistry;

  if (network.includes("NoGSN"))
    communitiesRegistry = await NoGSNCommunitiesRegistry.deployed();
  else communitiesRegistry = await CommunitiesRegistry.deployed();

  await Promise.all([
    communitiesRegistry.createCommunity(),
    communitiesRegistry.createCommunity(),
    communitiesRegistry.createCommunity(),
  ]);

  const [comm1, comm2, comm3] = await Promise.all([
    communitiesRegistry.communities(0),
    communitiesRegistry.communities(1),
    communitiesRegistry.communities(2),
  ]);

  console.log(comm1, comm2, comm3);
};
