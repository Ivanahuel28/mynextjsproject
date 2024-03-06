import Navbar from "../components/Navbar.jsx"

export const metadata = {
  title: "Mi tienda con Nextjd - HomePage",
  description:"Esta es la pagina principal de mi tienda",
  keywords: "tienda, online, ecommerce"
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
      </body>
    </html>
  )
}
