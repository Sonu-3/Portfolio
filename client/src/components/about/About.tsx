import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex flex-col items-center text-center gap-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-8 border-black dark:border-white"
      >
        <img
          src="https://i.pinimg.com/1200x/90/fb/b4/90fbb45bafd8ed37d3170954dc7e9029.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1"
      >
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Akank</h1>
        <p className="text-muted-foreground text-lg mb-6">
          A curious creator, exploring the world of code and art—from Python, HTML, CSS, and JavaScript projects to sketches and 3D CG animations.
        </p>

        <div className="flex gap-4 justify-center">
          <a href="https://github.com/Sonu-3" target="_blank" rel="noopener noreferrer">          
            <Button variant="default" size="icon" className="bg-black hover:bg-gray-800 dark:bg-white dark:text-black" link:>
            <FaGithub className="h-5 w-5" />
          </Button>
          <Button variant="default" size="icon" className="bg-black hover:bg-gray-800 dark:bg-white dark:text-black">
            <FaLinkedin className="h-5 w-5" />
          </Button>
          <Button variant="default" size="icon" className="bg-black hover:bg-gray-800 dark:bg-white dark:text-black">
            <FaTwitter className="h-5 w-5" />
          </Button>
            </a>

        </div>
      </motion.div>
    </div>
  );
}
