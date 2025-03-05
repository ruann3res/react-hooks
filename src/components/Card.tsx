
interface ICardProps {
    title: string;
    children: React.ReactNode;
}

export function Card({ children,title }:ICardProps) {
    return (
    <div className="bg-white shadow-md rounded-md p-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        {children}
    </div>

    );
}