import { useState } from "react";
import ItemCard from "./ItemCard";

interface allProduct {
    img: string;
    discount: string;
    name: string;
    disPrice: string;
    ogPrice: string;
    rating: number;
}

interface MyallProduct {
    allProducts: allProduct[];
}

const ProductList = ({ allProducts }: MyallProduct) => {
    const [visibleProducts, setVisibleProducts] = useState(3); // Initially show 3 products

    const loadMore = () => {
        setVisibleProducts(prev => prev + 3); // Load 3 more products each time
    };

    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex justify-start pr-4 gap-5 items-center flex-wrap">
                {allProducts.slice(0, visibleProducts).map((item, index) => (
                    <ItemCard
                        key={index}
                        img={item.img}
                        discount={item.discount}
                        pName={item.name}
                        pDisPrice={item.disPrice}
                        pOgPrice={item.ogPrice}
                        prating={item.rating}
                    />
                ))}
            </div>

            {visibleProducts < allProducts.length && (
                <button
                    className="w-52 h-12 bg-webOrg text-white border-0 presseffect rounded-md"
                    type="button"
                    onClick={loadMore}
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default ProductList;
