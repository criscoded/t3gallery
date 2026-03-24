"use client";

import { useUploadThing } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
    const $ut = useUploadThing(...args);

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const selectedFiles = Array.from(e.target.files);
        console.log("Starting upload for", selectedFiles.length, "files");
        const result = await $ut.startUpload(selectedFiles);

        if (result) {
            console.log("Upload result:", result);
        }
    };

    return {
        inputProps: {
            onChange,
            // Hardcode to true to avoid hydration mismatch without useEffect
            multiple: true,
            accept: "image/*",
        },
        isUploading: $ut.isUploading,
    };
};

export function SimpleUploadButton() {
    const router = useRouter();

    const { inputProps, isUploading } = useUploadThingInputProps("imageUploader", {
        onClientUploadComplete: (res) => {
            console.log("CLIENT: Upload complete event received!", res);
            alert("Upload completed successfully!");
            router.refresh();
            // Force reload if refresh isn't enough to see the new data
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        },
        onUploadError: (error) => {
            console.error("CLIENT: Upload error reported:", error);
            alert(`Upload failed: ${error.message}`);
        },
        onUploadBegin: (name) => {
            console.log("CLIENT: Uploading started for:", name);
        }
    });

    return (
        <div className="flex items-center">
            <label 
                htmlFor="upload-button" 
                className={`cursor-pointer flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium tracking-wide uppercase text-xs hover:opacity-90 transition-all ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {isUploading ? (
                    <span className="flex items-center gap-2">
                         <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Uploading...
                    </span>
                ) : (
                    <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>
                        Upload
                    </span>
                )}
            </label>
            <input 
                id="upload-button" 
                type="file" 
                className="sr-only" 
                {...inputProps} 
                disabled={isUploading}
            />
        </div>
    );
}
