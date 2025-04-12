// app/(auth)/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Auth - Sistema Inventario",
    description: "Sistema de gestión de inventario",
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body className={`${inter.className} min-h-screen bg-gray-50`}>
                <div className="flex flex-col min-h-screen">
                    <header className="bg-white shadow-sm">
                        <div className="max-w-7xl mx-auto px-4 py-4">
                            <Link
                                href="/"
                                className="logo flex items-center space-x-2 text-gray-800 hover:text-gray-600 transition-colors"
                            >
                                {/* <InventoryIcon className="w-8 h-8" />  */}
                                <span className="text-xl font-semibold">
                                    SistemaInventario
                                </span>
                            </Link>
                        </div>
                    </header>

                    <main className="flex-grow container mx-auto px-4 py-8">
                        {children}
                    </main>

                    <footer className="bg-white border-t">
                        <div className="max-w-7xl mx-auto px-4 py-6">
                            <p className="text-center text-gray-600 text-sm">
                                © {new Date().getFullYear()} Sistema de
                                Inventario. Todos los derechos reservados.
                            </p>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
