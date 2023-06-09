import { motion } from "framer-motion";

const heroVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 p-20">
      <motion.h1
        className="text-4xl font-bold text-white"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        Bienvenido a Nuestro Blog de Programación
      </motion.h1>
    </section>
  );
};
