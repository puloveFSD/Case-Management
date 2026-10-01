import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const CasePieChart = ({ completed, pending }) => {

    const data = [
        {
            name: "Completed Cases",
            value: completed
        },
        {
            name: "Pending Cases",
            value: pending
        }
    ];

    const COLORS = ["#3d7f5c", "#ffc107"];

    return (
        <div className="chart-container">

            <h3>Case Status Overview</h3>

            <ResponsiveContainer width="100%" height={350}>

                <PieChart>

                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        dataKey="value"
                        label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                        }
                    >

                        {data.map((entry, index) => (
                            <Cell
                                key={index}
                                fill={COLORS[index]}
                            />
                        ))}

                    </Pie>

                    <Tooltip />

                    <Legend />

                </PieChart>

            </ResponsiveContainer>

        </div>
    );
};

export default CasePieChart;