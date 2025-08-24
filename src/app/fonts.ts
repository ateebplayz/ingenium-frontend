import localFont from "next/font/local";

export const primary = localFont({
  src: [
    { path: "../assets/grotesk/FKGroteskTrial-Black.otf", weight: "900", style: "normal" },
    { path: "../assets/grotesk/FKGroteskTrial-Bold.otf", weight: "700", style: "normal" },
    { path: "../assets/grotesk/FKGroteskTrial-Italic.otf", weight: "400", style: "italic" },
    { path: "../assets/grotesk/FKGroteskTrial-Light.otf", weight: "300", style: "normal" },
    { path: "../assets/grotesk/FKGroteskTrial-Medium.otf", weight: "500", style: "normal" },
    { path: "../assets/grotesk/FKGroteskTrial-Regular.otf", weight: "400", style: "normal" },
    { path: "../assets/grotesk/FKGroteskTrial-Thin.otf", weight: "100", style: "normal" },
  ],
  variable: "--font-primary",
  display: "swap",
});

export const secondary = localFont({
  src: [
    { path: "../assets/bebas/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-secondary",
  display: "swap",
});