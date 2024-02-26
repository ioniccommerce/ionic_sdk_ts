<!-- Start SDK Example Usage [usage] -->
```typescript
import { Ionic } from "@ioniccommerce/ionic-sdk";
import { MessageRole, MessageType } from "@ioniccommerce/ionic-sdk/models/components";

async function run() {
    const sdk = new Ionic();

    const operationSecurity = {
        apiKeyHeader: "<YOUR_API_KEY_HERE>",
    };

    const result = await sdk.query(
        {
            messages: [
                {
                    content: "<value>",
                    role: MessageRole.System,
                    type: MessageType.Tag,
                },
            ],
            query: {
                query: "<value>",
            },
            session: {},
        },
        operationSecurity
    );

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->