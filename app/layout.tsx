import '~/styles/globals.css'
import {ReactNode, Suspense} from "react";
import {Sarabun} from "next/font/google";
import AllRouteLink from "~/servercomponents/AllRouteLink";

export const metadata = {
  title: 'Next13 Experiment',
  description: 'For learning vercel and next 13',
}

const sarabun = Sarabun({
  subsets: ['latin', 'thai'],
  weight: ['300', '600', '800'],
  variable: '--font-sarabun',
  display: 'swap',
  preload: true,
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className={sarabun.variable}>
      <body>
          <main className="p-4">
              <Suspense fallback={<div className="text-2xl">Loading...</div>}>
                  <AllRouteLink />
                  {children}
              </Suspense>
          </main>
      </body>
    </html>
  )
}
