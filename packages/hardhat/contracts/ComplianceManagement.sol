// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ComplianceManagement {

    // Struct to store compliance data for a shipment
    struct ComplianceRecord {
        uint256 shipmentId;
        string documentHash;
        uint256 timestamp;
    }

    // Mapping to store compliance records
    mapping(uint256 => ComplianceRecord) public complianceRecords;

    // Event to emit when a compliance record is added
    event ComplianceAdded(uint256 shipmentId, string documentHash);

    // Function to add compliance records for a shipment
    function addComplianceRecord(uint256 _shipmentId, string memory _documentHash) public {
        complianceRecords[_shipmentId] = ComplianceRecord(_shipmentId, _documentHash, block.timestamp);
        emit ComplianceAdded(_shipmentId, _documentHash);
    }

    // Function to retrieve compliance records
    function getComplianceRecord(uint256 _shipmentId) public view returns (uint256, string memory, uint256) {
        ComplianceRecord storage record = complianceRecords[_shipmentId];
        return (record.shipmentId, record.documentHash, record.timestamp);
    }
}
