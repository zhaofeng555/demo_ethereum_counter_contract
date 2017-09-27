require("dotenv-safe").load()
const Web3 = require("web3")

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"))

const main = async () => {
  const balance = await web3.eth.getBalance(process.env.ACCOUNT)
  console.log("balance", web3.utils.fromWei(balance, "ether"))

  const abi =
    "[{\"constant\":false,\"inputs\":[{\"name\":\"step\",\"type\":\"uint256\"}],\"name\":\"incCounter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBalance\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getCounter\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"deposit\",\"outputs\":[],\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}]"

  const counterContract = new web3.eth.Contract(
    JSON.parse(abi),
    process.env.CONTRACT_ADDRESS,
  )

  // init value, must be 0
  const counterValue = await counterContract.methods.getCounter().call()
  console.log("counterValue", counterValue)

  // before tx need unloack
  await web3.eth.personal.unlockAccount(
    process.env.ACCOUNT,
    process.env.PASSWORD,
    600,
  )

  // inc by 3
  const res = await counterContract.methods
    .incCounter(3)
    .send({ from: process.env.ACCOUNT })
  console.log(res)
}

main().catch(err => console.error(err))
