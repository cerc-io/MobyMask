pragma solidity ^0.8.13;
//SPDX-License-Identifier: MIT

import "../Delegatable.sol";

abstract contract CaveatEnforcer {
  function enforceCaveat (bytes calldata terms, Transaction calldata tx) virtual public returns (bool);
}