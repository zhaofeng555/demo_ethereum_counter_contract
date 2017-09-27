pragma solidity ^0.4.8;

contract CounterContract {
    
    uint counter;
    
    function CounterContract()  public{
        counter = 0;
    }
    
    function incCounter(uint step) public {
        counter = counter + step;
    }
    
    function getCounter() public constant returns(uint) {
        return counter;
    }
    
    function getBalance() public constant returns(uint) {
        return this.balance;
    }
    
    function deposit() public payable {
        
    }
}
