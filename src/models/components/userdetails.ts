/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UserDetails = {
    email: string;
    id: string;
    postalCode?: string | undefined;
};

/** @internal */
export namespace UserDetails$ {
    export const inboundSchema: z.ZodType<UserDetails, z.ZodTypeDef, unknown> = z
        .object({
            email: z.string(),
            id: z.string(),
            postal_code: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                postal_code: "postalCode",
            });
        });

    export type Outbound = {
        email: string;
        id: string;
        postal_code?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UserDetails> = z
        .object({
            email: z.string(),
            id: z.string(),
            postalCode: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                postalCode: "postal_code",
            });
        });
}