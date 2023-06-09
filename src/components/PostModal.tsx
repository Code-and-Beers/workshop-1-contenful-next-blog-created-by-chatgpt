import { motion } from "framer-motion";
import { PostEntry } from "@/types";

const modalVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.5 },
};

interface PostModalProps {
  entry: PostEntry;
  onClose: () => void;
}

export const PostModal = ({ entry, onClose }: PostModalProps) => {
  const image = entry.fields.image?.fields.file.url;

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-60 flex justify-center items-center"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white rounded-lg p-6 m-4 max-w-2xl relative"
        whileHover={{ scale: 1 }}
      >
        {/* Close Icon */}
        <span className="absolute text-gray-800 top-2 right-2 text-2xl cursor-pointer" onClick={onClose}>
          &times;
        </span>

        <img className="rounded" src={image} alt={entry.fields.title} />

        {/* Title */}
        <motion.h2 className="text-2xl font-semibold text-gray-800">{entry.fields.title}</motion.h2>

        {/* Scrollable Content */}
        <motion.div className="overflow-auto max-h-60 mt-4">
          <motion.p className="text-gray-800">{entry.fields.pagraphOne}</motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
