import React from 'react'

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { createTheme, CssBaseline, Grid, Paper, ThemeProvider, ToggleButton, ToggleButtonGroup } from '@mui/material';



const data = [
  {
    uv: 20,
    pv: 2400,
    amt: 2400,
  },
];

const App: React.FunctionComponent = () => {

  const theme = createTheme({ palette: { mode: "dark" }});
  const [target, setTarget] = React.useState<string | null>("cpu");

  const handleTargetChange = (event: React.MouseEvent<HTMLElement>, newTarget: string | null) => setTarget(newTarget);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid container spacing={1} style={{ padding: 10, flex: 1, height: "100vh", maxHeight: "100vh" }}>
        <Grid item sm={3} xs="auto" width="100%">
          <Paper style={{ padding: 10 }} elevation={3}>
              <ToggleButtonGroup style={{ width: "100%" }} onChange={handleTargetChange} value={target} orientation="vertical" exclusive>
                <ToggleButton style={{ flex: 1 }} value="cpu">CPU 5%</ToggleButton>
                <ToggleButton style={{ flex: 1 }} value="gpu">GPU 15%</ToggleButton>
                <ToggleButton style={{ flex: 1 }} value="ram">RAM 33%</ToggleButton>
              </ToggleButtonGroup>
          </Paper>
        </Grid>

        <Grid item sm={9} xs={12}>
          <Paper style={{ height: "100%" }} elevation={3}>

            <ResponsiveContainer>
              <AreaChart
                data={data}
                margin={{
                  top: 20,
                  right: 15,
                  left: -15,
                  bottom: 0,
                }}>
                <XAxis tick={false} />
                <YAxis type="number" domain={[0, 100]} />
                <Tooltip />
                <Area type="linear" dataKey="uv" strokeWidth="3px" stroke="#8884d8" fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>

          </Paper>
        </Grid>
      </Grid>

    </ThemeProvider>
  );
};


export default App;
