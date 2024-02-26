<!-- Start SDK Example Usage [usage] -->
```typescript
import { Ionic } from "Ionic-API";
import { MessageRole, MessageType } from "Ionic-API/models/components";

async function run() {
    const sdk = new Ionic();

    const operationSecurity = {
        apiKeyHeader: "<YOUR_API_KEY_HERE>",
    };

    const result = await sdk.query(
        {
            query: {
                query: "<value>",
            },
            session: {},
            messages: [
                {
                    role: MessageRole.System,
                    type: MessageType.Tag,
                    content: "<value>",
                },
            ],
        },
        operationSecurity
    );

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->