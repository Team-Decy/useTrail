// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RoleManagement {
    
    // Mapping to store roles of users
    mapping(address => string) public roles;

    // Event to emit when a role is assigned
    event RoleAssigned(address indexed user, string role);

    // Function to assign roles to users
    function assignRole(address _user, string memory _role) public {
        roles[_user] = _role;
        emit RoleAssigned(_user, _role);
    }

    // Function to get the role of a user
    function getRole(address _user) public view returns (string memory) {
        return roles[_user];
    }
}
