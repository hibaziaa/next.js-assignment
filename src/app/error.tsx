"use client";
export default function ErrorPage() {
  return    <div className="flex items-center justify-center min-h-screen bg-red-100">
  <div className="text-center">
      <h1 className="text-4xl font-bold text-red-600">Oops! Something went wrong.</h1>
      <p className="mt-4 text-lg text-red-500">We couldn't load the page you were looking for.</p>
      <a href="/" className="mt-6 inline-block px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700">
          Go Back Home
      </a>
  </div>
</div>
}
