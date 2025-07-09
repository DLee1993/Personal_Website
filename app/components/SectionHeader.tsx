export default function SectionHeader({ text }: { text: string }) {
    return (
        <div className="flex gap-2">
            <div className="size-1 mt-1 bg-dark"></div>
            <h2 className="capitalize text-dark/50">{text}</h2>
        </div>
    );
}
