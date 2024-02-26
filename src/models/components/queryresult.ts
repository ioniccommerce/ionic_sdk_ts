/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Product, Product$ } from "./product";
import { Query, Query$ } from "./query";
import { z } from "zod";

export type QueryResult = {
    query: Query;
    products: Array<Product>;
};

/** @internal */
export namespace QueryResult$ {
    export type Inbound = {
        query: Query$.Inbound;
        products: Array<Product$.Inbound>;
    };

    export const inboundSchema: z.ZodType<QueryResult, z.ZodTypeDef, Inbound> = z
        .object({
            query: Query$.inboundSchema,
            products: z.array(Product$.inboundSchema),
        })
        .transform((v) => {
            return {
                query: v.query,
                products: v.products,
            };
        });

    export type Outbound = {
        query: Query$.Outbound;
        products: Array<Product$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, QueryResult> = z
        .object({
            query: Query$.outboundSchema,
            products: z.array(Product$.outboundSchema),
        })
        .transform((v) => {
            return {
                query: v.query,
                products: v.products,
            };
        });
}