import { LoadingSpinner } from "@/app/components/loading-spinner"

export default function TutorialLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 animate-pulse">
        <div>
          <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
          <div className="h-8 w-64 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-48 bg-gray-100 rounded"></div>
        </div>
        <div className="mt-4 md:mt-0 flex items-center">
          <div className="h-2 w-48 bg-gray-200 rounded"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>
        </div>

        <div className="md:col-span-3">
          <div className="h-96 bg-gray-100 rounded-lg animate-pulse mb-6"></div>
          <div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <LoadingSpinner size="md" />
      </div>
    </div>
  )
}

