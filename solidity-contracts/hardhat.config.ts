import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox"; // General-purpose Hardhat tools (includes ethers)
import dotenv from "dotenv";

dotenv.config();  // Load environment variables from .env

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    goerli: {
      url: process.env.INFURA_URL || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    hardhat: {},  // Local development network
  },
};

export default config;
