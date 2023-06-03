import Image from "next/image";
import Button from "../components/Button";

const ProductCard = () => {
    return (
        <>
            <div className="w-[343px] rounded-lg sm:w-6/12">
                <Image
                    className="hidden object-cover rounded-l-lg sm:block"
                    src="/images/image-product-desktop.jpg"
                    alt="product"
                    width={300}
                    height={450}
                />

                <Image
                    className="block w-full rounded-t-lg sm:hidden"
                    src="/images/image-product-mobile.jpg"
                    alt="product"
                    width={300}
                    height={450}
                />
            </div>
            <div className="sm:w-6/12 h-full sm:p-8 bg-white rounded-b-lg sm:rounded-r-lg sm:rounded-l-none p-6 w-[343px]">
                <p className="font-montserrat text-xs uppercase tracking-[5px] mb-5 text-theme-aurometal-saurus">perfume</p>

                <h1 className="font-fraunces text-[2rem] font-bold leading-8 text-theme-gunmetal">
                    Gabrielle Essence Eau De Parfum
                </h1>

                <p className="mt-6 font-montserrat text-sm leading-[23px] text-theme-aurometal-saurus">
                    A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </p>

                <div className="flex items-center mt-7">
                    <span className="text-3xl tracking-wide font-fraunces text-theme-dark-cyan-500">$149.99</span>
                    <span className="ml-5 text-sm font-medium line-through text-theme-aurometal-saurus">$169.99</span>
                </div>

                <Button
                    icon={<Image width={16} height={16} src="/images/icon-cart.svg" alt="cart-icon" />}
                    className="w-full font-medium text-center font-montserrat mt-7"
                >
                    Add to Cart
                </Button>
            </div>
        </>
    );
};

export default ProductCard;