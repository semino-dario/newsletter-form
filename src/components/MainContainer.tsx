import "../App.scss";
import type { ReactNode } from "react";

export default function MainContainer({ children }: { children: ReactNode }) {
  return <main className="main_container">{children}</main>;
}
