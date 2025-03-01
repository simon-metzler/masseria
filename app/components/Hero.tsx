import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src="/masseria.jpg"
          alt="masseria"
          width={1000}
          height={1000}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Urlaub!</h1>
          <p className="py-6">
            Erlebe pure Entspannung inmitten der Natur in unseren stilvollen
            Tiny Houses, auf idyllischen Wohnmobil-Stellplätzen oder beim
            luxuriösen Glamping.
          </p>
          <Link className="btn btn-primary" href="#tiny-houses">
            Umsehen
          </Link>
        </div>
      </div>
    </div>
  );
}
