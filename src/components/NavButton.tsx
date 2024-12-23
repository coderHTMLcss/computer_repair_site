import { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { title } from "process";

type Props = {
    icon: LucideIcon,
    label: string,
    href: string
}

const NavButton = ({ icon: Icon, label, href }: Props) => {
    return (
        <Button
            variant="ghost"
            size='icon'
            aria-label={label}
            title={title}
            className="rounded-full"
            asChild
        >
            {href ? (
                <Link href={href}>
                    <Icon />
                </Link>
            ) : (<Icon />)}
        </Button>
    )
}

export default NavButton