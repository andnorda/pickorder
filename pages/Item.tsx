import { ForwardedRef, forwardRef, HTMLAttributes } from "react";

interface ItemProps extends HTMLAttributes<HTMLDivElement> {}

export const Item = (props: ItemProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div {...props} ref={ref}>
      {props.id}
    </div>
  );
};

export default forwardRef<HTMLDivElement, ItemProps>(Item);
