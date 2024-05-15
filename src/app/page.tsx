import Calendar from '@/components/Cards/Calendar';
import General from '../components/Cards/general';
import { Card } from '@/components/ui/card';
import Lines from '@/components/Cards/Lines';
import TableDemo from '@/components/Cards/Table';

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]">
        <General />

        <div className="grid gap-[32px]">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid grid-cols-3  gap-[32px] h-[300px] overflow-hidden">
        <Card className="overflow-y-scroll ">
          <Lines />
        </Card>
        <Card className="overflow-y-scroll p-[32px]">
          <TableDemo />
        </Card>
        <Card>Hello World</Card>
      </div>
    </div>
  );
}
