import { LoadingSpinner } from "@/app/components/loading-spinner"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mb-4" />
        <h2 className="text-xl font-medium text-gray-700">Loading...</h2>
        <p className="text-gray-500">Preparing your AI learning experience</p>
      </div>
    </div>
  )
}

