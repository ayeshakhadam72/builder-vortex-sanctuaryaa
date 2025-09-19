import { Search, Globe, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <span className="text-xl font-bold text-black">event</span>
            <span className="text-xl font-bold text-red-500">X</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-black font-medium">
              Événements
            </a>
          </nav>
        </div>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Rechercher de nouveaux"
              className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Side Icons */}
        <div className="flex items-center space-x-3">
          {/* Language Switcher */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex items-center space-x-1"
          >
            <Globe className="h-4 w-4" />
            <span className="text-sm">FR</span>
          </Button>

          {/* User Profile */}
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>

          {/* Mobile Menu */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Mobile Search - shown on smaller screens */}
      <div className="lg:hidden mt-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="search"
            placeholder="Rechercher de nouveaux"
            className="pl-10 pr-4 py-2 w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
    </header>
  );
}
