import Header from "./components/header";
import "./globals.css";

export const metadata = {
  title: "Next",
  description: "Next JS Test Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
