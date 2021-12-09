import { ReactNode } from "react";

const Item = ({ children }: { children: ReactNode }) => (
  <div style={{ width: 100 }}>{children}</div>
);

export default Item;
