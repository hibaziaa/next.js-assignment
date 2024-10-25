
export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="mb-6">I am an aspiring web developer passionate about building functional websites.</p>
      </div>
  );
}
