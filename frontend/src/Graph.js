// src/Graph.js
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import data from './prisoner_cost_chart_data.json'; // Import your JSON data

const Graph = () => {
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        // Transform the data into an array of objects
        const transformedData = data.years.map((year, index) => ({
            year,
            cost_adjusted: data.cost_adjusted[index], // or use data.cost_regular[index]
            cost_regular: data.cost_regular[index] // or use data.cost_adjusted[index]
        }));

        setGraphData(transformedData);
    }, []);

    return (
        <div>
            <h3>{data.labels.title}</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={graphData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" label={{ value: data.labels.x_axis, position: 'insideBottomRight', offset: -3, fontSize: "11px" }} />
                    <YAxis label={{ value: data.labels.y_axis, angle: -90, position: 'insideBottomLeft', offset: 8, fontSize: "11px"}} />
                    <Tooltip />
                    <Line type="monotone" dataKey="cost_regular" stroke="red" />
                    <Line type="monotone" dataKey="cost_adjusted" stroke="#4CAF50" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Graph;
