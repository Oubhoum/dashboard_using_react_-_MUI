import { Box, useTheme } from '@mui/material';

import { ResponsiveLine } from '@nivo/line';


const data = [
  {
    "id": "japan",
    "data": [
      {
        "x": "plane",
        "y": 173
      },
      {
        "x": "helicopter",
        "y": 175
      },
      {
        "x": "boat",
        "y": 237
      },
      {
        "x": "train",
        "y": 246
      },
      {
        "x": "subway",
        "y": 81
      },
      {
        "x": "bus",
        "y": 159
      },
      {
        "x": "car",
        "y": 160
      },
      {
        "x": "moto",
        "y": 30
      },
      {
        "x": "bicycle",
        "y": 38
      },
      {
        "x": "horse",
        "y": 272
      },
      {
        "x": "skateboard",
        "y": 134
      },
      {
        "x": "others",
        "y": 108
      }
    ]
  },
  {
    "id": "france",
    "data": [
      {
        "x": "plane",
        "y": 95
      },
      {
        "x": "helicopter",
        "y": 241
      },
      {
        "x": "boat",
        "y": 132
      },
      {
        "x": "train",
        "y": 16
      },
      {
        "x": "subway",
        "y": 34
      },
      {
        "x": "bus",
        "y": 224
      },
      {
        "x": "car",
        "y": 222
      },
      {
        "x": "moto",
        "y": 25
      },
      {
        "x": "bicycle",
        "y": 110
      },
      {
        "x": "horse",
        "y": 27
      },
      {
        "x": "skateboard",
        "y": 165
      },
      {
        "x": "others",
        "y": 24
      }
    ]
  },
  {
    "id": "us",
    "data": [
      {
        "x": "plane",
        "y": 33
      },
      {
        "x": "helicopter",
        "y": 97
      },
      {
        "x": "boat",
        "y": 277
      },
      {
        "x": "train",
        "y": 103
      },
      {
        "x": "subway",
        "y": 208
      },
      {
        "x": "bus",
        "y": 185
      },
      {
        "x": "car",
        "y": 110
      },
      {
        "x": "moto",
        "y": 132
      },
      {
        "x": "bicycle",
        "y": 47
      },
      {
        "x": "horse",
        "y": 227
      },
      {
        "x": "skateboard",
        "y": 20
      },
      {
        "x": "others",
        "y": 299
      }
    ]
  },
  {
    "id": "germany",
    "data": [
      {
        "x": "plane",
        "y": 206
      },
      {
        "x": "helicopter",
        "y": 281
      },
      {
        "x": "boat",
        "y": 0
      },
      {
        "x": "train",
        "y": 258
      },
      {
        "x": "subway",
        "y": 278
      },
      {
        "x": "bus",
        "y": 263
      },
      {
        "x": "car",
        "y": 260
      },
      {
        "x": "moto",
        "y": 38
      },
      {
        "x": "bicycle",
        "y": 262
      },
      {
        "x": "horse",
        "y": 209
      },
      {
        "x": "skateboard",
        "y": 121
      },
      {
        "x": "others",
        "y": 46
      }
    ]
  },
  {
    "id": "norway",
    "data": [
      {
        "x": "plane",
        "y": 29
      },
      {
        "x": "helicopter",
        "y": 272
      },
      {
        "x": "boat",
        "y": 174
      },
      {
        "x": "train",
        "y": 132
      },
      {
        "x": "subway",
        "y": 46
      },
      {
        "x": "bus",
        "y": 31
      },
      {
        "x": "car",
        "y": 255
      },
      {
        "x": "moto",
        "y": 195
      },
      {
        "x": "bicycle",
        "y": 206
      },
      {
        "x": "horse",
        "y": 287
      },
      {
        "x": "skateboard",
        "y": 178
      },
      {
        "x": "others",
        "y": 262
      }
    ]
  }
]


const Line = ({ isDashboard = false }) => {
  const theme = useTheme();

  return (
    <Box sx={{
      height: isDashboard ? '280px' : '75vh',
      width: '100%'
    }}>
      <ResponsiveLine

        theme={
          // You can pass this object to the `theme` property
          {
            "text": {
              "fontSize": 11,
              "fill": theme.palette.text.primary,
              "outlineWidth": 0,
              "outlineColor": "#ffffff"
            },
            "axis": {
              "domain": {
                "line": {
                  "stroke": theme.palette.divider,
                  "strokeWidth": 1
                }
              },
              "legend": {
                "text": {
                  "fontSize": 12,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "#ffffff"
                }
              },
              "ticks": {
                "line": {
                  "stroke": theme.palette.divider,
                  "strokeWidth": 1
                },
                "text": {
                  "fontSize": 11,
                  "fill": theme.palette.text.secondary,
                  "outlineWidth": 0,
                  "outlineColor": "#ffffff"
                }
              }
            },
            "grid": {
              "line": {
                "stroke": theme.palette.divider,
                "strokeWidth": 0
              }
            },
            "legends": {
              "title": {
                "text": {
                  "fontSize": 11,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "#ffffff"
                }
              },
              "text": {
                "fontSize": 11,
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
              },
              "ticks": {
                "line": {},
                "text": {
                  "fontSize": 10,
                  "fill": theme.palette.text.primary,
                  "outlineWidth": 0,
                  "outlineColor": "#ffffff"
                }
              }
            },
            "annotations": {
              "text": {
                "fontSize": 13,
                "fill": theme.palette.text.primary,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
              },
              "link": {
                "stroke": "#000000",
                "strokeWidth": 1,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
              },
              "outline": {
                "stroke": "#000000",
                "strokeWidth": 2,
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
              },
              "symbol": {
                "fill": "#000000",
                "outlineWidth": 2,
                "outlineColor": "#ffffff",
                "outlineOpacity": 1
              }
            },
            "tooltip": {
              // @ts-ignore
              "wrapper": {},
              "container": {
                "background": theme.palette.background.default,
                "color": theme.palette.text.primary,
                "fontSize": 12
              },
              "basic": {},
              "chip": {},
              "tableCell": {},
              "tableCellValue": {}
            }
          }
        }

        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        curve="catmullRom"
        axisBottom={{ legend: isDashboard ? null : 'Transportation', legendOffset: 46 }}
        axisLeft={{ legend: isDashboard ? null : 'Count', legendOffset: -50 }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            translateX: 100,
            itemWidth: 80,
            itemHeight: 22,
            symbolShape: 'circle'
          }
        ]}
      />
    </Box>
  )
}

export default Line;