/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type QuerySecurity = {
    apiKeyHeader?: string | undefined;
    apiKeyQuery?: string | undefined;
};

export type QueryResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * Successful Response
     */
    queryAPIResponse?: components.QueryAPIResponse | undefined;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
};

/** @internal */
export namespace QueryResponse$ {
    export type Inbound = {
        ContentType: string;
        QueryAPIResponse?: components.QueryAPIResponse$.Inbound | undefined;
        StatusCode: number;
        RawResponse: Response;
    };

    export const inboundSchema: z.ZodType<QueryResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            QueryAPIResponse: components.QueryAPIResponse$.inboundSchema.optional(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                ...(v.QueryAPIResponse === undefined
                    ? null
                    : { queryAPIResponse: v.QueryAPIResponse }),
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
            };
        });

    export type Outbound = {
        ContentType: string;
        QueryAPIResponse?: components.QueryAPIResponse$.Outbound | undefined;
        StatusCode: number;
        RawResponse: never;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, QueryResponse> = z
        .object({
            contentType: z.string(),
            queryAPIResponse: components.QueryAPIResponse$.outboundSchema.optional(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                ...(v.queryAPIResponse === undefined
                    ? null
                    : { QueryAPIResponse: v.queryAPIResponse }),
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
            };
        });
}
