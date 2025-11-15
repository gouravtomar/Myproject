import './globals.css'


export const metadata = {
title: 'Dynamic Filter Project',
description: 'Next.js App Router filtering example with Tailwind'
}


export default function RootLayout({ children }) {
return (
<html lang="en">
<body className="min-h-screen bg-slate-50 text-slate-900 font-sans">
<main className="max-w-4xl mx-auto p-6">
{children}
</main>
</body>
</html>
)
}