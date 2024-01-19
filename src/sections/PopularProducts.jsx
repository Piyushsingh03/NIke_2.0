import PopularProductCard from "../Components/PopularProductCard"
import { products } from "../Constants"


const PopularProducts = () => {
    return (
        <section id="product"
            className="max-container max-sm:mt-12 "
        >
            <div className="flex justify-start gap-5 flex-col">
                <h2 className="text-4xl font-palanquin font-bold" >Our <span className="text-coral-red">Popular</span> Products</h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Elevate your style and performance with our popular shoes, combining cutting-edge design with unparalleled comfort for every occasion. Step into a world where fashion meets function seamlessly.</p>
            </div>

            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                {products.map((product) => (
                    <PopularProductCard
                        key={product.name}
                        {...product}
                    />
                ))}

            </div>


        </section>
    )
}

export default PopularProducts