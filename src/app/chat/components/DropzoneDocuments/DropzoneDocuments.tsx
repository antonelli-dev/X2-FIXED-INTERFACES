import { Dropzone } from "@/core/components/ui/Dropzone/Dropzone";
import { FileUp, Upload } from "lucide-react";
import { useState } from "react";
import { DropzoneOptions } from "react-dropzone";

export const DropzoneDocuments = () => {

    const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);

    const options: DropzoneOptions = {
        noClick: true,
        maxFiles: 1,
        multiple: false,
        noKeyboard: true,
        accept: {
            'application/pdf': ['.pdf'],
        },
    };

    return (
        <Dropzone options={options}>
            <div className="w-full h-full flex flex-row items-center justify-center text-black">
                <div className="flex flex-col items-center">
                    {acceptedFiles?.length == 0 && (<>
                        <FileUp className="text-[#BDDDFF]" size={89}></FileUp>
                        <span>Drag & drop file to upload or</span>
                        <button onClick={() => open()} className="cursor-pointer bg-[#ABD1F5] w-full p-2 h-8 rounded-md flex flex-row justify-between items-center gap-2">
                            <span>Upload</span>
                            <Upload></Upload>
                        </button>
                    </>)}
                </div>
            </div>
        </Dropzone>
    );
}