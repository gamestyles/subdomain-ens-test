pragma solidity ^0.5.16;

/**
 * @title EnsRegistry
 * @dev Extract of the interface for ENS Registry
 */
contract EnsRegistry {
	function setOwner(bytes32 node, address owner) public;
	function setSubnodeOwner(bytes32 node, bytes32 label, address owner) public;
	function setResolver(bytes32 node, address resolver) public;
	function owner(bytes32 node) external view returns (address);
	function resolver(bytes32 node) public view returns (address);
}
