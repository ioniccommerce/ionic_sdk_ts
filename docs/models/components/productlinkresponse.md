# ProductLinkResponse

## Example Usage

```typescript
import { ProductLinkResponse } from "@ioniccommerce/ionic-sdk/models/components";

let value: ProductLinkResponse = {
    id: "<id>",
    product: {
        links: {
            original: "http://whirlwind-diver.info",
            tagged: "http://spotted-skyline.name",
        },
    },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | N/A                                                                      |
| `idempotencyKey`                                                         | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `product`                                                                | [components.EnrichedProduct](../../models/components/enrichedproduct.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `referenceId`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |