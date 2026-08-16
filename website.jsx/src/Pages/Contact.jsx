function Contact() {

  

  return (
    <section className="bg-gradient-to-br from-blue-50 to-gray-100 min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Let's Work Together
          </h1>

          <p className="text-gray-600 text-lg leading-8 mb-8">
            Have a project in mind? We'd love to hear from you.
            Whether you need a website, AI automation, SEO, or
            digital marketing, our team is here to help.
          </p>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <div className="bg-slate-800 text-white p-3 rounded-full">📍</div>
              <div>
                <h3 className="font-bold">Address</h3>
                <p className="text-gray-600">Lahore, Pakistan</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-slate-800 text-white p-3 rounded-full">📞</div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-600">+92 300 1234567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-slate-800 text-white p-3 rounded-full">✉️</div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-600">info@minhajsolutions.com</p>
              </div>
            </div>

          </div>
        </div>


        <div className="bg-white shadow-2xl rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-6 text-center">
            Send Us a Message
          </h2>

          <form >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-4 rounded-xl mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-4 rounded-xl mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 p-4 rounded-xl mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>


            <button
              type="submit"
              className="w-full bg-slate-800 text-white py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition"
            >
              Send Message 🚀
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;