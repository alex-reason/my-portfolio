import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const { pending } = useFormStatus();
    const buttonClassName = "bg-gray-900 dark:bg-gray-50 dark:bg-opacity-90 hover:bg-gray-950 dark:hover:bg-opacity-100  text-gray-200 dark:text-gray-900 px-3 py-1 rounded-full focus:scale-[1.05] hover:scale-[1.05] w-[8rem] disabled:scale-100 disabled:opacity-70 transition-all flex-centered";

    return (
        <button
            className={buttonClassName}
            type="submit"
            disabled={pending}
            aria-label="Aria Submit"
        >
            {
                pending ?
                    (<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />)
                    :
                    "Submit"
            }
        </button>
    )
};
