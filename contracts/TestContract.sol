pragma solidity ^0.8.8;

contract TestContract {
  uint256 public value;
  function setValue(uint256 _value) public {
    value = _value;
  }
}
