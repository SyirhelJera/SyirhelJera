export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Black Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg text-gray-300">Hi, I'm Vincent! An aspiring software engineer & future pilot.</p>
      </section>

      {/* Video Section */}
      <section className="h-screen flex items-center justify-center bg-gray-800">
        <div className="w-full max-w-4xl">
          <iframe
            className="w-full h-[400px] md:h-[500px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/ULx1CkqLbnc?si=fysRy_3iI8w7eW4N"
            title="YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* White Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-white text-black">
        <h2 className="text-4xl font-bold">My Projects</h2>
        <p className="mt-4 text-lg">Check out some of my latest work below.</p>
      </section>
    </main>
  );
}
