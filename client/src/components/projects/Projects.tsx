import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Netflix Clone",
    description: "A Netflix clone built with HTML and CSS",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37",
    tags: ["HTML", "CSS"]
  },
  {
    title: "CG Batman Concept Trailer",
    description: "CG Batman concept trailer built in Blender",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    tags: ["Blender", "3D Animation", "CG"]
  },
  {
    title: "Quiz App",
    description: "Quiz app using JavaScript which requests API",
    image: "https://www.shutterstock.com/image-vector/vector-realistic-isolated-neon-sign-260nw-1819189721.jpg",
    tags: ["JavaScript", "API", "HTML"]
  }
];

export default function Projects() {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-8"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <Card className="overflow-hidden h-full rounded-[15px] border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700">
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
