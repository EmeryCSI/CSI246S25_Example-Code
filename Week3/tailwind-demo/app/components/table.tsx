interface TableProps {
  data: {
    name: string;
    role: string;
    status: string;
  }[];
}

export default function Table({ data }: TableProps) {
  return (
    // overflow-x-auto: allows horizontal scrolling on small screens if table is too wide
    <div className="overflow-x-auto">
      {/* w-full: makes table take up 100% of container width
          border-collapse: removes spacing between table cells */}
      <table className="w-full border-collapse">
        <thead>
          {/* bg-primary: uses your theme's primary background color
              text-white: sets text color to white */}
          <tr className="bg-primary text-white">
            {/* px-4: adds horizontal padding (left and right)
                py-2: adds vertical padding (top and bottom)
                text-left: aligns text to the left */}
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              /* border-b: adds a border to the bottom of each row
                 border-foreground: uses theme's foreground color for border
                 hover:bg-gray-100: light gray background on hover (light mode)
                 dark:hover:bg-gray-800: dark gray background on hover (dark mode) */
              className="border-b border-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {/* px-4 py-2: same padding as header cells */}
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2">{row.role}</td>
              <td className="px-4 py-2">
                {/* Status badge styling:
                    px-2 py-1: smaller padding for compact badge
                    text-white: white text color
                    rounded-full: makes badge pill-shaped with fully rounded corners
                    text-sm: smaller font size
                    Conditional classes: bg-secondary if Active, bg-primary if not */}
                <span
                  className={`px-2 py-1 text-white rounded-full text-sm ${
                    row.status === "Active" ? "bg-secondary" : "bg-primary"
                  }`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
