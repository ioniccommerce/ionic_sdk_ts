/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

/**
 * An enumeration.
 */
export const ShippingAttribute = {
    FreeShipping: "free_shipping",
    OneDayShipping: "one_day_shipping",
    TwoDayShipping: "two_day_shipping",
    InStorePickup: "in_store_pickup",
} as const;
/**
 * An enumeration.
 */
export type ShippingAttribute = ClosedEnum<typeof ShippingAttribute>;

/** @internal */
export namespace ShippingAttribute$ {
    export const inboundSchema: z.ZodNativeEnum<typeof ShippingAttribute> =
        z.nativeEnum(ShippingAttribute);
    export const outboundSchema: z.ZodNativeEnum<typeof ShippingAttribute> = inboundSchema;
}