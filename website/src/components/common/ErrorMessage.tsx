import React from 'react'
interface ErrorMessageProps{
    message:string,
    title?:string,
    onRetry?:()=>void;
}
function ErrorMessage({
    message,
    title="Error",
    onRetry
}:ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10 px-6 text-center">
      <div className="rounded-full bg-red-100 p-4">
        <svg
          className="h-10 w-10 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-red-700 mb-2">{title}</h3>
        <p className="text-gray-600 max-w-md">{message}</p>
      </div>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          ព្យាយាមម្តងទៀត
        </button>
      )}
    </div>
  )
}

export default ErrorMessage