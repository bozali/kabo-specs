import '../Sass/App.sass'
import inputData from '../../mock/input.json';
// React
import React, { useState, useEffect, Component, ReactNode } from 'react'
// Assets
import logo from '../../Assets/logo.svg'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  {
    uv: 20,
    pv: 2400,
    amt: 2400,
  },
  {
    uv: 50,
    pv: 1398,
    amt: 2210,
  },
  {
    uv: 44,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 33,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 88,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 100,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 22,
    pv: 4300,
    amt: 2100,
  },
	{
    uv: 33,
    pv: 4300,
    amt: 2100,
  },
	{
    uv: 22,
    pv: 4300,
    amt: 2100,
  },
	{
    uv: 14,
    pv: 4300,
    amt: 2100,
  },
	{
    uv: 42,
    pv: 4300,
    amt: 2100,
  },
	{
    uv: 22,
    pv: 4300,
    amt: 2100,
  },
	{
    uv: 55,
    pv: 4300,
    amt: 2100,
  },
];

const topRightData = inputData.map( (specs) =>{
  return (
    <table className = "table" style={{color: 'white'}}>
              <thead>
                <tr>
                  <th>
                    <h2>Generals</h2>
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>OS:</th>
                  <td>{specs.os}</td>
                </tr>
                <tr>
                  <th>CPU:</th>
                  <td>{specs.cpu}</td>
                </tr>
                <tr>
                  <th>GPU:</th>
                  <td>{specs.gpu}</td>
                </tr>
                <tr>
                  <th>RAM:</th>
                  <td>{specs.ram}GB</td>
                </tr>
                <tr>
                  <th>HDD:</th>
                  <td>{specs.hdd}</td>
                </tr>
                <tr>
                  <th>SSD:</th>
                  <td>{specs.ssd}</td>
                </tr>
              </tbody>
            </table>
  )
})

const bottomRightData = inputData.map( (componentUsage) =>{
  return (
    <p className ='precent'><b>{componentUsage.cpuusage}%</b></p>
  )
})

export default class App extends Component {
	public render(): ReactNode {
		return (
		<div className='app'>
				<div className='graph'>
					<ResponsiveContainer width="100%" height="100%">
						<AreaChart
							data={data}
							margin={{
								top: 30,
								right: 30,
								left: 0,
								bottom: 30,
							}}
						>
							<XAxis tick={false} />
							<YAxis />
							<Tooltip />
							<Area type="linear" dataKey="uv" strokeWidth="3px" stroke="#8884d8" fill="transparent" />
						</AreaChart>
					</ResponsiveContainer>
				</div>

				<div className='right'>
					<div className='top-right'>
            <div className ="content">
              {topRightData}
            </div>
					</div>
				
					<div className='bottom-right' style={{color: 'white'}}>
						<div className = "content">
              {bottomRightData}
            </div>
					</div>
				</div>
			</div>
		);
	}
}

//export default function App() {
//	// you should always use function components!
//	// class components are practically deprecated
//
//	// state hooks replace the the state in a function component
//	const [countHookExample, setCountHookExample] = useState(0)
//
//	// effect hooks replace the lifecycle methods in a function component
//	useEffect(
//		() => {
//			console.log('mouted')
//			return () => {
//				console.log('exited')
//			}
//		},
//		[
//			/**
//			 * variables that trigger this effect.
//			 * if [] triggers only on mounting.
//			 * if undefined trigers on every render.
//			 */
//		]
//	)
//
//	return (
//		<div className='app'>
//
//			<div className='graph'>
//				<ResponsiveContainer width="100%" height="100%">
//					<AreaChart
//						data={data}
//						margin={{
//							top: 30,
//							right: 30,
//							left: 0,
//							bottom: 30,
//						}}
//					>
//						<XAxis tick={false} />
//						<YAxis />
//						<Tooltip />
//						<Area type="linear" dataKey="uv" strokeWidth="3px" stroke="#8884d8" fill="transparent" />
//					</AreaChart>
//				</ResponsiveContainer>
//			</div>
//
//			<div className='right'>
//				<div className='top-right'>
//					Some information
//				</div>
//				
//				<div className='bottom-right'>
//					Some more information
//				</div>
//			</div>
//
//			{/*<header className='App-header'>
//				<img src={logo} className='App-logo' alt='logo' />
//				<p>
//					Edit <code>src/App.tsx</code> and save to reload.
//				</p>
//				<a
//					className='App-link'
//					href='https://reactjs.org'
//					target='_blank'
//					rel='noopener noreferrer'
//				>
//					Learn React
//				</a>
//				<div>
//					<p>
//						You have clicked the button {countHookExample} times{' '}
//						<span
//							className='button'
//							onClick={() =>
//								setCountHookExample(countHookExample + 1)
//							}
//						>
//							INC
//						</span>
//					</p>
//				</div>
//						</header>*/}
//		</div>
//	)
//}
