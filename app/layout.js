import Preloader from "@/components/ui/preloader";
import { jostMedium, openSans } from "./fonts";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
    title: "Takwa Hafyen - Software Engineer Personal Portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${jostMedium.className} ${openSans.variable} body-dark-mode`}
            >
                <Preloader />
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
