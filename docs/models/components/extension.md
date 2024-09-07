# Extension

## Example Usage

```typescript
import { Extension } from "@ioniccommerce/ionic-sdk/models/components";

let value: Extension = {
    data: [
        {
            images: {},
            links: {},
            price: {
                amount: 324141,
                currency: "Rial Omani",
            },
            title: "<value>",
        },
    ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `data`                                                                     | [components.ExtensionObject](../../models/components/extensionobject.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |