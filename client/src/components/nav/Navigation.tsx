import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavigationProps {
  onAboutClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
}

export default function Navigation({ onAboutClick, onProjectsClick, onContactClick }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed w-full bg-[#ffffff]/80 dark:bg-[#0d1117]/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-semibold">Portfolio</span>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={onAboutClick} 
              className="rounded-[15px] text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800/60 transition-colors duration-200"
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              onClick={onProjectsClick} 
              className="rounded-[15px] text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800/60 transition-colors duration-200"
            >
              Projects
            </Button>
            <Button 
              variant="default" 
              onClick={onContactClick} 
              className="rounded-[15px] bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 transition-colors duration-200"
            >
              Contact
            </Button>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-[15px] hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-colors duration-200"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <motion.div
                  className="flex flex-col gap-4 pt-10"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ staggerChildren: 0.1 }}
                >
                  <Button variant="ghost" onClick={onAboutClick} className="rounded-[15px] justify-start hover:bg-gray-100 dark:hover:bg-gray-800/60">About</Button>
                  <Button variant="ghost" onClick={onProjectsClick} className="rounded-[15px] justify-start hover:bg-gray-100 dark:hover:bg-gray-800/60">Projects</Button>
                  <Button variant="ghost" onClick={onContactClick} className="rounded-[15px] justify-start hover:bg-gray-100 dark:hover:bg-gray-800/60">Contact</Button>
                </motion.div>
              </SheetContent>
            </Sheet>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}