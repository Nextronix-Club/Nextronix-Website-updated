// documentsData.js
export const DocumentsData = [
  {
    id: 1,
    title: "About Us",
    driveId: "1OJbsLY6k2yiBbqjU2ygeMHNBcdukbvy8", //  Google Drive file ID
    category: "Administrative",
    description: "Nextronix Club Overview and Mission Statement",
  },
  
];

// Helper function to generate Google Drive URLs
export const generateDriveUrls = (driveId) => {
  return {
    preview: `https://drive.google.com/file/d/${driveId}/preview`,
    download: `https://drive.google.com/uc?export=download&id=${driveId}`,
    view: `https://drive.google.com/file/d/${driveId}/view`
  };
};