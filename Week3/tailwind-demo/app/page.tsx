import Card from "./components/card";
import Table from "./components/table";
import Row from "./components/row";

export default function Page() {
  const tableData = [
    { name: "John Doe", role: "Developer", status: "Active" },
    { name: "Jane Smith", role: "Designer", status: "On Leave" },
  ];

  return (
    // 1. Container
    //min-h-screen is the minimum height of the screen (take up the whole screen)
    //p-8 is the padding of the page
    <div className="min-h-screen bg-background p-8">
      {/* 2. Max-width 4-xl is approximately 1200px */}
      {/* mx-auto mens center the div horizontally */}
      <div className="max-w-4xl mx-auto">
        {/* Typography Examples */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">Tailwind CSS</h1>
          <p className="text-lg text-foreground mb-2">
            Common Tailwind features
          </p>
        </section>

        {/* Custom Colors Demo */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Theme Colors
          </h2>
          {/* space-x-4 is the space between the buttons */}
          {/* alternatively you can use flex to position the buttons */}
          <div className="space-x-4 flex justify-center">
            <button className="px-4 py-2 bg-primary text-white rounded-lg">
              Primary Button
            </button>
            <button className="px-4 py-2 bg-secondary text-white rounded-lg">
              Secondary Button
            </button>
            <button className="px-4 py-2 bg-background text-white rounded-lg border border-foreground">
              Background Color Button
            </button>
          </div>
        </section>

        {/* Spacing & Layout */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Spacing & Layout
          </h2>
          <div className="space-y-4">
            {/* dark: lets you set different colors for dark mode vs light mode */}
            <div className="p-4 bg-blue-900 rounded-lg">
              <p>Padding (p-4)</p>
            </div>
            {/* margin is space OUTSIDE of the border of the element */}
            <div className="m-4 p-4 bg-green-900 rounded-lg">
              <p>Margin (m-4)</p>
            </div>
            {/* flex is a flexbox container */}
            {/* flex is for positioning block elements horizontally */}
            {/* space-x-4 is the space between the flex items */}
            <div className="flex space-x-4 justify-center">
              <div className="p-4 bg-purple-900 rounded-lg">
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
          {/* grid is a grid container */}
          {/* grid-cols-2 is the number of columns in the grid */}
          {/* gap-4 is the space between the grid items */}
          {/* grid allows for 2 dimensional layout (rows and columns) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
          <div className="space-y-4">
            <h3 className="text-3xl font-bold">Heading 3</h3>
            <p className="text-lg">Large paragraph text</p>
            <p className="text-sm text-gray-500">Small gray text</p>
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
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border-2 border-gray-300 rounded-lg">
              Border example
            </div>
            <div className="p-4 shadow-lg rounded-lg">Shadow example</div>
          </div>
        </section>

        {/* Hover & Focus States */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Hover & Focus States
          </h2>
          <div className="space-y-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Hover me
            </button>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-orange-100 dark:bg-orange-900 rounded-lg">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card
              title="Primary Card"
              description="This card uses our primary color theme"
            >
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
          <Table data={tableData} />
        </section>
      </div>
    </div>
  );
}
