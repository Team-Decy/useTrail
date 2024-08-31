# **Logistics/Shipment Tracking System on the Blockchain**

## **Overview**

This project is a decentralized logistics and shipment tracking system built on the Ethereum blockchain. The platform enables the transparent, secure, and real-time tracking of shipments by leveraging smart contracts deployed on the Sepolia testnet. The system is designed using Scaffold-ETH, and The Graph is utilized to index and query shipment data efficiently.

## **Features**

- **Role-Based Access Control**: Users can register as Suppliers, Transporters, or Retailers, each having specific permissions.
- **Shipment Creation and Tracking**: Suppliers can create shipments, Transporters can update shipment status, and Retailers can confirm delivery.
- **Real-Time Data**: The Graph is used to index shipment events, providing real-time updates on the shipment status.
- **Transparency**: All actions are recorded on the blockchain, ensuring that the data is immutable and transparent.
- **User-Friendly Interface**: Scaffold-ETH provides a responsive and intuitive interface for interacting with the system.

## **Tech Stack**

- **Smart Contracts**: Solidity
- **Frontend**: Next.js (provided by Scaffold-ETH)
- **Blockchain Network**: Sepolia Testnet
- **Data Indexing**: The Graph
- **Development Framework**: Scaffold-ETH
- **Wallet Integration**: MetaMask

## **System Architecture**

The system consists of three main components:

1. **Smart Contracts**: Deployed on the Sepolia testnet, these contracts manage role assignment, shipment creation, status updates, and delivery confirmations.
2. **Frontend Interface**: Built with Next.js using Scaffold-ETH, the frontend allows users to interact with the smart contracts.
3. **The Graph**: Used to index and query shipment data, enabling real-time tracking and efficient data retrieval.

## **Smart Contracts**

### **RoleManagement.sol**
This contract manages user roles (Supplier, Transporter, Retailer) and enforces role-based access control.

### **ShipmentTracking.sol**
This contract handles the creation of shipments, updating their status, and confirming delivery. Events are emitted for each action, which are then indexed by The Graph.

## **Deployment Details**

- **Network**: Sepolia Testnet
- **Contract Addresses**:
  - `RoleManagement.sol`: `0xFC81921dA0B6F29CE7Deb79dd820fa66aef7c610`
  - `ShipmentTracking.sol`: `0xDE358645897C31E7D80501178dD0672aC4198BF5`
  - `PaymentSystem.sol`: `0xDE358645897C31E7D80501178dD0672aC4198BF5`
  - `Auth.sol`: `0x86d87d9a2ECcB87aAF3C87EC4768E09BFB37f640`
  
## **The Graph Subgraph**

The subgraph indexes shipment events emitted by the `ShipmentTracking` contract. It provides an efficient way to query shipment data based on various filters such as shipment status, origin, destination, and more. The sugraph is called usetrail.

### **Subgraph Deployment**
- **Hosted on**: The Graph Hosted Service
- **Subgraph URL**: `https://api.studio.thegraph.com/proxy/87779/usetrail/y`

## **Installation and Setup**

### **Prerequisites**
- Node.js and npm installed
- MetaMask extension for wallet integration
- An Ethereum wallet with Sepolia ETH for gas fees

### **Clone the Repository**
```bash
git clone https://github.com/Team-Decy/useTrail.git
cd usetrail
```

### **Install Dependencies**
```bash
yarn install
```

### **Configure Environment Variables**
Create a `.env` file in the root directory and add the following:

```bash
NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://api.studio.thegraph.com/proxy/87779/usetrail/y
```

### **Run the Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## **Usage**

1. **Connect Wallet**: Users need to connect their MetaMask wallet to interact with the platform.
2. **Assign Role**: New users are prompted to select a role (Supplier, Transporter, Retailer) upon their first interaction.
3. **Create Shipment**: Suppliers can create shipments by providing the necessary details.
4. **Update Shipment Status**: Transporters can update the status of shipments as they progress through the supply chain.
5. **Confirm Delivery**: Retailers confirm the delivery of shipments, triggering the final state of the shipment.
6. **Track Shipments**: All users can view and track shipments in real time through the interface.

## **The Graph Queries**

The Graph is used to fetch data efficiently. Here are some example queries:

### **Query Shipments by Status**
```graphql
{
  shipments(where: {status: "InTransit"}) {
    id
    origin
    destination
    status
    timestamp
  }
}
```

### **Query Shipments by Origin**
```graphql
{
  shipments(where: {origin: "New York"}) {
    id
    origin
    destination
    status
    timestamp
  }
}
```

## **Future Improvements**

- **Integration with IoT devices** for real-time tracking.
- **Support for additional roles** such as Compliance Officers and Dispute Resolvers.
- **Enhanced UI/UX** for a more intuitive user experience.
- **Integration with Oracles** for real-world data feeds.

## **Contributing**

We welcome contributions from the community! Please feel free to submit pull requests or open issues for any bugs or feature requests.

## **License**

This project is licensed under the MIT License.

## **Acknowledgments**

- **Scaffold-ETH** for providing a robust development framework.
- **The Graph** for enabling efficient data indexing and querying.

---

This README provides a comprehensive overview of your logistics/shipment tracking system project, covering all necessary aspects, from setup to usage and future improvements.
