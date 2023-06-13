import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CtaBock`.
 */
export type CtaBockProps = SliceComponentProps<Content.CtaBockSlice>;

/**
 * Component for "CtaBock" Slices.
 */
const CtaBock = ({ slice }: CtaBockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cta_bock (variation: {slice.variation}) Slices
    </section>
  );
};

export default CtaBock;
