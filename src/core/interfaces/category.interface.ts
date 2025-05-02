import { Document } from "./document.interface";

export interface Category {
    category: string;
    documents?: Document[];
}