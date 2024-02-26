/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { MessageRole, MessageRole$ } from "./messagerole";
import { MessageType, MessageType$ } from "./messagetype";
import { z } from "zod";

export type Message = {
    /**
     * An enumeration.
     */
    role: MessageRole;
    /**
     * An enumeration.
     */
    type: MessageType;
    content: string;
};

/** @internal */
export namespace Message$ {
    export type Inbound = {
        role: MessageRole;
        type: MessageType;
        content: string;
    };

    export const inboundSchema: z.ZodType<Message, z.ZodTypeDef, Inbound> = z
        .object({
            role: MessageRole$,
            type: MessageType$,
            content: z.string(),
        })
        .transform((v) => {
            return {
                role: v.role,
                type: v.type,
                content: v.content,
            };
        });

    export type Outbound = {
        role: MessageRole;
        type: MessageType;
        content: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Message> = z
        .object({
            role: MessageRole$,
            type: MessageType$,
            content: z.string(),
        })
        .transform((v) => {
            return {
                role: v.role,
                type: v.type,
                content: v.content,
            };
        });
}