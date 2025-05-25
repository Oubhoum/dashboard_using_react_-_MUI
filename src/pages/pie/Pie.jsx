import { ResponsivePie } from '@nivo/pie'
import { Box, useTheme } from '@mui/material';


const data = [
  {
    "id": "sass",
    "label": "sass",
    "value": 73,
    "color": "hsl(14, 70%, 50%)"
  },
  {
    "id": "scala",
    "label": "scala",
    "value": 593,
    "color": "hsl(331, 70%, 50%)"
  },
  {
    "id": "go",
    "label": "go",
    "value": 291,
    "color": "hsl(38, 70%, 50%)"
  },
  {
    "id": "stylus",
    "label": "stylus",
    "value": 22,
    "color": "hsl(240, 70%, 50%)"
  },
  {
    "id": "c",
    "label": "c",
    "value": 179,
    "color": "hsl(81, 70%, 50%)"
  }
];


const Pie = ({ isDashboard = false }) => {
  const theme = useTheme();

  return (
    // <div>Pie</div>
    <Box sx={{ height: isDashboard ? '300px' : '75vh', width: '100%' }}>
      <ResponsivePie
        data={data}
        theme={{
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
                "fill": theme.palette.text.primary,
                "outlineWidth": 0,
                "outlineColor": "#ffffff"
              }
            }
          },
          "grid": {
            "line": {
              "stroke": theme.palette.divider,
              "strokeWidth": 1
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
            "table": {},
            "tableCell": {},
            "tableCellValue": {}
          }
        }
        }

        enableArcLabels={isDashboard ? false : true}
        enableArcLinkLabels={isDashboard ? false : true}
        margin={isDashboard
          ?
          { top: 10, right: 0, bottom: 10, left: 0 }
          :
          { top: 40, right: 80, bottom: 80, left: 80 }
        }
        innerRadius={isDashboard ? 0.7 : 0.65}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.text.primary}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={!isDashboard ? [
          {
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            symbolShape: 'circle'
          }
        ] : []}
      />
    </Box>
  )
}

export default Pie