export default function SectionHeader({ text }: { text: string }) {
    return (
        <div className="flex gap-2 mb-5">
            <div className="size-1 mt-1 bg-dark"></div>
            <p className="capitalize text-dark/50">{text}</p>
        </div>
    );
}
