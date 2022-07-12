const { ethers } = require('ethers')
const { abi: UniswapV3Factory } = require('@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json')
require('dotenv').config()
const INFURA_URL_TESTNET = process.env.INFURA_URL_TESTNET

const address0 = '0xFDdb8f75a4eE27fDd000f1107ddb15c01c834033'
const address1 = '0xc778417E063141139Fce010982780140Aa0cD5Ab'
const factoryAddress = '0x1F98431c8aD98523631AE4a59f267346ea31F984'

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(INFURA_URL_TESTNET)

  const factoryContract = new ethers.Contract(
    factoryAddress,
    UniswapV3Factory,
    provider
  )

  const poolAddress = await factoryContract.getPool(address0, address1, 500)
  console.log('poolAddress', poolAddress)

}

main()