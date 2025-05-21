// components/SkeletonAdminPesanan.tsx
import React from "react";

const SkeletonAdminPesanan: React.FC = () => {
  return (
    <div className="animate-pulse divide-y divide-gray-300">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="grid grid-cols-7 gap-4 py-4 px-4">
          <div className="h-4 bg-gray-300 rounded col-span-1" />
          <div className="h-4 bg-gray-300 rounded col-span-1" />
          <div className="h-4 bg-gray-300 rounded col-span-1" />
          <div className="h-4 bg-gray-300 rounded col-span-1" />
          <div className="h-4 bg-gray-300 rounded col-span-1" />
          <div className="h-4 bg-gray-300 rounded col-span-1" />
          <div className="h-4 bg-gray-300 rounded col-span-1" />
        </div>
      ))}
    </div>
  );
};

export default SkeletonAdminPesanan;