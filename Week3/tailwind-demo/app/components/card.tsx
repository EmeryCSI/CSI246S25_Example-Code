interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div className="bg-background border border-foreground rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-foreground mb-4">{description}</p>
      {children}
    </div>
  );
}
