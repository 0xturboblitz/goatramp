// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import {CreditCardVerifier} from "./CreditCardVerifier.sol";

contract GOATRAMP is Ownable {
    CreditCardVerifier public immutable verifier;
    address public caPubkey = 0x0000000000000000000000000000000000000000;

    constructor(CreditCardVerifier _v) {
        verifier = _v;
        transferOwnership(msg.sender);
    }

    function setcaPubKey(address _caPubKey) public onlyOwner {
        caPubkey = _caPubKey;
    }

    // function check(
    //     uint256[2] memory a,
    //     uint256[2][2] memory b,
    //     uint256[2] memory c,
    //     uint256[100] memory inputs
    // ) public {
    //     require(Pairing.verifyProof(a, b, c, inputs), "Invalid Proof");
    // }

    function ramp(
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[64] memory inputs
    ) public {
        // Check eth address committed to in proof matches msg.sender, to avoid replayability
        // require(address(uint160(inputs[addressIndexInSignals])) == msg.sender, "Invalid address");

        // Verify that the public key for RSA matches the hardcoded one (ideally, go up the chain of trust to Certificate Authority)

        require(verifier.verifyProof(a, b, c, inputs), "Invalid Proof");

        // Effects: Send token
    }
}
