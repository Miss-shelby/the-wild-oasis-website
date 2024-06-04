import Navigation from "./_components/Navigation";
import Logo from "@/app/_components/Logo";
import "@/app/_styles/globals.css"
// export const metadata={
//   title:'The wild oasis'
// }
import {Josefin_Sans} from 'next/font/google'
import Header from "./_components/Header";
const josefin = Josefin_Sans({
  subsets:['latin'],
  display:"swap",
});

console.log(josefin);
export const metadata={
  title:{
    template:'%s /The wild Oasis',
    default:"Welcome / The wild Oasis"
  },
  description:
  "Luxurious cabin hotel,Located in the heart of the Italian Dolomites surrounded by beautiful mountains and drak forests",
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-primary-950 relative antialiased text-primary-100 min-h-screen flex flex-col`}>
       <Header/>
      <div className="flex-1 px-8 py-12 grid">
      <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  )
}
