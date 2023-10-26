import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSecContext } from "@/context/active-sec-context";

import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold?: {}) {
    const { ref, inView } = useInView(threshold);
    const { setActiveSection, timeLastClicked } = useActiveSecContext()

    useEffect(() => {
        if (inView && Date.now() - timeLastClicked > 1000) {
            setActiveSection(sectionName)
        }
    }, [inView, setActiveSection, timeLastClicked, sectionName])

    return { ref }
};
