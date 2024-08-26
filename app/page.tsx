import Image from "next/image";

export default function CareersPage() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#e82230] shadow-md font-sans">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Image src="/logo.png" alt="Our Telekom" width={80} height={80} />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {["Personal", "Business", "Enterprise", "Shop", "TTV", "MSELEN"].map((item) => (
                  <a key={item} href="#" className="border-transparent text-white hover:border-white hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
              {["News", "About Us", "Help"].map((item) => (
                <a key={item} href="#" className="text-white hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-between font-sans">
        <section className="w-full h-screen relative flex items-center justify-center">
          <Image
            src="/inspiring-telecom-image.jpg"
            alt="Inspiring Our Telekom Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="brightness-50"
          />
          <div className="z-10 text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Shape the Future of Connectivity
            </h1>
            <p className="text-xl md:text-2xl mb-8">
            Join the Connection.
            </p>
            <a
              href="#explore"
              className="inline-block px-8 py-4 bg-[#e82230] text-white text-lg font-semibold rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Opportunities
            </a>
          </div>
        </section>

        <section id="explore" className="w-full bg-white py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12 text-center text-[#e82230]">Why Choose Our Telekom?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Innovation", icon: "🚀", description: "Be at the forefront of technological advancements" },
                { title: "National Impact", icon: "🌍", description: "Develop solutions that connect communities and shape the future of communication across the country." },
                { title: "Career Growth", icon: "📈", description: "Continuous learning opportunities and a clear path for professional development" }
              ].map((benefit) => (
                <div key={benefit.title} className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-[#e82230]">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-[#e82230] text-white py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Culture of Innovation</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              At Our Telekom, we foster a culture of collaboration, creativity, and continuous improvement. 
              Our diverse team of experts works together to push the boundaries of what's possible in telecommunications.
            </p>
            <div className="flex justify-center">
              <Image 
                src="/team-collaboration.jpg" 
                alt="Our Telekom Team Collaboration" 
                width={800} 
                height={400} 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>

        <section className="w-full bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12 text-center text-[#e82230]">Employee Benefits</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {[
                { title: "Flexible Work", icon: "🏠" },
                { title: "Health & Wellness", icon: "🏥" },
                { title: "Learning & Development", icon: "🎓" },
                { title: "Competitive Salary", icon: "💰" },
                { title: "Team Building", icon: "🎉" },
                { title: "Work-Life Balance", icon: "⚖️" },
                { title: "ANOTHER BENEFIT"},
                { title: "ANOTHER BENEFIT"}
              ].map((benefit) => (
                <div key={benefit.title} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="text-3xl mb-3">{benefit.icon}</div>
                  <h3 className="text-lg font-medium text-gray-800">{benefit.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="w-full bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Make Your Mark?</h2>
            <p className="text-xl mb-8">INSERT CLICHE PHRASE HERE</p>
            <a
              href="https://third-party-job-listings.com/telcoconnect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#e82230] text-white text-lg font-semibold rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View Open Positions
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}