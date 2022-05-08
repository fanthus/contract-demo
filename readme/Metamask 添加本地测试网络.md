# 3. Metamask 添加本地测试网络

**目标: 使用 Metamask 添加本地测试网络**

**步骤**

1. 本地通过 hardhat 启一个节点
2. 在 metamask 上添加本地节点

**Metamask 添加网络字段说明**

**Metamask**: 是一个以功能完备著称的浏览器钱包。

**RPC URL:** 远程调用地址，其实就是提供数据的节点地址。

**端口:** 通常，RPC接口使用8545端口以HTTP协议的方式对外服务。出于安全的目的，在默认情况下对这个端口的访问是受限的，只允许来自本地网络的链接（即来自本机127.0.0.1的访问）

**链 ID:**  是 EIP-155 引入的一个用来区分不同 EVM 链的一个标识。主要作用就是避免一个交易在签名之后被重复在不同的链上提交。最开始主要是为了防止以太坊交易在以太经典网络上重放或者以太经典交易在以太坊网络上重放。

JSON RPC 本地调用脚本

```jsx
//查看当前的客户端版本
curl -X POST -H "Content-Type:application/json" --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}' http://localhost:8545
```

参考地址:

1. [MetaMask](https://metamask.io/)
2. [EIP-155: Simple replay attack protection](https://eips.ethereum.org/EIPS/eip-155)
3. [Hardhat network chainID](https://hardhat.org/hardhat-network/reference/#chainid)