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
    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
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

export default function Calendar() {
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

  const dataArray = generateDataForYear2023();

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
        <CardDescription>
          These are the numbers for the year 2023
        </CardDescription>
      </CardHeader>
      <CardContent className="h-[400px] flex items-center w-full">
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

// const MyResponsiveTimeRange = ({ data }: any) => {
//   return <ResponsiveTimeRange
//     data={data}
//     from="2023-01-01"
//     to="2023-12-12"
//     emptyColor="#eeeeee"
//     colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
//     dayBorderWidth={2}
//     dayBorderColor="#ffffff"
//   />
// }

// export default function Calendar() {

//   function generateDataForYear2023() {
//     const data = [];
//     const startDate = new Date("2023-01-01");
//     const endDate = new Date("2023-12-31");

//     while (startDate <= endDate) {
//       const value = Math.floor(Math.random() * 301);

//       data.push({
//         "value": value,
//         "day": formattedDate
//       });

//       startDate.setDate(startDate.getDate() + 1);
//   }
//   return data;

//   const dataArray = generateDataForYear2023();

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Calendar</CardTitle>
//         <CardDescription>These are the numbers from 2018</CardDescription>
//       </CardHeader>
//       <CardContent className="h-[400px] flex items-center w-full">
//         <MyResponsiveTimeRange data={dataArray} />
//       </CardContent>
//     </Card>
//   );
// }

/// old code Down

// 'use client';

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { ResponsiveTimeRange } from '@nivo/calendar';

// // Type definition for the data prop
// type DataType = {
//   day: string;
//   value: number;
// };

// const MyResponsiveTimeRange = ({ data }: { data: DataType[] }) => (
//   <ResponsiveTimeRange
//     data={data}
//     from="2024-01-01"
//     to="2024-12-31"
//     emptyColor="#eeeeee"
//     colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
//     margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
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
//   // Function to generate data array
//   function generateDataArray(
//     year: number,
//     numberOfObjects: number,
//     minValue: number,
//     maxValue: number
//   ): DataType[] {
//     const dataArray: DataType[] = [];

//     for (let i = 0; i < numberOfObjects; i++) {
//       const randomValue = Math.floor(
//         Math.random() * (maxValue - minValue + 1) + minValue
//       );
//       const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
//       const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
//       const date = `${year}-${month}-${day}`;

//       dataArray.push({
//         value: randomValue,
//         day: date,
//       });
//     }

//     return dataArray;
//   }

//   // Generate data for the year 2024
//   const data = generateDataArray(2024, 100, 20, 100);

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Calendar</CardTitle>
//         <CardDescription>These are the numbers from this year</CardDescription>
//       </CardHeader>
//       <CardContent className="h-[200px] flex items-center w-full">
//         <MyResponsiveTimeRange data={data} />
//       </CardContent>
//     </Card>
//   );
// }

//latest code ^^^^

// 'use client';

// import { Card, CardContent } from '@/components/ui/card';
// import { ResponsiveTimeRange } from '@nivo/calendar';
// import { CardDescription, CardHeader, CardTitle } from '../ui/card';

// const MyResponsiveTimeRange = ({ data }: { data: any }) => (
//   <ResponsiveTimeRange
//     data={data}
//     from="2024-01-01"
//     to="2024-12-31"
//     emptyColor="#eeeeee"
//     colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
//     margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
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
//   function generateDataArray(
//     year: number,
//     numberOfObjects: number,
//     minValue: number,
//     maxValue: number
//   ) {
//     const dataArray = [];

//     for (let i = 0; i < numberOfObjects; i++) {
//       const randomValue = Math.floor(
//         Math.random() * (maxValue - minValue + 1) + minValue
//       );
//       const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
//       const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
//       const date = `${year}-${month}-${day}`;

//       dataArray.push({
//         value: randomValue,
//         day: date,
//       });
//     }

//     return dataArray;
//   }

//   const data = generateDataArray(2024, 100, 20, 100);

//   return (
//     <>
//       <Card>
//         <CardHeader>
//           <CardTitle>Calendar</CardTitle>
//           <CardDescription>
//             these are the numbers from this year
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="h-[200px] flex items-center w-full">
//           <MyResponsiveTimeRange data={data} />
//         </CardContent>
//       </Card>
//     </>
//   );
// }
