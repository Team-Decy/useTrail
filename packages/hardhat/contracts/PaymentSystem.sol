// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PaymentSystem {

    // Event to emit when payment is made
    event PaymentMade(address indexed payer, address indexed payee, uint256 amount, uint256 shipmentId);

    // Function to make a payment upon delivery confirmation
    function confirmDeliveryAndPay(uint256 _shipmentId, address payable _supplier, address _retailer) public payable {
        require(msg.value > 0, "Payment amount should be greater than zero");
        _supplier.transfer(msg.value);
        emit PaymentMade(_retailer, _supplier, msg.value, _shipmentId);
    }
}
