import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface MYCateCardData {
    faicon: IconDefinition;
    typeText: string;
}

export default function CategoryCard({ faicon, typeText }: MYCateCardData) {
    return (
        <div className="min-w-[150px] md:min-w-[200px] min-h-[150px] md:min-h-[200px] rounded-md border-2 shadow-lg flex gap-3 flex-col justify-center items-center">
            <FontAwesomeIcon icon={faicon} className="text-4xl" />
            <h2 className="text-2xl">{typeText}</h2>
        </div>
    )
}
