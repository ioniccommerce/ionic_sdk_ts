<!-- Start SDK Example Usage [usage] -->
```typescript
import { Ionic } from "@ioniccommerce/ionic-sdk";

const ionic = new Ionic();

async function run() {
    const result = await ionic.createProductLink(
        {
            clientDetails: {
                ip: "185.113.33.24",
            },
            product: {
                identifiers: {},
                link: "http://negative-wording.biz",
            },
            query: {
                q: "<value>",
            },
            userDetails: {
                email: "Mitchell_DAmore49@hotmail.com",
                id: "<id>",
            },
        },
        {
            apiKeyHeader: "<YOUR_API_KEY_HERE>",
        }
    );

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->