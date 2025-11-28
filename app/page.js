 "use client";
export default function HomePage () {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-white">
      <section className="text-center px-6 pt-24 pb-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[380px] h-[380px] bg-blue-200/20 rounded-fu;; blur-[120px]"></div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">Transforming Ideas<span className="block text-blue-600">Into Digital Excellence</span></h1>
        <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg md:text-xl">A modern platform built to deliver quality, style, and seamless user experience through precise digital execution.</p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue 700 transition-all hover:scale-[1.03">Learn More</button>
        </div>

        <div className="absolute bottom-[-80px] w-[90%] max-w-5xl mx-auto left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-6">
          <div className="grid md:grid-cols-3 gap-8">
             <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900">Modern UI</h3>
              <p className="text-gray-600 mt-2">Clean & stylish components designed for clarity</p>
             </div>

             <div className="text-center">
               <h3 className="text-xl font-bold text-gray-900">Optimized</h3>
               <p className="text-gray-600 mt-2">Fast,responsive layouts out of the box.</p>
             </div>

             <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900">Easy To Maintain</h3>
              <p className="text-gray-600 mt-2">Structured and simple enough for class projects.</p>
             </div>
          </div>
        </div>
      </section>

      <section className="mt-48 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-2xl border shadow hover:shadow-xl transition-all hover:scale-[1.02">
              <h3 className="text-xl font-semibold text-blue-700">User-Centered</h3>
              <p className="text-gray-600 mt-2">Every layout is crafted with the user experience in mind</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border shadow hover:shadow-xl transition-all hover:scale-[1.02]">
              <h3 className="text-xl font-semibold text-blue-700">Clean Workflow</h3>
              <p className="text-gray-600 mt-2">Organized and simple file structure - easy for learning.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border shadow hover:shadow-xl transition-all hover:scale-[1.02]">
              <h3 className="text-xl font-semibold text-blue-700">Scalable</h3>
              <p className="text-gray-600 mt-2">Build pages that expand smoothly as your project grows</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-600 text-white text-white text-center">
        <h2 className="text-4xl font-bold mb-4 drop-shadow">Ready To Begin Your Journey</h2>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">Partner with us and build a digital experience that stands out - beautifully and professionally.</p>
        <button className="mt-10 px-10 py-4 bg-white text-blue-700 rounded-xl font-bold text-lg shadow hover:bg-gray-100 transition-all hover:scale-[1.04]">Contact Us</button>
      </section>

    </main>
  )
}