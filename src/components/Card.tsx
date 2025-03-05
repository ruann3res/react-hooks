
interface ICardProps {
    title: string;
    children: React.ReactNode;
}

export function Card({ children,title }:ICardProps) {
    return (
    <div className="bg-white shadow-md rounded-md p-6 border">
        <header className="text-xl font-semibold pb-4 mb-4 border-b">{title}</header>
        {children}
    </div>

    );
}