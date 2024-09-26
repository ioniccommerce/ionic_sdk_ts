# ProductLinkRequest

## Example Usage

```typescript
import { ProductLinkRequest } from "@ioniccommerce/ionic-sdk/models/components";

let value: ProductLinkRequest = {
  clientDetails: {
    ip: "ac0d:ddef:79f1:ee42:68c9:f243:e5a5:32e3",
  },
  product: {
    identifiers: {},
    link: "https://hoarse-slide.com/",
  },
  query: {
    q: "<value>",
  },
  userDetails: {
    email: "Austyn_Koss-Wolff73@hotmail.com",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `clientDetails`                                                        | [components.ClientDetails](../../models/components/clientdetails.md)   | :heavy_check_mark:                                                     | N/A                                                                    |
| `idempotencyKey`                                                       | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `logOnly`                                                              | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `product`                                                              | [components.ProductDetails](../../models/components/productdetails.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `query`                                                                | [components.QueryDetails](../../models/components/querydetails.md)     | :heavy_check_mark:                                                     | N/A                                                                    |
| `referenceId`                                                          | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `userDetails`                                                          | [components.UserDetails](../../models/components/userdetails.md)       | :heavy_check_mark:                                                     | N/A                                                                    |