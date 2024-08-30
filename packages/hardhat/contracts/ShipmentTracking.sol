// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ShipmentTracking {
    
    // Struct to represent a Shipment
    struct Shipment {
        uint256 id;
        string origin;
        string destination;
        string status;
        address supplier;
        address transporter;
        address retailer;
        uint256 timestamp;
    }

    // Mapping to store shipments
    mapping(uint256 => Shipment) public shipments;

    // Counter for Shipment IDs
    uint256 public shipmentCount = 0;

    // Event to emit when a shipment is created
    event ShipmentCreated(uint256 id, string origin, string destination, address supplier);

    // Event to emit when a shipment status is updated
    event StatusUpdated(uint256 id, string status, address updatedBy);

    // Function to create a new shipment
    function createShipment(string memory _origin, string memory _destination, address _transporter, address _retailer) public {
        shipmentCount++;
        shipments[shipmentCount] = Shipment(
            shipmentCount,
            _origin,
            _destination,
            "Created",
            msg.sender,
            _transporter,
            _retailer,
            block.timestamp
        );
        emit ShipmentCreated(shipmentCount, _origin, _destination, msg.sender);
    }

    // Function to update the status of a shipment
    function updateStatus(uint256 _shipmentId, string memory _status) public {
        Shipment storage shipment = shipments[_shipmentId];
        require(msg.sender == shipment.supplier || msg.sender == shipment.transporter, "Not authorized");
        shipment.status = _status;
        shipment.timestamp = block.timestamp;
        emit StatusUpdated(_shipmentId, _status, msg.sender);
    }

    // Function to get shipment details
    function getShipment(uint256 _shipmentId) public view returns (uint256, string memory, string memory, string memory, address, address, address, uint256) {
        Shipment storage shipment = shipments[_shipmentId];
        return (
            shipment.id,
            shipment.origin,
            shipment.destination,
            shipment.status,
            shipment.supplier,
            shipment.transporter,
            shipment.retailer,
            shipment.timestamp
        );
    }
}
