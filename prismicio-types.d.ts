// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Alternating content block documents */
type AlternatingContentBlockDocumentData = Record<string, never>;
/**
 * Alternating content block document from Prismic
 *
 * - **API ID**: `alternating_content_block`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AlternatingContentBlockDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithoutUID<
    Simplify<AlternatingContentBlockDocumentData>,
    "alternating_content_block",
    Lang
  >;
export type AllDocumentTypes = AlternatingContentBlockDocument;
/**
 * Default variation for CtaBock Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CtaBockSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;
/**
 * Slice variation for *CtaBock*
 *
 */
type CtaBockSliceVariation = CtaBockSliceDefault;
/**
 * CtaBock Shared Slice
 *
 * - **API ID**: `cta_bock`
 * - **Description**: `CtaBock`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CtaBockSlice = prismicT.SharedSlice<
  "cta_bock",
  CtaBockSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      AlternatingContentBlockDocumentData,
      AlternatingContentBlockDocument,
      AllDocumentTypes,
      CtaBockSliceDefault,
      CtaBockSliceVariation,
      CtaBockSlice,
    };
  }
}
