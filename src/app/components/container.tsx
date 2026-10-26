import { cn } from "@/lib/utils";

interface Props {
    className?: string;
    children: React.ReactNode;
}

export function Container({ className, children }: Props) {
    return <div className={cn("max-w-350 mx-auto", className)}>{children}</div>;
}
