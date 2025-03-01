import React from "react";

const VorteilePage = () => {
  const vorteile = [
    {
      title: "Atemberaubende Lage",
      description:
        "Unsere Villa liegt inmitten der wunderschönen italienischen Landschaft mit spektakulären Ausblicken auf die Natur.",
      image: "https://source.unsplash.com/200x200/?landscape,nature",
    },
    {
      title: "Nachhaltige Unterkunft",
      description:
        "Wir legen großen Wert auf Umweltfreundlichkeit – von Solarenergie bis hin zu regionalen Materialien.",
      image: "https://source.unsplash.com/200x200/?eco,green",
    },
    {
      title: "Exklusive Privatsphäre",
      description:
        "Genieße deine Auszeit in einer ruhigen und privaten Umgebung, fernab von überfüllten Touristenorten.",
      image: "https://source.unsplash.com/200x200/?villa,privacy",
    },
    {
      title: "Perfekt für Naturliebhaber",
      description:
        "Erkunde die malerischen Wanderwege, genieße Outdoor-Aktivitäten oder entspanne in der ruhigen Umgebung.",
      image: "https://source.unsplash.com/200x200/?hiking,nature",
    },
    {
      title: "Kulinarische Erlebnisse",
      description:
        "Probieren Sie die besten regionalen Spezialitäten und Weine, frisch aus der Umgebung.",
      image: "https://source.unsplash.com/200x200/?food,wine",
    },
    {
      title: "Entspannung und Wellness",
      description:
        "Unsere Villa bietet dir die Möglichkeit, dich in einem idyllischen Umfeld zu erholen und zu entspannen.",
      image: "https://source.unsplash.com/200x200/?spa,relax",
    },
  ];
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Warum unsere Villa der perfekte Ort für dich ist
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {vorteile.map((vorteil, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-2">{vorteil.title}</h2>
            <p className="text-gray-700">{vorteil.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VorteilePage;
