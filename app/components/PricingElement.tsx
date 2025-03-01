import Image from "next/image";

export default function PricingElement({ data }: { data: any }) {
  return (
    <div className="card w-96 bg-base-100 shadow-sm">
      <figure>
        <Image src={data.image} width={1000} height={1000} alt="image" />
      </figure>
      <div className="card-body">
        <span className="badge badge-xs badge-warning">{data.message}</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{data.name}</h2>
          <span className="text-xl">{data.price}€</span>
        </div>
        <div className="mt-6">
          <button className="btn btn-primary btn-block">Buchen</button>
        </div>
      </div>
    </div>
  );
}
