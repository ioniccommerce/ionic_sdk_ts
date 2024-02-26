# Ionic SDK


## Overview

Ionic Commerce | API: Ionic Commerce API

### Available Operations

* [query](#query) - Product Search

## query

API for searching for products & recommendations.

### Example Usage

```typescript
import { Ionic } from "ionic-commerce-sdk";
import { MessageRole, MessageType } from "ionic-commerce-sdk/models/components";

async function run() {
  const sdk = new Ionic();

  const operationSecurity = {
    apiKeyHeader: "<YOUR_API_KEY_HERE>",
  };
  
  const result = await sdk.query({
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
  }, operationSecurity);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.QueryAPIRequest](../../models/components/queryapirequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.QuerySecurity](../../models/operations/querysecurity.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.QueryResponse](../../models/operations/queryresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |
