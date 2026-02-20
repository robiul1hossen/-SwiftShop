const ProductSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="aspect-square bg-gray-200"></div>

      <div className="p-5">
        {/* Category Badge */}
        <div className="h-4 w-20 bg-gray-200 rounded-full mb-3"></div>

        {/* Rating */}
        <div className="flex gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-gray-200 rounded"></div>
          ))}
        </div>

        {/* Title */}
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>

        {/* Description */}
        <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-3">
          <div className="h-5 w-16 bg-gray-200 rounded"></div>
          <div className="h-8 w-8 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
