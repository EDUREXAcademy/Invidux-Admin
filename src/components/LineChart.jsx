"use client"
import dynamic from 'next/dynamic'
import React, { useEffect, useState } from 'react'
// import Chart from "react-apexcharts";
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

// type Props = {}

const LineChart = (props) => {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])


    const state = {
        options: {
            chart: {
                id: 'area-datetime',
                zoom: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"]
            },
            // yaxis: [
            //     {
            //         title: {
            //             text: 'Total Earning',
            //         },
            //     },
            //     // {
            //     //     opposite: true,
            //     //     title: {
            //     //         text: 'Series B',
            //     //     },
            //     // },
            // ],
            title: {
                text: '₦239M',
                align: 'left',
                style: {
                    fontSize: '26px',
                    fontWeight: '500',
                    fontFamily: undefined,
                    // color: '#263238'
                },
            },
            subtitle: {
                text: 'Total Earning',
                align: 'left'
            },
            stroke: {
                width: [3],
                curve: 'smooth',
                // curve: 'monotoneCubic',
            },
            colors: ['#B1924E'],
            tooltip: {
                theme: 'dark',
                // shared: true,
                intersect: false
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.9,
                    opacityTo: 0.7,
                    stops: [0, 100],
                    // gradientToColors: ["#B1924E"],
                    // gradientFromColors: ["#FFFFF"],
                    // inverseColors: true,
                }
            },
        },
        series: [
            {
                name: "Total Earnings",
                data: [30, 35, 40, 45, 50, 60, 55, 50, 39, 28, 39, 50]
            },
        ],
    };
  return (
    <div>
      {isClient && (
        <Chart
          // @ts-expect-error
          options={state.options}
          series={state.series}
          type="area"
          width={"500"}
          height={300}
        />
      )}
    </div>
  );
}

export default LineChart