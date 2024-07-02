/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClientDetails, ClientDetails$ } from "./clientdetails.js";
import { ProductDetails, ProductDetails$ } from "./productdetails.js";
import { QueryDetails, QueryDetails$ } from "./querydetails.js";
import { UserDetails, UserDetails$ } from "./userdetails.js";
import * as z from "zod";

export type ProductLinkRequest = {
    clientDetails: ClientDetails;
    idempotencyKey?: string | undefined;
    logOnly?: boolean | undefined;
    product: ProductDetails;
    query: QueryDetails;
    referenceId?: string | undefined;
    userDetails: UserDetails;
};

/** @internal */
export namespace ProductLinkRequest$ {
    export const inboundSchema: z.ZodType<ProductLinkRequest, z.ZodTypeDef, unknown> = z
        .object({
            client_details: ClientDetails$.inboundSchema,
            idempotency_key: z.string().optional(),
            log_only: z.boolean().default(false),
            product: ProductDetails$.inboundSchema,
            query: QueryDetails$.inboundSchema,
            reference_id: z.string().optional(),
            user_details: UserDetails$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                client_details: "clientDetails",
                idempotency_key: "idempotencyKey",
                log_only: "logOnly",
                reference_id: "referenceId",
                user_details: "userDetails",
            });
        });

    export type Outbound = {
        client_details: ClientDetails$.Outbound;
        idempotency_key?: string | undefined;
        log_only: boolean;
        product: ProductDetails$.Outbound;
        query: QueryDetails$.Outbound;
        reference_id?: string | undefined;
        user_details: UserDetails$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProductLinkRequest> = z
        .object({
            clientDetails: ClientDetails$.outboundSchema,
            idempotencyKey: z.string().optional(),
            logOnly: z.boolean().default(false),
            product: ProductDetails$.outboundSchema,
            query: QueryDetails$.outboundSchema,
            referenceId: z.string().optional(),
            userDetails: UserDetails$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                clientDetails: "client_details",
                idempotencyKey: "idempotency_key",
                logOnly: "log_only",
                referenceId: "reference_id",
                userDetails: "user_details",
            });
        });
}