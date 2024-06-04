import { Roboto } from 'next/font/google'
import Card from "@/components/context/context"

const roboto = Roboto({
  weight:'400',
  subsets: ['latin'],
})

import Header from "@/components/header";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Card>
        <div className=' w-full container mx-auto '>
          <Header/>
          {children}
        </div>
        </Card>
      </body>
    </html>
  );
}
