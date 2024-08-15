# CreateProductLinkResponse

## Example Usage

```typescript
import { CreateProductLinkResponse } from "@ioniccommerce/ionic-sdk/models/operations";

let value: CreateProductLinkResponse = {
    contentType: "<value>",
    statusCode: 297534,
    rawResponse: new Response('{"message": "hello world"}', {
        headers: { "Content-Type": "application/json" },
    }),
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `contentType`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | HTTP response content type for this operation                                    |
| `productLinkResponse`                                                            | [components.ProductLinkResponse](../../models/components/productlinkresponse.md) | :heavy_minus_sign:                                                               | Successful Response                                                              |
| `statusCode`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | HTTP response status code for this operation                                     |
| `rawResponse`                                                                    | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)            | :heavy_check_mark:                                                               | Raw HTTP response; suitable for custom response parsing                          |