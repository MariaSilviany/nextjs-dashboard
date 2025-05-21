import React from "react";

const SkeletonDaftarProduk: React.FC = () => {
  return (
    <div className="p-4 animate-pulse">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-4 py-4 border-b border-gray-300">
          <div className="w-16 h-16 bg-gray-300 rounded"></div>
          <div className="flex-1 space-y-2">
            <div className="w-1/3 h-4 bg-gray-300 rounded"></div>
            <div className="w-1/4 h-4 bg-gray-200 rounded"></div>
            <div className="w-1/5 h-4 bg-gray-100 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonDaftarProduk;