"use client"
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
// import Chart from "react-apexcharts";

const Chart = dynamic(() => import('react-apexcharts'), {ssr: false})

// type Props = {}

const BarChart = (props) => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
      setIsClient(true)
    }, [])
    

    const state = {
        options: {
            chart: {
                id: "basic-bar",
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"]
            },
            // stroke: {
            //     curve: 'smooth',
            // },
            stroke: {
                show: true,
                width: 1,
                colors: ['#fff']
            },
            colors: ['#B1924E', "#E7DDC8"],
            plotOptions: {
                bar: {
                    borderRadius: 5,
                    // horizontal: true,
                }
            },
            tooltip: {
                theme: 'dark',
                shared: true,
                intersect: false
            },
        },
        series: [
            {
                name: "This week",
                data: [45, 52, 38, 45, 19, 23, 20]
            },
            {
                name: "Last week",
                data: [23, 62, 50, 49, 60, 70, 81]
            },
        ],
    };
    return (
      <div>
        {isClient && (
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width={"500"}
            height={300}
          />
        )}
      </div>
    );
}

export default BarChart