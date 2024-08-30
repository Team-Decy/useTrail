// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DisputeResolution {

    // Struct to represent a Dispute
    struct Dispute {
        uint256 shipmentId;
        address raisedBy;
        string issue;
        string resolution;
        bool resolved;
        uint256 timestamp;
    }

    // Mapping to store disputes
    mapping(uint256 => Dispute) public disputes;

    // Counter for Dispute IDs
    uint256 public disputeCount = 0;

    // Event to emit when a dispute is raised
    event DisputeRaised(uint256 disputeId, uint256 shipmentId, address raisedBy, string issue);

    // Event to emit when a dispute is resolved
    event DisputeResolved(uint256 disputeId, string resolution);

    // Function to raise a dispute
    function raiseDispute(uint256 _shipmentId, string memory _issue) public {
        disputeCount++;
        disputes[disputeCount] = Dispute(_shipmentId, msg.sender, _issue, "", false, block.timestamp);
        emit DisputeRaised(disputeCount, _shipmentId, msg.sender, _issue);
    }

    // Function to resolve a dispute
    function resolveDispute(uint256 _disputeId, string memory _resolution) public {
        Dispute storage dispute = disputes[_disputeId];
        require(dispute.resolved == false, "Dispute already resolved");
        dispute.resolution = _resolution;
        dispute.resolved = true;
        emit DisputeResolved(_disputeId, _resolution);
    }

    // Function to view dispute details
    function getDispute(uint256 _disputeId) public view returns (uint256, address, string memory, string memory, bool, uint256) {
        Dispute storage dispute = disputes[_disputeId];
        return (dispute.shipmentId, dispute.raisedBy, dispute.issue, dispute.resolution, dispute.resolved, dispute.timestamp);
    }
}
