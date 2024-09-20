# Message

## Example Usage

```typescript
import { Message } from "@ioniccommerce/ionic-sdk/models/components";

let value: Message = {
  content: "<value>",
  role: "assistant",
  type: "filter",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `content`                                                        | *string*                                                         | :heavy_check_mark:                                               | N/A                                                              |
| `role`                                                           | [components.MessageRole](../../models/components/messagerole.md) | :heavy_check_mark:                                               | An enumeration.                                                  |
| `type`                                                           | [components.MessageType](../../models/components/messagetype.md) | :heavy_check_mark:                                               | An enumeration.                                                  |