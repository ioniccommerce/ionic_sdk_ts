/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Link, Link$ } from "./link";
import { z } from "zod";

export type Product = {
    merchantProductId: string;
    merchantName: string;
    name: string;
    brandName?: string | undefined;
    links: Array<Link>;
    thumbnail: string;
    upc?: string | undefined;
    status: string;
    price: string;
};

/** @internal */
export namespace Product$ {
    export type Inbound = {
        merchant_product_id: string;
        merchant_name: string;
        name: string;
        brand_name?: string | undefined;
        links: Array<Link$.Inbound>;
        thumbnail: string;
        upc?: string | undefined;
        status: string;
        price: string;
    };

    export const inboundSchema: z.ZodType<Product, z.ZodTypeDef, Inbound> = z
        .object({
            merchant_product_id: z.string(),
            merchant_name: z.string(),
            name: z.string(),
            brand_name: z.string().optional(),
            links: z.array(Link$.inboundSchema),
            thumbnail: z.string(),
            upc: z.string().optional(),
            status: z.string(),
            price: z.string(),
        })
        .transform((v) => {
            return {
                merchantProductId: v.merchant_product_id,
                merchantName: v.merchant_name,
                name: v.name,
                ...(v.brand_name === undefined ? null : { brandName: v.brand_name }),
                links: v.links,
                thumbnail: v.thumbnail,
                ...(v.upc === undefined ? null : { upc: v.upc }),
                status: v.status,
                price: v.price,
            };
        });

    export type Outbound = {
        merchant_product_id: string;
        merchant_name: string;
        name: string;
        brand_name?: string | undefined;
        links: Array<Link$.Outbound>;
        thumbnail: string;
        upc?: string | undefined;
        status: string;
        price: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Product> = z
        .object({
            merchantProductId: z.string(),
            merchantName: z.string(),
            name: z.string(),
            brandName: z.string().optional(),
            links: z.array(Link$.outboundSchema),
            thumbnail: z.string(),
            upc: z.string().optional(),
            status: z.string(),
            price: z.string(),
        })
        .transform((v) => {
            return {
                merchant_product_id: v.merchantProductId,
                merchant_name: v.merchantName,
                name: v.name,
                ...(v.brandName === undefined ? null : { brand_name: v.brandName }),
                links: v.links,
                thumbnail: v.thumbnail,
                ...(v.upc === undefined ? null : { upc: v.upc }),
                status: v.status,
                price: v.price,
            };
        });
}