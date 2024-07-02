/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type ClientDetails = {
    ip: string;
    userAgent?: string | undefined;
};

/** @internal */
export namespace ClientDetails$ {
    export const inboundSchema: z.ZodType<ClientDetails, z.ZodTypeDef, unknown> = z
        .object({
            ip: z.string(),
            user_agent: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                user_agent: "userAgent",
            });
        });

    export type Outbound = {
        ip: string;
        user_agent?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ClientDetails> = z
        .object({
            ip: z.string(),
            userAgent: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                userAgent: "user_agent",
            });
        });
}