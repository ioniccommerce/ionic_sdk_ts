# EnrichedProduct

## Example Usage

```typescript
import { EnrichedProduct } from "@ioniccommerce/ionic-sdk/models/components";

let value: EnrichedProduct = {
  links: {
    original: "https://valuable-behest.com",
    tagged: "https://talkative-sauerkraut.org/",
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `extensions`                                                   | *any*                                                          | :heavy_minus_sign:                                             | N/A                                                            |
| `links`                                                        | [components.TaggedLink](../../models/components/taggedlink.md) | :heavy_check_mark:                                             | N/A                                                            |
| `referenceId`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |