import { InputButton } from "@/core/components/ui/InputButton/InputButton";
import { ModalDialog } from "@/core/components/ui/ModalDialog/ModalDialog";
import { Plus } from "lucide-react";
import { DropzoneDocuments } from "../DropzoneDocuments/DropzoneDocuments";
import { useAuth } from "@/core/hooks/useAuth";
import { useFetchDocumentCategoriesByUser } from "@/core/queries/category.query";
import { CategoryItem } from "./CategoryItem";

interface Props {
    isOpen: boolean;
    onClose?: () => void;
}

export const UploadDocumentModal = ({ isOpen, onClose }: Props) => {

    const { userId } = useAuth(); 
    const { data: categoriesWithDocuments } = useFetchDocumentCategoriesByUser(userId ?? "");

    return (
        <ModalDialog isOpen={isOpen} onClose={onClose} title="Select a category to upload your document.">
            <div className="flex flex-row gap-4 h-full">
                <div className="w-[200px] min-w-[200px] h-full text-black">
                    <div className="flex flex-col gap-2 grow">
                        {categoriesWithDocuments?.map(cat => <CategoryItem key={cat.category} category={cat}></CategoryItem>)}
                    </div>

                    <InputButton type="primary" text="Add category" icon={<Plus></Plus>}></InputButton>
                </div>

                <div className="grow">
                    <DropzoneDocuments>
                      
                    </DropzoneDocuments>
                </div>
            </div>
        </ModalDialog>
    );
}