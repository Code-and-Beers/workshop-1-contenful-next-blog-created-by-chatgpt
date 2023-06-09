import { PostEntry } from "@/types";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";
import { PostModal } from "./PostModal";

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const imageVariants = {
  hover: { scale: 1.05 },
};

const textVariants = {
  hover: { color: "#4F46E5" }, // Color de transición al pasar el ratón
};

export const PostCard = ({ entry, index }: { entry: PostEntry; index: number }) => {
  const image = entry.fields.image?.fields.file.url;
  const controls = useAnimation();
  const [isModalOpen, setModalOpen] = useState(false);

  console.log(isModalOpen)

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 my-4 transition-colors duration-300 ease-in-out"
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
      transition={{ delay: 1 * index, duration: 1 }}
    >
      <motion.img
        className="rounded"
        src={image}
        alt={entry.fields.title}
        variants={imageVariants}
        transition={{ duration: 0.3 }}
      />
      <motion.h2
        className="text-black text-xl font-semibold mt-4 transition-colors duration-300 ease-in-out"
        variants={textVariants}
        onClick={() => setModalOpen(true)}
      >
        {entry.fields.title}
      </motion.h2>
      <motion.p
        className="text-gray-800 transition-colors duration-300 ease-in-out"
        variants={textVariants}
      >
        {entry.fields.description}
      </motion.p>
      {isModalOpen && <PostModal entry={entry} onClose={() => setModalOpen(false)} />}
    </motion.div>
  );
};
