import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const deployTransferUSDCBasic: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const ccipRouterAddress = "0xF694E193200268f9a4868e4Aa017A0118C9a8177";
  const linkTokenAddress = "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846";
  const usdcTokenAddress = "0x5425890298aed601595a70AB815c96711a31Bc65";
  const destinationChainSelector = "16015286601757825753";

  await deploy("TransferUSDCBasic", {
    from: deployer,
    args: [ccipRouterAddress, linkTokenAddress, usdcTokenAddress, destinationChainSelector],
    log: true,
  });
};

export default deployTransferUSDCBasic;

deployTransferUSDCBasic.tags = ["TransferUSDCBasic"];
