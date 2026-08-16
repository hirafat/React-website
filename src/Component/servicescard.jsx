function ServiceCard({icon, title, desc}) {

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">

      <div className="text-5xl mb-4">
        {icon}
      </div>

      <h2 className="text-2xl font-bold mb-3">
        {title}
      </h2>

      <p className="text-gray-600">
        {desc}
      </p>

    </div>
  );
}

export default ServiceCard;