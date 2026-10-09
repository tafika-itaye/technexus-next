import { Inter, Syne } from "next/font/google";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400","500","600","700"], display: "swap" });
const syne = Syne({ variable: "--font-syne", subsets: ["latin"], weight: ["700","800"], display: "swap" });

export const fontVars = `${inter.variable} ${syne.variable}`;
