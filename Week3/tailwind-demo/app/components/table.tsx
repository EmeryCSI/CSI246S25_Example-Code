interface TableProps {
  data: {
    name: string;
    role: string;
    status: string;
  }[];
}

export default function Table({ data }: TableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="border-b border-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2">{row.role}</td>
              <td className="px-4 py-2">
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
