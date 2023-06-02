import Image from "next/image";
import Button from "../components/Button";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-[#f2ebe3]">
      <div className="flex w-[600px] h-[450px] flex-row mobile:flex-col mobile:mx-4 mobile:h-auto top-0">
        <div className="w-6/12 h-auto rounded-lg mobile:w-full mobile:rounded-l-lg">
          <Image
            className="object-cover rounded-l-lg mobile:hidden"
            src="/images/image-product-desktop.jpg"
            alt="product"
            width={300}
            height={450}
          />

          <Image
            className="hidden rounded-t-lg mobile:block mobile:w-full"
            src="/images/image-product-mobile.jpg"
            alt="product"
            width={300}
            height={450}
          />
        </div>
        <div className="w-6/12 h-full p-8 bg-white rounded-r-lg mobile:p-6 mobile:rounded-b-lg mobile:rounded-r-none mobile:w-full">
          <p className="font-sans text-xs uppercase tracking-[5px] mb-5">perfume</p>

          <h1 className="font-serif text-3xl font-bold leading-8 text-[#1C232B]">
            Gabrielle Essence Eau De Parfum
          </h1>

          <p className="mt-6 text-sm leading-[23px] tracking-wide text-[#6C7289]">
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
          </p>

          <div className="flex items-center mt-7">
            <span className="font-serif text-3xl tracking-wide text-primary-500">$149.99</span>
            <span className="ml-4 line-through text-[#70768F]">$169.99</span>
          </div>

          <Button
            icon={<Image width={16} height={16} src="/images/icon-cart.svg" alt="cart-icon" />}
            className="w-full text-center mt-7"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </main>
  );
}