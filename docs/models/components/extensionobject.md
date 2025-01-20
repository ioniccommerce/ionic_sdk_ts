# ExtensionObject

## Example Usage

```typescript
import { ExtensionObject } from "@ioniccommerce/ionic-sdk/models/components";

let value: ExtensionObject = {
  images: {},
  links: {},
  price: {
    amount: 265389,
    currency: "Moroccan Dirham",
  },
  title: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `images`                                                                       | [components.ExtensionImages](../../models/components/extensionimages.md)       | :heavy_check_mark:                                                             | N/A                                                                            |
| `links`                                                                        | [components.ExtensionLinks](../../models/components/extensionlinks.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `price`                                                                        | [components.PriceWithCurrency](../../models/components/pricewithcurrency.md)   | :heavy_check_mark:                                                             | N/A                                                                            |
| `shippingAttributes`                                                           | [components.ShippingAttribute](../../models/components/shippingattribute.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |
| `title`                                                                        | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |