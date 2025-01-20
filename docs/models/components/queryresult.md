# QueryResult

## Example Usage

```typescript
import { QueryResult } from "@ioniccommerce/ionic-sdk/models/components";

let value: QueryResult = {
  products: [
    {
      links: [
        {
          text: "<value>",
          type: "<value>",
          url: "https://content-costume.info",
        },
      ],
      merchantName: "<value>",
      merchantProductId: "<id>",
      name: "<value>",
      price: "821.10",
      status: "<value>",
    },
  ],
  query: {
    query: "<value>",
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `products`                                                 | [components.Product](../../models/components/product.md)[] | :heavy_check_mark:                                         | N/A                                                        |
| `query`                                                    | [components.Query](../../models/components/query.md)       | :heavy_check_mark:                                         | N/A                                                        |