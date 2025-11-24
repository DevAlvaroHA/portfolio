"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/about", label: "Sobre mí" },
    { href: "/projects", label: "Proyectos" },
    { href: "/experience", label: "Experiencia" },
    { href: "/education", label: "Educación" },
    { href: "/contact", label: "Contacto" },
  ]

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AH</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold">
                <span className="text-blue-400">Álvaro</span> Hermosilla
              </div>
              <div className="text-xs text-gray-400">Full-Stack Developer</div>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant={isActive(link.href) ? "default" : "ghost"}
                className={isActive(link.href) ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-slate-800"}
                asChild
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>

          {/* Social Links Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/DevAlvaroHA" target="_blank" rel="noopener noreferrer" title="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/álvaro-hermosilla-alameda-587526339" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:alvaro.hermosilla.alameda@gmail.com" title="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="container mx-auto px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                variant={isActive(link.href) ? "default" : "ghost"}
                className={`w-full justify-start ${isActive(link.href) ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                asChild
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
            <div className="pt-2 border-t border-slate-700 flex justify-center space-x-2">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/DevAlvaroHA" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/álvaro-hermosilla-alameda-587526339" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:alvaro.hermosilla.alameda@gmail.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
