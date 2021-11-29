import React from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import GPUUsage from "../models/GPUUsage";


type Props = {
  data: GPUUsage[]
};


const GPUUsageGraph: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <>
    <ResponsiveContainer>
      <AreaChart data={data} 
                 margin={{
                   top: 20,
                   right: 15,
                   left: -15,
                   bottom: 0,
                 }}>
                   
        <XAxis tick={false} />
        <YAxis type="number" domain={[0, 100]} />
        <Tooltip />
        <Area type="linear" dataKey="utilization" strokeWidth="3px" stroke="#8884d8" fill="transparent" />
      </AreaChart>
    </ResponsiveContainer>
    </>
  );
};


export default GPUUsageGraph;

