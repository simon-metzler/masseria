import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
export default function Overview() {
  const sections = [
    {
      id: 1,
      link: "#pricing",
      title: "Tiny Houses – Minimalismus trifft Komfort",
      description:
        "Unsere Tiny Houses vereinen gemütliches Wohnen mit modernem Design und maximaler Naturverbundenheit. Sie sind perfekt für alle, die sich nach Ruhe und Entschleunigung sehnen, ohne auf Komfort verzichten zu müssen. Genieße den Charme eines kleinen, gut durchdachten Wohnraums mit großen Fenstern, die einen herrlichen Blick in die Natur bieten. Unsere Tiny Houses sind mit allem ausgestattet, was du für einen entspannten Aufenthalt brauchst.",
      image: "/tiny_houses.jpg",
      button_title: "Jetzt Buchen",
    },
    {
      id: 2,
      link: "#pricing",
      title: "Wohnmobil-Stellplätze – Freiheit mit Komfort",
      description:
        "Reisen mit dem Wohnmobil bedeutet Freiheit. Unsere Stellplätze bieten dir eine idyllische Umgebung mit ausreichend Platz und Annehmlichkeiten, um dich wohlzufühlen. Ob du nur für eine Nacht oder einen längeren Aufenthalt bleibst, hier kannst du entspannen, die Natur genießen und die wunderschöne italienische Landschaft erkunden. Die Stellplätze verfügen über Stromanschlüsse und sanitäre Einrichtungen, damit du deinen Aufenthalt sorgenfrei genießen kannst.",
      image: "/wohnmobil.jpg",
      button_title: "Jetzt Buchen",
    },
    {
      id: 3,
      link: "#pricing",
      title: "Glamping – Natur trifft Luxus",
      description:
        "Camping einmal anders: In unseren stilvollen Glamping-Zelten schläfst du unter dem Sternenhimmel, ohne auf Komfort verzichten zu müssen. Unsere großzügig eingerichteten Zelte bieten gemütliche Betten, stimmungsvolle Beleuchtung und stilvolle Möbel, die dein Outdoor-Erlebnis zu etwas ganz Besonderem machen. Verbinde das Abenteuer der Natur mit den Annehmlichkeiten eines Boutique-Hotels und genieße unvergessliche Abende in einer einzigartigen Umgebung.",
      image: "/glamping.jpg",
      button_title: "Jetzt Buchen",
    },
    {
      id: 4,
      link: "benefits",
      title: "Vorteile – Warum du bei uns buchen solltest",
      description:
        "Unsere Lage bietet die ideale Mischung aus Abgeschiedenheit und guter Erreichbarkeit. Du kannst hier Ruhe und Erholung inmitten der Natur genießen und bist dennoch nur wenige Minuten von charmanten Dörfern und Sehenswürdigkeiten entfernt. Wir legen großen Wert auf Nachhaltigkeit und bieten dir eine umweltfreundliche Unterkunft, die im Einklang mit der Natur steht. Erkunde die Umgebung, probiere lokale Spezialitäten und erlebe Italien von seiner schönsten Seite.",
      image: "/vorteile.jpg",
      button_title: "Zu den Vorteilen",
    },
    {
      id: 5,
      link: "about",
      title: "Über uns – Dein Rückzugsort in Italien",
      description:
        "Mitten in einer traumhaften Landschaft liegt unsere Villa, die dir einen einzigartigen Ort für Erholung bietet. Umgeben von Olivenhainen und mediterraner Natur kannst du hier das Dolce Vita genießen. Unser Ziel ist es, dir einen unvergesslichen Aufenthalt zu ermöglichen, bei dem du den Stress des Alltags hinter dir lässt. Egal, ob du dich für ein Tiny House, einen Wohnmobil-Stellplatz oder Glamping entscheidest – bei uns findest du den perfekten Ort für deine Auszeit.",
      image: "/team.jpg",
      button_title: "Mehr über uns",
    },
  ];
  return (
    <div className="container mx-auto p-6" id="overview">
      <div className="flex flex-col space-y-12 gap-24">
        {sections.map((section, index) => (
          <div
            key={section.id}
            id={section.link}
            className={`flex flex-col md:flex-row items-center justify-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } gap-8`}
          >
            <Image
              src={section.image}
              alt={section.title}
              width={1000}
              height={1000}
              className="w-auto h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <p className="mb-4">{section.description}</p>
              <Link className="btn btn-primary" href={section.link}>
                {section.button_title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
