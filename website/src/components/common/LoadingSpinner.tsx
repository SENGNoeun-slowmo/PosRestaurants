import React from 'react'
interface LoadingSpinnerProps{
    size?:"sm"|"md"|"lg";
    color?:string;
    message?:string;
}
function LoadingSpinner({
size="md",
color="text-blue-600",
message="Loading..."
}:LoadingSpinnerProps) {
    const sizeClasses={
        sm:"h-6 w-6",
        md:"h-10 w-10",
        lg:"h-14 w-14" 
    };
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-8">
      <div className="relative">
        <div
          className={`${sizeClasses[size]} animate-spin rounded-full border-4 border-solid border-current border-r-transparent ${color}`}
        />
      </div>

      {message && (
        <p className="text-gray-600 text-sm font-medium">{message}</p>
      )}
    </div>
  )
}

export default LoadingSpinner