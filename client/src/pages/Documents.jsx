import { motion } from "framer-motion";
import { useState } from "react";
import { DocumentsData, generateDriveUrls } from "../data/documentsData";

const Documents = () => {
  const [previewModal, setPreviewModal] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories for filter
  const categories = ["All", ...new Set(DocumentsData.map(doc => doc.category))];

  // Filter documents based on search and category
  const filteredDocuments = DocumentsData.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    const colors = {
      "Technical": "text-blue-400 bg-blue-400/20",
      "Administrative": "text-green-400 bg-green-400/20",
      "Safety": "text-red-400 bg-red-400/20",
      "Research": "text-purple-400 bg-purple-400/20",
      "Workshop": "text-orange-400 bg-orange-400/20"
    };
    return colors[category] || "text-gray-400 bg-gray-400/20";
  };

  const handlePreview = (document) => {
    const urls = generateDriveUrls(document.driveId);
    setPreviewModal({ ...document, previewUrl: urls.preview });
  };

  const handleDownload = (document) => {
    const urls = generateDriveUrls(document.driveId);
    window.open(urls.download, '_blank');
  };

  const PreviewModal = () => {
    if (!previewModal) return null;

    return (
      <motion.div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setPreviewModal(null)}
      >
        <motion.div
          className="bg-gray-800 rounded-2xl border border-neon-blue/30 max-w-4xl w-full h-[80vh] overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-gray-700 flex justify-between items-center">
            <h3 className="text-xl font-orbitron font-bold text-white">
              {previewModal.title}
            </h3>
            <button
              onClick={() => setPreviewModal(null)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="h-full">
            <iframe
              src={previewModal.previewUrl}
              className="w-full h-full"
              title={previewModal.title}
            />
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h1
        className="text-4xl md:text-5xl font-orbitron font-black text-center mb-4 text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Documents Library
      </motion.h1>

      <motion.p
        className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Access our comprehensive collection of robotics documentation, guides, and resources.
      </motion.p>

      {/* Search and Filter Section */}
      <motion.div
        className="mb-8 flex flex-col md:flex-row gap-4 items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800/50 border border-neon-blue/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-colors"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-neon-blue text-black"
                  : "bg-gray-800/50 text-gray-400 border border-gray-600 hover:border-neon-blue/50 hover:text-neon-blue"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Documents Table */}
      <motion.div
        className="bg-gray-800/50 rounded-2xl border border-neon-blue/30 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900/50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neon-blue uppercase tracking-wider">
                  S.No
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neon-blue uppercase tracking-wider">
                  Document Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neon-blue uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-neon-blue uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-neon-blue uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {filteredDocuments.map((document, index) => (
                <motion.tr
                  key={document.id}
                  className="hover:bg-gray-700/30 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-white font-medium">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-white font-medium font-orbitron">
                      {document.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(document.category)}`}>
                      {document.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-300 max-w-xs">
                    <div className="truncate">
                      {document.description}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="flex justify-center gap-2">
                      <motion.button
                        onClick={() => handlePreview(document)}
                        className="bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-600/30 hover:border-blue-400 transition-all duration-300 text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Preview
                      </motion.button>
                      <motion.button
                        onClick={() => handleDownload(document)}
                        className="bg-green-600/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-lg hover:bg-green-600/30 hover:border-green-400 transition-all duration-300 text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Download
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-2">No documents found</div>
            <div className="text-gray-500">Try adjusting your search or filter criteria</div>
          </div>
        )}
      </motion.div>

      {/* Stats Section */}
      

      <PreviewModal />
    </div>
  );
};

export default Documents;