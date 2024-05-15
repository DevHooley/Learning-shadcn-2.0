'use client';

// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/line
import { ResponsiveLine } from '@nivo/line';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveLine = ({ data }: { data: Array<object> }) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 'auto',
        max: 'auto',
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="basis"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'transportation',
        legendOffset: 36,
        legendPosition: 'middle',
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'count',
        legendOffset: -40,
        legendPosition: 'middle',
      }}
      colors={{ scheme: 'set1' }}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={3}
      pointBorderColor={{ from: 'serieColor', modifiers: [] }}
      pointLabel="y"
      pointLabelYOffset={-12}
      areaOpacity={0.3}
      enableTouchCrosshair={true}
      useMesh={true}
    />
  );
};

export default function Lines() {
  const data = [
    {
      id: 'japan',
      color: 'hsl(158, 70%, 50%)',
      data: [
        { x: 'plane', y: 230 },
        { x: 'helicopter', y: 253 },
        { x: 'boat', y: 244 },
        { x: 'train', y: 260 },
        { x: 'subway', y: 48 },
        { x: 'bus', y: 54 },
        { x: 'car', y: 35 },
        { x: 'moto', y: 256 },
        { x: 'bicycle', y: 148 },
        { x: 'horse', y: 207 },
        { x: 'skateboard', y: 219 },
        { x: 'others', y: 88 },
      ],
    },
    {
      id: 'france',
      color: 'hsl(334, 70%, 50%)',
      data: [
        { x: 'plane', y: 216 },
        { x: 'helicopter', y: 161 },
        { x: 'boat', y: 63 },
        { x: 'train', y: 32 },
        { x: 'subway', y: 54 },
        { x: 'bus', y: 116 },
        { x: 'car', y: 42 },
        { x: 'moto', y: 7 },
        { x: 'bicycle', y: 270 },
        { x: 'horse', y: 4 },
        { x: 'skateboard', y: 13 },
        { x: 'others', y: 217 },
      ],
    },
    {
      id: 'us',
      color: 'hsl(127, 70%, 50%)',
      data: [
        { x: 'plane', y: 25 },
        { x: 'helicopter', y: 74 },
        { x: 'boat', y: 67 },
        { x: 'train', y: 57 },
        { x: 'subway', y: 159 },
        { x: 'bus', y: 95 },
        { x: 'car', y: 286 },
        { x: 'moto', y: 181 },
        { x: 'bicycle', y: 195 },
        { x: 'horse', y: 17 },
        { x: 'skateboard', y: 197 },
        { x: 'others', y: 121 },
      ],
    },
    {
      id: 'germany',
      color: 'hsl(161, 70%, 50%)',
      data: [
        { x: 'plane', y: 281 },
        { x: 'helicopter', y: 257 },
        { x: 'boat', y: 223 },
        { x: 'train', y: 156 },
        { x: 'subway', y: 99 },
        { x: 'bus', y: 125 },
        { x: 'car', y: 235 },
        { x: 'moto', y: 24 },
        { x: 'bicycle', y: 255 },
        { x: 'horse', y: 60 },
        { x: 'skateboard', y: 81 },
        { x: 'others', y: 98 },
      ],
    },
    {
      id: 'norway',
      color: 'hsl(286, 70%, 50%)',
      data: [
        { x: 'plane', y: 222 },
        { x: 'helicopter', y: 169 },
        { x: 'boat', y: 10 },
        { x: 'train', y: 103 },
        { x: 'subway', y: 139 },
        { x: 'bus', y: 226 },
        { x: 'car', y: 207 },
        { x: 'moto', y: 177 },
        { x: 'bicycle', y: 116 },
        { x: 'horse', y: 242 },
        { x: 'skateboard', y: 10 },
        { x: 'others', y: 259 },
      ],
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Lines</CardTitle>
        <CardDescription>
          {' '}
          This chart displays the counts of various modes of transportation in
          different countries.{' '}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 h-[400px]">
        <MyResponsiveLine data={data} />
      </CardContent>
    </Card>
  );
}
