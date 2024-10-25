export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold">
          &copy; 2024 My Portfolio. All rights reserved.
        </p>

        <p className="mt-2 text-gray-400">
          Follow us on
          <a
            href="https://twitter.com"
            target="_blank"
            className="ml-2 hover:text-blue-500"
          >
            Twitter/X
          </a>{" "}
          |
          <a
            href="https://facebook.com"
            target="_blank"
            className="ml-2 hover:text-blue-500"
          >
            Facebook
          </a>{" "}
          |
          <a
            href="https://linkedin.com"
            target="_blank"
            className="ml-2 hover:text-blue-500"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
