import PricingElement from "./PricingElement";

export default function PricingTable() {
  const products = [
    {
      id: 1,
      name: "Tiny House",
      price: 100,
      image: "/tiny_houses.jpg",
      message: "Most popular",
    },
    {
      id: 2,
      name: "Wohnmobil-Stellplatz",
      price: 50,
      image: "/wohnmobil.jpg",
      message: "Best price",
    },
    {
      id: 3,
      name: "Glamping-Zelt",
      price: 70,
      image: "/glamping.jpg",
      message: "Recommended",
    },
  ];

  return (
    <div className="container md:px-40 mx-auto p-6 my-40" id="pricing">
      <h1 className="text-3xl font-bold">Buchen</h1>
      <div className="flex flex-row gap-12 justify-center items-end">
        {products.map((data, index) => {
          return <PricingElement key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
}
