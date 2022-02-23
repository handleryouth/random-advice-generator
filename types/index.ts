import { ReactNode } from "react";

export interface AdviceResponse {
  getAdvice: { advice: string; id: string };
}

export interface LayoutProps {
  children: ReactNode;
}
