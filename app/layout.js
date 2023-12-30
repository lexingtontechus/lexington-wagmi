import "/styles/index.css";
import "/styles/globals.css";
//import { Solana } from "./solana";
import { Providers } from "./providers";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: {
    default: "Lexington Solana WEB3 Demo",
    template: "%s | Lexington Demo",
  },
  description: "A Lexington Solana WEB3 Demo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
