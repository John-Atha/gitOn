import React from 'react'
import Chart from "react-apexcharts";

interface Serie {
    name: string,
    data: any,
}

export interface ChartProps {
    categories: string[],
    series: Serie[],
    id: string,
    width?: number | string,
}
export const BarChart = ({ categories, series, id, width }: ChartProps) => {
    const options = {
        chart: {
            id,
        },
        xaxis: {
            categories,
        },
    }

    return (
        <Chart
            options={options}
            series={series}
            type="bar"
            width={width || "100%"}
        />
    )
}