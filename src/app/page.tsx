import Calendar from '@/components/Cards/Calendar';
import General from '../components/Cards/general';
import { Card } from '@/components/ui/card';
import Lines from '@/components/Cards/Lines';
import TableDemo from '@/components/Cards/Table';
import { DataTable } from '@/components/Cards/DataTable';
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="grid gap-8">
      <div className="grid  xl:grid-cols-2 gap-4">
        <General />
        <div className="grid xl:grid-cols-2 gap-4">
          <Calendar />
          <Calendar />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 lg:h-[500px] overflow-hidden">
        <Card className="overflow-y-scroll">
          <Lines />
        </Card>
        <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>Orders</CardTitle>
            <CardDescription>
              These are the orders of this month.
            </CardDescription>
          </CardHeader>
          <div className="">
            <TableDemo />
          </div>
        </Card>
        <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>These are the user of this month.</CardDescription>
          </CardHeader>
          <div className="px-4">
            <DataTable />
          </div>
        </Card>
      </div>
    </div>
  );
}

// import Calendar from '@/components/Cards/Calendar';
// import General from '../components/Cards/general';
// import { Card } from '@/components/ui/card';
// import Lines from '@/components/Cards/Lines';
// import TableDemo from '@/components/Cards/Table';
// import { DataTable } from '@/components/Cards/DataTable';
// import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// export default function Home() {
//   return (
//     <div className="grid gap-[32px] ">
//       <Card className="">
//         <div className="grid xl:grid-cols-2 gap-8">
//           <General />
//           <div className="grid gap-8">
//             <Calendar />
//             <Calendar />
//           </div>
//         </div>
//       </Card>
//       <div className="grid lg:grid-cols-3 gap-8 lg:h-[500px] overflow-hidden">
//         <Card className="overflow-y-scroll">
//           <Lines />
//         </Card>
//         <Card className="overflow-y-scroll">
//           <CardHeader>
//             <CardTitle>Orders</CardTitle>
//             <CardDescription>
//               These are the orders of this month.
//             </CardDescription>
//           </CardHeader>
//           <div className="">
//             <TableDemo />
//           </div>
//         </Card>
//         <Card className="overflow-y-scroll">
//           <CardHeader>
//             <CardTitle>Users</CardTitle>
//             <CardDescription>These are the user of this month.</CardDescription>
//           </CardHeader>
//           <div className="px-4">
//             <DataTable />
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }
