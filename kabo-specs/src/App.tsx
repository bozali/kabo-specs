import React, { useEffect } from 'react'

import { createTheme, CssBaseline, Grid, Paper, ThemeProvider, ToggleButton, ToggleButtonGroup } from '@mui/material';

import GPUUsageGraph from './components/GPUUsageGraph';
import { UsageData } from './models/UsageData';
import { IpcRendererEvent } from 'electron';

// import { IpcRendererEvent } from 'electron';

const { ipcRenderer } = window.require("electron");


// import * as http from "http";


const data: UsageData[] = [
  { gpu: { temperature: 15, utilization: 10 }, cpu: { utilization: 50 }  },
  { gpu: { temperature: 15, utilization: 30 }, cpu: { utilization: 50 }  },
  { gpu: { temperature: 15, utilization: 50 }, cpu: { utilization: 50 }  },
  { gpu: { temperature: 15, utilization: 77 }, cpu: { utilization: 50 }  },
  { gpu: { temperature: 15, utilization: 45 }, cpu: { utilization: 50 }  },
  { gpu: { temperature: 15, utilization: 30 }, cpu: { utilization: 50 }  },
  { gpu: { temperature: 15, utilization: 55 }, cpu: { utilization: 50 }  },
];


const App: React.FunctionComponent = () => {

  const theme = createTheme({ palette: { mode: "dark" }});
  const [target, setTarget] = React.useState<string | null>("cpu");
  const [sample, setSample] = React.useState<string | null>(null);

  //useEffect(() => {
    ipcRenderer.send("read-txt");

    ipcRenderer.on("read-success", (event: IpcRendererEvent, data: any) => {
      console.log("IPCRENDERER RECEIVED DATA");
      console.log(data);
    });
  //});

  const handleTargetChange = (event: React.MouseEvent<HTMLElement>, newTarget: string | null) => setTarget(newTarget);


	// fs.readFile("C:\\Users\\alibo\\OneDrive\\Desktop\\test.txt", "utf-8", (err, data) => {
  //   console.log(data);
	// 	// mainWindow.webContents.emit("read-txt", data);
	// });


  /*
  var server = new http.Server(socket => {
    socket.on("data", data => console.log(data));
  });
  
  server.listen(5555, "127.0.0.1");
  */

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Grid container spacing={1} style={{ padding: 10, flex: 1, height: "100vh", maxHeight: "100vh", overflow: "hidden" }}>
        <Grid item sm={3} xs="auto" width="100%">
          <Paper style={{ padding: 10 }} elevation={3}>
              <ToggleButtonGroup style={{ width: "100%" }} onChange={handleTargetChange} value={target} orientation="vertical" exclusive>
                <ToggleButton style={{ flex: 1 }} value="cpu">CPU 5%</ToggleButton>
                <ToggleButton style={{ flex: 1 }} value="gpu">GPU {data[data.length - 1].gpu.utilization}%</ToggleButton>
                <ToggleButton style={{ flex: 1 }} value="ram">RAM 33%</ToggleButton>
              </ToggleButtonGroup>
          </Paper>
        </Grid>

        <Grid item sm={9} xs={12}>
          <Paper style={{ height: "100%" }} elevation={3}>
            
            <GPUUsageGraph data={data.map(x => x.gpu)} />

          </Paper>
        </Grid>
      </Grid>

    </ThemeProvider>
  );
};


export default App;
