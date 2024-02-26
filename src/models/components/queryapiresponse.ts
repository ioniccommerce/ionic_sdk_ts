/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { QueryResult, QueryResult$ } from "./queryresult";
import { z } from "zod";

export type QueryAPIResponse = {
    token: string;
    results?: Array<QueryResult> | undefined;
};

/** @internal */
export namespace QueryAPIResponse$ {
    export type Inbound = {
        token: string;
        results?: Array<QueryResult$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<QueryAPIResponse, z.ZodTypeDef, Inbound> = z
        .object({
            token: z.string(),
            results: z.array(QueryResult$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                token: v.token,
                ...(v.results === undefined ? null : { results: v.results }),
            };
        });

    export type Outbound = {
        token: string;
        results?: Array<QueryResult$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, QueryAPIResponse> = z
        .object({
            token: z.string(),
            results: z.array(QueryResult$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                token: v.token,
                ...(v.results === undefined ? null : { results: v.results }),
            };
        });
}
