'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ResponsiveTimeRange } from '@nivo/calendar';

const MyResponsiveTimeRange = ({ data }: any) => (
  <ResponsiveTimeRange
    data={data}
    from="2023-01-01"
    to="2023-12-31"
    emptyColor="#eeeeee"
    colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
    dayBorderWidth={2}
    dayBorderColor="#ffffff"
    legends={[
      {
        anchor: 'bottom-right',
        direction: 'row',
        justify: false,
        itemCount: 4,
        itemWidth: 42,
        itemHeight: 36,
        itemsSpacing: 14,
        itemDirection: 'right-to-left',
        translateX: -60,
        translateY: -60,
        symbolSize: 20,
      },
    ]}
  />
);

function generateDataForYear2023() {
  const data = [];
  let currentDate = new Date('2023-01-01');
  const endDate = new Date('2023-12-31');

  while (currentDate <= endDate) {
    const value = Math.floor(Math.random() * 301);
    const formattedDate = currentDate.toISOString().split('T')[0];

    data.push({
      value: value,
      day: formattedDate,
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }
  return data;
}

export default function Calendar() {
  const dataArray = generateDataForYear2023();

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
        <CardDescription>
          These are the numbers for the year 2023
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[400px] flex items-center justify-center">
        <MyResponsiveTimeRange data={dataArray} />
      </CardContent>
    </Card>
  );
}

// 'use client';

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';

// import { ResponsiveTimeRange } from '@nivo/calendar';

// const MyResponsiveTimeRange = ({ data }: any) => (
//   <ResponsiveTimeRange
//     data={data}
//     from="2023-01-01"
//     to="2023-12-31"
//     emptyColor="#eeeeee"
//     colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
//     dayBorderWidth={2}
//     dayBorderColor="#ffffff"
//     legends={[
//       {
//         anchor: 'bottom-right',
//         direction: 'row',
//         justify: false,
//         itemCount: 4,
//         itemWidth: 42,
//         itemHeight: 36,
//         itemsSpacing: 14,
//         itemDirection: 'right-to-left',
//         translateX: -60,
//         translateY: -60,
//         symbolSize: 20,
//       },
//     ]}
//   />
// );

// export default function Calendar() {
//   function generateDataForYear2023() {
//     const data = [];
//     let currentDate = new Date('2023-01-01');
//     const endDate = new Date('2023-12-31');

//     while (currentDate <= endDate) {
//       const value = Math.floor(Math.random() * 301);
//       const formattedDate = currentDate.toISOString().split('T')[0];

//       data.push({
//         value: value,
//         day: formattedDate,
//       });

//       currentDate.setDate(currentDate.getDate() + 1);
//     }
//     return data;
//   }

//   const dataArray = generateDataForYear2023();

//   return (
//     <Card className="h-full">
//       <CardHeader>
//         <CardTitle>Calendar</CardTitle>
//         <CardDescription>
//           These are the numbers for the year 2023
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="h-[400px] flex items-center w-full">
//         <MyResponsiveTimeRange data={dataArray} />
//       </CardContent>
//     </Card>
//   );
// }
