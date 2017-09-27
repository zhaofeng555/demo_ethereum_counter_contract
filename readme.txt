geth --datadir=./chaindata init ./genesis.json
geth --datadir=./chaindata --rpc --rpcapi=eth,net,web3,personal


var browser_ballot_sol_countercontractContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"step","type":"uint256"}],"name":"incCounter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]);
var browser_ballot_sol_countercontract = browser_ballot_sol_countercontractContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000f57600080fd5b60008081905550610141806100256000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630e8658e21461005e57806312065fe0146100815780638ada066e146100aa578063d0e30db0146100d357600080fd5b341561006957600080fd5b61007f60048080359060200190919050506100dd565b005b341561008c57600080fd5b6100946100eb565b6040518082815260200191505060405180910390f35b34156100b557600080fd5b6100bd61010a565b6040518082815260200191505060405180910390f35b6100db610113565b005b806000540160008190555050565b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b60008054905090565b5600a165627a7a723058204bd88568f561fa7be1dffbd21b2f3d482ed5c8ec88d7b93b4bac69b58eb3ef230029', 
     gas: '3141592'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
 
 [{"constant":false,"inputs":[{"name":"step","type":"uint256"}],"name":"incCounter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getCounter","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]
