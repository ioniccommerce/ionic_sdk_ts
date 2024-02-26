/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

/**
 * An enumeration.
 */
export enum MessageRole {
    User = "user",
    Assistant = "assistant",
    System = "system",
}

/** @internal */
export const MessageRole$ = z.nativeEnum(MessageRole);