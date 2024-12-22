import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import CategoryCard from "./CategoryCard";
import ItemCard from "./ItemCard"; // Assuming you have an ItemCard component
import ProductList from "./AllItems";

interface Product {
    img: string;
    discount: string;
    name: string;
    disPrice: string;
    ogPrice: string;
    rating: number;
}

interface Category {
    faicon: IconDefinition;
    typeText: string;
}

interface MyItemsListData {
    featureText: string;
    Type: string;
    Products: Product[];
    Categorys: Category[];
    allProducts: Product[];
}

export default function ItemsList({ Products, Categorys, Type, featureText, allProducts }: MyItemsListData) {
    return (
        <div className="w-full flex justify-end items-center pb-10">
            <div className="w-[95%] flex justify-end items-center flex-col gap-3">
                <div className="w-full flex justify-start gap-3 items-center">
                    <div className="bg-webOrg w-4 h-7 md:w-6 md:h-12 lg:w-10 lg:h-16"></div>
                    <h3 className="text-xl md:text-3xl lg:text-3xl font-bold text-webOrg">{featureText}</h3>
                </div>
                <div className="w-full flex justify-start gap-3 items-center">
                    <h2 className="text-3xl md:text-5xl lg:text-[55px] font-bold">{Type}</h2>
                </div>

                {allProducts.length == 0 ? <div className="flex justify-start scrollView py-5 items-center gap-5">
                    {Products && Products.length > 0 ? (
                        Products.map((item, index) => (
                            <ItemCard
                                key={index}
                                img={item.img}
                                discount={item.discount}
                                pName={item.name}
                                pDisPrice={item.disPrice}
                                pOgPrice={item.ogPrice}
                                prating={item.rating}
                            />
                        ))
                    ) : null}

                    {Categorys && Categorys.length > 0 ? (
                        Categorys.map((category, index) => (
                            <CategoryCard
                                key={index}
                                faicon={category.faicon}
                                typeText={category.typeText}
                            />
                        ))
                    ) : null}
                </div> : <ProductList allProducts={allProducts} />}
            </div>
        </div>
    );
}
