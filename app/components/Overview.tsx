import Image from "next/image";

export default function Overview() {
  const sections = [
    {
      title: "Tiny Houses – Minimalismus trifft Komfort",
      description:
        "Unsere Tiny Houses vereinen gemütliches Wohnen mit modernem Design und maximaler Naturverbundenheit. Sie sind perfekt für alle, die sich nach Ruhe und Entschleunigung sehnen, ohne auf Komfort verzichten zu müssen. Genieße den Charme eines kleinen, gut durchdachten Wohnraums mit großen Fenstern, die einen herrlichen Blick in die Natur bieten. Unsere Tiny Houses sind mit allem ausgestattet, was du für einen entspannten Aufenthalt brauchst.",
      image: "/masseria.jpg",
    },
    {
      title: "Wohnmobil-Stellplätze – Freiheit mit Komfort",
      description:
        "Reisen mit dem Wohnmobil bedeutet Freiheit. Unsere Stellplätze bieten dir eine idyllische Umgebung mit ausreichend Platz und Annehmlichkeiten, um dich wohlzufühlen. Ob du nur für eine Nacht oder einen längeren Aufenthalt bleibst, hier kannst du entspannen, die Natur genießen und die wunderschöne italienische Landschaft erkunden. Die Stellplätze verfügen über Stromanschlüsse und sanitäre Einrichtungen, damit du deinen Aufenthalt sorgenfrei genießen kannst.",
      image: "/masseria.jpg",
    },
    {
      title: "Glamping – Natur trifft Luxus",
      description:
        "Camping einmal anders: In unseren stilvollen Glamping-Zelten schläfst du unter dem Sternenhimmel, ohne auf Komfort verzichten zu müssen. Unsere großzügig eingerichteten Zelte bieten gemütliche Betten, stimmungsvolle Beleuchtung und stilvolle Möbel, die dein Outdoor-Erlebnis zu etwas ganz Besonderem machen. Verbinde das Abenteuer der Natur mit den Annehmlichkeiten eines Boutique-Hotels und genieße unvergessliche Abende in einer einzigartigen Umgebung.",
      image: "/masseria.jpg",
    },
    {
      title: "Vorteile – Warum du bei uns buchen solltest",
      description:
        "Unsere Lage bietet die ideale Mischung aus Abgeschiedenheit und guter Erreichbarkeit. Du kannst hier Ruhe und Erholung inmitten der Natur genießen und bist dennoch nur wenige Minuten von charmanten Dörfern und Sehenswürdigkeiten entfernt. Wir legen großen Wert auf Nachhaltigkeit und bieten dir eine umweltfreundliche Unterkunft, die im Einklang mit der Natur steht. Erkunde die Umgebung, probiere lokale Spezialitäten und erlebe Italien von seiner schönsten Seite.",
      image: "/masseria.jpg",
    },
    {
      title: "Über uns – Dein Rückzugsort in Italien",
      description:
        "Mitten in einer traumhaften Landschaft liegt unsere Villa, die dir einen einzigartigen Ort für Erholung bietet. Umgeben von Olivenhainen und mediterraner Natur kannst du hier das Dolce Vita genießen. Unser Ziel ist es, dir einen unvergesslichen Aufenthalt zu ermöglichen, bei dem du den Stress des Alltags hinter dir lässt. Egal, ob du dich für ein Tiny House, einen Wohnmobil-Stellplatz oder Glamping entscheidest – bei uns findest du den perfekten Ort für deine Auszeit.",
      image: "/masseria.jpg",
    },
  ];
  return (
    <div className="container mx-auto p-6" id="tiny-houses">
      <div className="flex flex-col space-y-12 gap-24">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } gap-8`}
          >
            <Image
              src={section.image}
              alt={section.title}
              width={1000}
              height={1000}
              className="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="mb-4">{section.description}</p>
              <button className="btn btn-primary">Jetzt buchen</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
