import { LoadingSpinner } from "@/app/components/loading-spinner"

export default function CompanyLoading() {
  return (
    <div>
      {/* Header Skeleton */}
      <div className="relative mb-12">
        <div className="h-48 md:h-64 bg-gradient-to-r from-purple-500 to-indigo-600 animate-pulse"></div>

        <div className="container px-4 md:px-6">
          <div className="relative -mt-24">
            <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse">
              <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0 bg-gray-200 rounded-lg w-24 h-24 md:w-32 md:h-32 mb-4 md:mb-0 md:mr-6"></div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="h-8 bg-gray-200 rounded w-48 mb-2"></div>
                    <div className="h-8 bg-gray-200 rounded w-32"></div>
                  </div>

                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>

                  <div className="flex flex-col sm:flex-row sm:items-center text-sm mt-4">
                    <div className="h-4 bg-gray-200 rounded w-32 mr-6 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="h-8 bg-gray-200 rounded w-40"></div>
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="container px-4 md:px-6 mb-16">
        <div className="h-12 bg-gray-200 rounded mb-8 w-full max-w-md"></div>

        <div className="space-y-8">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex animate-pulse">
              <div className="w-8 h-8 bg-gray-200 rounded-full mr-4"></div>
              <div className="flex-1">
                <div className="h-24 bg-gray-100 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <LoadingSpinner size="lg" />
        </div>
      </div>
    </div>
  )
}

