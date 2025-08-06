## Install

```bash
npm install node-fetch
```

## Initialize

```js
let sandbox = true;
const bemovil = new Bemovil("YOUR_TOKEN", sandbox);
```

## Get Balance

```js
bemovil.getBalance().then((balance) => {
  console.log(balance);
});
```

## List Products

```js
bemovil.listProducts().then((res) => {
  console.log(res);
});
```

Search a specific product

```js
bemovil.listProducts("claro").then((res) => {
  console.log(res);
});
```

## Get Product

```js
let productId = "PRODUCT_ID";
bemovil.getProduct(productId).then((product) => {
  console.log(product);
});
```

# Transactions

## Find Transaction

```js
let transactionId = "TRANSACTION_ID";
bemovil.transactionFind(transactionId).then((transaction) => {
  console.log(transaction);
});
```

## Query Transactions

```js
const payload = {
  /// PAYLOAD FOR THE PRODUCT
};
bemovil
  .transactionQuery({
    productId: "PRODUCT_ID",
    ...payload,
  })
  .then((transactions) => {
    console.log(transactions);
  });
```

## Sell

```js
const payload = {
  /// PAYLOAD FOR THE PRODUCT
};
bemovil
  .sell({
    productId: "PRODUCT_ID",
    ...payload,
  })
  .then((transaction) => {
    console.log(transaction);
  });
```
