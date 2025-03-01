import Image from "next/image";

export default function Page() {
  const people = [
    {
      id: 1,
      firstname: "Max",
      lastname: "Mustermann",
      age: 25,
      email: "maxmustermann@mustermail.com",
      description:
        "I like to code and play video games. I am a very active person and I love to travel.",
    },
    {
      id: 2,
      firstname: "Erika",
      lastname: "Musterfrau",
      age: 30,
      email: "erikamusterfrau@mustermail.com",
      description:
        "I like to read and watch movies. I am a very calm person and I love to cook.",
    },
    {
      id: 3,
      firstname: "Hans",
      lastname: "Muster",
      age: 35,
      email: "hansmuster@mustermail.com",
      description:
        "I like to play soccer and go hiking. I am a very sporty person and I love to listen to music.",
    },
  ];

  return (
    <div className="flex flex-row p-12 gap-4 justify-evenly">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Über uns</h1>
        <p>
          Wir sind ein Team von drei Personen, die gerne zusammenarbeiten und
          gemeinsam Projekte umsetzen.
        </p>
        <h2 className="font-bold text-xl">Unsere Teammitglieder</h2>
        <ul className="flex flex-col gap-12">
          {people.map((person) => (
            <li key={person.id}>
              <p>
                <span className="font-bold">{person.firstname}</span>{" "}
                <span>{person.lastname}</span>
              </p>
              <p>{person.age} Jahre alt</p>
              <a className="text-blue-300" href="mailto:name@email.com">
                {person.email}
              </a>
              <p>{person.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative w-[350px] h-auto">
        <Image
          src="/team.jpg"
          alt="Team"
          width={700} // Use actual image size
          height={408} // Maintain original aspect ratio
          className="rounded-lg shadow-2xl object-contain"
        />
      </div>
    </div>
  );
}
