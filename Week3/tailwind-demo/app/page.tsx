import Card from "./components/card";
import Table from "./components/table";

export default function Page() {
  const tableData = [
    { name: "John Doe", role: "Developer", status: "Active" },
    { name: "Jane Smith", role: "Designer", status: "On Leave" },
  ];

  return (
    // 1. Container
    // min-h-screen: minimum height of 100vh (takes up the whole screen height)
    // bg-background: uses theme's background color
    // p-8: adds padding on all sides (left, right, top, bottom)
    <div className="min-h-screen bg-background p-8">
      {/* 2. max-w-4xl: sets maximum width to approximately 896px
          mx-auto: centers the div horizontally by setting left and right margins to auto */}
      <div className="max-w-4xl mx-auto">
        {/* Typography Examples */}
        {/* mb-12: adds large margin to bottom for spacing between sections */}
        <section className="mb-12">
          {/* text-4xl: extra extra large text size
              font-bold: makes text bold
              text-primary: uses theme's primary color
              mb-4: margin bottom for spacing */}
          <h1 className="text-4xl font-bold text-primary mb-4">Tailwind CSS</h1>
          {/* text-lg: large text size
              text-foreground: uses theme's foreground (main text) color
              mb-2: smaller bottom margin */}
          <p className="text-lg text-foreground mb-2">
            Common Tailwind features
          </p>
        </section>

        {/* Custom Colors Demo */}
        <section className="mb-12">
          {/* text-2xl: extra large text (smaller than text-4xl)
              font-semibold: semi-bold weight (between normal and bold) */}
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Theme Colors
          </h2>
          {/* space-x-4: adds horizontal spacing between child elements
              flex: creates a flexbox container for horizontal layout
              justify-center: centers flex items horizontally */}
          <div className="space-x-4 flex justify-center">
            {/* px-4: horizontal padding (left and right)
                py-2: vertical padding (top and bottom)
                bg-primary: primary background color
                text-white: white text
                rounded-lg: large rounded corners */}
            <button className="px-4 py-2 bg-primary text-white rounded-lg">
              Primary Button
            </button>
            <button className="px-4 py-2 bg-secondary text-white rounded-lg">
              Secondary Button
            </button>
            {/* border: adds border on all sides
                border-foreground: uses foreground color for border
                text-black: black text in light mode
                dark:text-white: white text when in dark mode */}
            <button className="px-4 py-2 bg-background text-black rounded-lg border border-foreground dark:text-white">
              Background Color Button
            </button>
          </div>
        </section>

        {/* Spacing & Layout */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Spacing & Layout
          </h2>
          {/* space-y-4: adds vertical spacing between child elements */}
          <div className="space-y-4">
            {/* p-4: padding on all sides
                bg-blue-900: dark blue background
                rounded-lg: large rounded corners
                text-yellow-300: light yellow text (default/light mode)
                dark:text-white: white text when in dark mode */}
            <div className="p-4 bg-blue-900 rounded-lg text-yellow-300 dark:text-white">
              <p>Padding (p-4)</p>
            </div>
            {/* m-4: margin on all sides (space OUTSIDE the element)
                p-4: padding on all sides (space INSIDE the element) */}
            <div className="m-4 p-4 bg-green-900 rounded-lg text-yellow-300 dark:text-white">
              <p>Margin (m-4)</p>
            </div>
            {/* flex: flexbox container (arranges children horizontally by default)
                space-x-4: horizontal spacing between flex items
                justify-center: centers items horizontally */}
            <div className="flex space-x-4 justify-center">
              {/* bg-purple-900: dark purple background */}
              <div className="p-4 bg-purple-900 rounded-lg">
                {/* text-purple-100: very light purple text for contrast */}
                <p className="text-purple-100">Flex Item 1</p>
              </div>
              <div className="p-4 bg-purple-900 rounded-lg">
                <p className="text-purple-100">Flex Item 2</p>
              </div>
            </div>
          </div>
        </section>

        {/* Colors & Backgrounds */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Colors & Backgrounds
          </h2>
          {/* grid: creates a grid container (2D layout)
              grid-cols-2: 2 columns by default
              md:grid-cols-4: 4 columns on medium screens and larger
              gap-4: spacing between all grid items (both rows and columns) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* bg-red-500: medium red background
                text-white: white text for contrast
                rounded-lg: rounded corners */}
            <div className="p-4 bg-red-500 text-white rounded-lg">Red</div>
            <div className="p-4 bg-blue-500 text-white rounded-lg">Blue</div>
            <div className="p-4 bg-green-500 text-white rounded-lg">Green</div>
            <div className="p-4 bg-yellow-500 text-white rounded-lg">
              Yellow
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Typography
          </h2>
          {/* space-y-4: vertical spacing between elements */}
          <div className="space-y-4">
            {/* text-3xl: extra extra large text
                font-bold: bold font weight */}
            <h3 className="text-3xl font-bold">Heading 3</h3>
            {/* text-lg: large text size */}
            <p className="text-lg">Large paragraph text</p>
            {/* text-sm: small text size
                text-gray-500: medium gray text color */}
            <p className="text-sm text-gray-500">Small gray text</p>
            {/* font-mono: monospace font (like code)
                bg-gray-800: dark gray background
                p-2: small padding
                rounded: small rounded corners */}
            <p className="font-mono bg-gray-800 p-2 rounded">
              Monospace font example
            </p>
          </div>
        </section>

        {/* Borders & Shadows */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Borders & Shadows
          </h2>
          {/* grid-cols-2: 2 columns
              gap-4: spacing between grid items */}
          <div className="grid grid-cols-2 gap-4">
            {/* border-2: 2px border width
                border-gray-300: light gray border color */}
            <div className="p-4 border-2 border-gray-300 rounded-lg">
              Border example
            </div>
            {/* shadow-lg: large drop shadow for depth */}
            <div className="p-4 shadow-lg dark:border dark:border-gray-700 rounded-lg">
              Shadow example
            </div>
          </div>
        </section>

        {/* Hover & Focus States */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Hover & Focus States
          </h2>
          <div className="space-y-4">
            {/* hover:bg-blue-600: darker blue on hover
                focus:ring-2: adds 2px ring when focused
                focus:ring-blue-500: blue colored ring
                focus:outline-none: removes default browser outline */}
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Hover me
            </button>
            {/* transition-colors: smooth color transitions
                duration-300: transition takes 300ms
                hover:bg-green-600: darker green on hover */}
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg transition-colors duration-300 hover:bg-green-600">
              Smooth transition
            </button>
          </div>
        </section>

        {/* Responsive Design */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Responsive Design
          </h2>
          {/* grid-cols-1: 1 column by default (mobile)
              md:grid-cols-2: 2 columns on medium screens (768px) and up
              lg:grid-cols-3: 3 columns on large screens (1024px) and up */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* bg-orange-100: very light orange (light mode)
                dark:bg-orange-900: dark orange (dark mode) */}
            <div className="p-4 bg-orange-100 dark:bg-orange-900 rounded-lg">
              {/* text-orange-800: dark orange text (light mode)
                  dark:text-orange-100: light orange text (dark mode) */}
              <p className="text-orange-800 dark:text-orange-100">Column 1</p>
            </div>
            <div className="p-4 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <p className="text-orange-800 dark:text-orange-100">Column 2</p>
            </div>
            <div className="p-4 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <p className="text-orange-800 dark:text-orange-100">Column 3</p>
            </div>
          </div>
        </section>

        {/* Card Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Card Examples
          </h2>
          {/* grid-cols-1: 1 column on mobile
              md:grid-cols-2: 2 columns on medium screens and up
              gap-4: spacing between cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Custom Card component with title, description, and children */}
            <Card
              title="Primary Card"
              description="This card uses our primary color theme"
            >
              {/* Children prop: button rendered inside the card */}
              <button className="px-4 py-2 bg-primary text-white rounded-lg">
                Primary Action
              </button>
            </Card>

            <Card
              title="Secondary Card"
              description="This card uses our secondary color theme"
            >
              <button className="px-4 py-2 bg-secondary text-white rounded-lg">
                Secondary Action
              </button>
            </Card>
          </div>
        </section>

        {/* Table Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Table Example
          </h2>
          {/* Custom Table component receives data as a prop */}
          <Table data={tableData} />
        </section>
      </div>
    </div>
  );
}
