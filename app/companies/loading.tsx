import { LoadingSpinner } from "@/app/components/loading-spinner"

export default function CompaniesLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-pulse">
        <div className="h-10 w-64 bg-gray-200 rounded-lg mb-2"></div>
        <div className="h-4 w-96 max-w-full bg-gray-100 rounded-lg"></div>
      </div>

      <div className="flex justify-center mb-8 animate-pulse">
        <div className="h-10 w-96 bg-gray-200 rounded-lg"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="bg-gray-100 rounded-lg h-24 mb-2"></div>
            <div className="h-4 w-20 mx-auto bg-gray-100 rounded-lg"></div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <LoadingSpinner size="lg" />
      </div>
    </div>
  )
}

