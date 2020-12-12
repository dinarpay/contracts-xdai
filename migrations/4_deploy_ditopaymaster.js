const DitoWhitelistPaymaster = artifacts.require("DitoWhitelistPaymaster");
const IRelayHub = artifacts.require("IRelayHub");

const MATIC_RELAY_HUB = "0x9dA734b528FF72D4D0660403Bd85870f995dD7fC";
const MATIC_TRUSTED_FORWARDER = "0x7B65a57Bc5D46795006e8312DD7994eE1ECE21C6";

module.exports = async function (deployer, network) {
  if (network === "mumbai") {
    const paymaster = await DitoWhitelistPaymaster.new();

    await Promise.all([
      paymaster.setRelayHub(MATIC_RELAY_HUB),
      paymaster.setTrustedForwarder(MATIC_TRUSTED_FORWARDER),
    ]);

    const depositAmount = 0.01e18;
    const relayHub = await IRelayHub.at(MATIC_RELAY_HUB);
    await relayHub.depositFor(paymaster.address, {
      value: depositAmount,
    });
  }
};
