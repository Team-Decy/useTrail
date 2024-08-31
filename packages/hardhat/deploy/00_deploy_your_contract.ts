import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import * as fs from "fs";
import * as path from "path";

/**
 * Deploys contracts and copies their ABI files to a specified directory.
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployAndCopyAbis: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, getArtifact } = hre.deployments;

  // Define the contracts and their constructor arguments
  const contracts = [
    { name: "Auth", args: [] },
    { name: "PaymentSystem", args: [] },
    { name: "RoleManagement", args: [] },
    { name: "ShipmentTracking", args: [] },
  ];

  const targetDir = path.resolve(__dirname, "../../nextjs/contracts");
  const targetDir2 = path.resolve(__dirname, "../../subgraph/abis");

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  for (const contract of contracts) {
    await deploy(contract.name, {
      from: deployer,
      args: contract.args,
      log: true,
      autoMine: true,
    });

    const artifact = await getArtifact(contract.name);
    const abiPath = path.resolve(targetDir, `${contract.name}.json`);
    const abiPath2 = path.resolve(targetDir2, `${contract.name}.json`);
    fs.writeFileSync(abiPath, JSON.stringify(artifact.abi, null, 2));
    fs.writeFileSync(abiPath2, JSON.stringify(artifact.abi, null, 2));

    console.log(`ABI for ${contract.name} copied to ${abiPath}`);
  }
};

export default deployAndCopyAbis;
deployAndCopyAbis.tags = ["all"];
