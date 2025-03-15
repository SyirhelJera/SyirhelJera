export default function ContactPage() {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg text-gray-300 mb-8">Let's connect! Reach out via my social media.</p>
  
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com/saijera"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 px-6 py-3 rounded-lg text-white font-bold hover:bg-pink-600 transition"
          >
            Instagram
          </a>
  
          <a
            href="https://github.com/SyirhelJera"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 px-6 py-3 rounded-lg text-white font-bold hover:bg-gray-700 transition"
          >
            GitHub
          </a>
  
          <a
            href="mailto:youremail@example.com"
            className="bg-blue-500 px-6 py-3 rounded-lg text-white font-bold hover:bg-blue-600 transition"
          >
            Email
          </a>
        </div>
      </main>
    );
  }
  