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
    image: "data:image/jpeg;base64,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",
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