import { Category } from "@/core/interfaces/category.interface";

interface Props {
    category: Category
};

export const CategoryItem = ({ category }: Props) => {
    return (
        <div className="cursor-pointer w-full bg-white shadow rounded-md p-2 truncate">
            {category.category}
        </div>
    );
};