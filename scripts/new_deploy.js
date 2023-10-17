const hre = require("hardhat");

const config = require("../config.json");

async function main() {
  // Get the Arbitrage contract factory
  const Arbitrage = await hre.ethers.getContractFactory("Arbitrage");

  // Deploy the Arbitrage contract
  const arbitrage = await Arbitrage.deploy(
    config.SUSHISWAP.V2_ROUTER_02_ADDRESS,
    config.UNISWAP.V2_ROUTER_02_ADDRESS
  );

  // Wait for the deployment to be confirmed
  await arbitrage.deployed();

  console.log(`Arbitrage contract deployed to ${arbitrage.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
