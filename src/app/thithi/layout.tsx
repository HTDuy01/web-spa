import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ThiThi - Your Beauty an Wellness",
  description: "Generated by create next app",
};

export default function ViewDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
