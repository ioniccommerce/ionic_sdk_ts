<!-- Start SDK Example Usage [usage] -->
```typescript
import { Ionic } from "@ioniccommerce/ionic-sdk";

const ionic = new Ionic();

async function run() {
  const result = await ionic.createProductLink({
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  }, {
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
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->