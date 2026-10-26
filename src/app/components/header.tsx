import { cn } from "@/lib/utils";
import { Container } from "./container";

interface Props {
    className?: string;
}

export function Header({ className }: Props) {
    return (
        <header className={cn("", className)}>
            <Container>
                <h1>Hello World</h1>
            </Container>
        </header>
    );
}
