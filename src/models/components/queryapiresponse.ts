/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { QueryResult, QueryResult$ } from "./queryresult.js";
import * as z from "zod";

export type QueryAPIResponse = {
    results?: Array<QueryResult> | undefined;
    token: string;
};

/** @internal */
export namespace QueryAPIResponse$ {
    export const inboundSchema: z.ZodType<QueryAPIResponse, z.ZodTypeDef, unknown> = z.object({
        results: z.array(QueryResult$.inboundSchema).optional(),
        token: z.string(),
    });

    export type Outbound = {
        results?: Array<QueryResult$.Outbound> | undefined;
        token: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, QueryAPIResponse> = z.object({
        results: z.array(QueryResult$.outboundSchema).optional(),
        token: z.string(),
    });
}
