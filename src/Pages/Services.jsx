import ServiceCard from "../Component/servicescard";

function Services() {

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      desc: "Modern responsive websites using React and latest technologies."
    },
    {
      icon: "🤖",
      title: "AI Automation",
      desc: "Smart AI solutions to automate business processes."
    },
    {
      icon: "▶️",
      title: "YouTube Automation",
      desc: "Grow YouTube channels with content strategies."
    }
  ];


  return (
    <section className="bg-gray-50 py-16">

      <h1 className="text-5xl font-bold text-center text-slate-800 mb-12">
        Our Services
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {
          services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              desc={service.desc}
            />
          ))
        }

      </div>

    </section>
  );
}

export default Services;