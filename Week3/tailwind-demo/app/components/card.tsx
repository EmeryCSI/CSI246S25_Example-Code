interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    /* bg-background: uses your theme's background color
       border: adds a border on all sides
       border-foreground: uses theme's foreground color for the border
       rounded-lg: adds large rounded corners to the card
       p-6: adds padding on all sides (larger than p-4)
       shadow-lg: adds a large drop shadow for depth/elevation effect */
    <div className="bg-background border border-foreground rounded-lg p-6 shadow-lg">
      {/* text-xl: extra large text size
          font-semibold: makes text semi-bold (between normal and bold)
          text-primary: uses theme's primary color for text
          mb-2: adds margin to the bottom (spacing below the title) */}
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>

      {/* text-foreground: uses theme's foreground color for text
          mb-4: adds more margin to bottom (larger spacing below description) */}
      <p className="text-foreground mb-4">{description}</p>

      {/* Renders any child components passed into the Card */}
      {children}
    </div>
  );
}
