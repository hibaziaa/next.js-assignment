export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Oops... looks like the page you're looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
