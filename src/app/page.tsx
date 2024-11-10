export default function Home() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Your Website
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A brief description of your website or service goes here. Make it compelling
              and interesting for your visitors.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
