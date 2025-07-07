import Menu from "@/app/components/Menu";

export default function Header() {
    return (
        <header className="sticky top-0 left-0 p-7 flex justify-between items-center">
            <p className="font-semibold">David Lee</p>
            <Menu />
        </header>
    );
}
