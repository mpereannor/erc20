// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ESTToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Estate", "EST") {
        _mint(msg.sender, initialSupply);
    }
}