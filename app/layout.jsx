import Navbar from "../components/Navbar.jsx"

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
