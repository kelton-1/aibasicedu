import { LoadingSpinner } from "@/app/components/loading-spinner"

export default function DashboardLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 animate-pulse">
        <div>
          <div className="h-8 w-64 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-48 bg-gray-100 rounded"></div>
        </div>
        <div className="mt-4 md:mt-0 flex items-center">
          <div className="h-10 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-gray-100 rounded-lg animate-pulse"></div>
        ))}
      </div>

      <div className="mb-6 animate-pulse">
        <div className="h-10 w-full max-w-md bg-gray-200 rounded mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-gray-100 rounded-lg"></div>
          ))}
        </div>
      </div>

      <div className="animate-pulse">
        <div className="h-10 w-full max-w-md bg-gray-200 rounded mb-6"></div>
        <div className="h-64 bg-gray-100 rounded-lg"></div>
      </div>

      <div className="flex justify-center mt-8">
        <LoadingSpinner size="md" />
      </div>
    </div>
  )
}

