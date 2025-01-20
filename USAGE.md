<!-- Start SDK Example Usage [usage] -->
```typescript
import { Ionic } from "@ioniccommerce/ionic-sdk";

const ionic = new Ionic();

async function run() {
  const result = await ionic.createProductLink({
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  }, {
    clientDetails: {
      ip: "2aff:3f6d:613d:ecab:e464:1568:83ab:a3e3",
    },
    logOnly: false,
    product: {
      identifiers: {},
      link: "https://gentle-hello.name/",
    },
    query: {
      q: "<value>",
    },
    userDetails: {
      email: "Vivian.Waters87@gmail.com",
      id: "<id>",
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->