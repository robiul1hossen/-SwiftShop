const ProductDetailsSkeleton = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 bg-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 animate-pulse">
      {/* Image Skeleton */}
      <div className="bg-gray-100 flex items-center justify-center p-8 rounded-3xl">
        <div className="w-full h-100 bg-gray-200 rounded-2xl"></div>
      </div>

      {/* Content Skeleton */}
      <div className="flex flex-col">
        {/* Category */}
        <div className="h-5 w-24 bg-gray-200 rounded-full mb-4"></div>

        {/* Title */}
        <div className="h-8 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-6"></div>

        {/* Rating */}
        <div className="flex items-center gap-4 mb-8">
          <div className="h-6 w-32 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-px bg-gray-200"></div>
          <div className="h-4 w-20 bg-gray-200 rounded"></div>
        </div>

        {/* Description */}
        <div className="space-y-2 mb-8">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>

        {/* Price + Quantity */}
        <div className="mt-auto pt-8 border-t border-gray-100">
          <div className="flex items-center justify-between mb-8">
            {/* Price */}
            <div>
              <div className="h-3 w-16 bg-gray-200 rounded mb-2"></div>
              <div className="h-10 w-24 bg-gray-200 rounded"></div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 bg-gray-100 p-2 rounded-2xl">
              <div className="w-10 h-10 bg-gray-200 rounded-xl"></div>
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
              <div className="w-10 h-10 bg-gray-200 rounded-xl"></div>
            </div>
          </div>

          {/* Button */}
          <div className="h-14 bg-gray-200 rounded-3xl w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
