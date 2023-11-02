import { navLinks} from '@/lib/data';

export type SectionName = typeof navLinks[number]["name"];
export type HeadingProps = {
    children: React.ReactNode;
};
