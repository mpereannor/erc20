const hre = require("hardhat")

async function main() {
  const ESTToken = await hre.ethers.getContractFactory("ESTToken")
  console.log("Deploying ESTToken...")
  const token = await ESTToken.deploy("10000000000000000000000")

  await token.deployed()
  console.log("ESTToken deployed to:", token.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
