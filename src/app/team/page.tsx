'use client';

import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Command, CommandInput } from '@/components/ui/command';
import { Badge } from '@/components/ui/badge';

interface UserItemProps {
  color: string;
  title: string;
  description: string;
  shadow: boolean;
  border: boolean;
}

const UserItem = dynamic<UserItemProps>(() => import('useritem'), {
  ssr: false,
});

type Member = {
  email: string;
  full_name: string;
  color: string;
  role: string;
  status?: string;
};

export default function TeamSettings() {
  const [members, setMembers] = useState<Member[]>([
    {
      email: 'LivThevenard@icload',
      full_name: 'Livia Thevenard',
      color: 'rgba(143, 40, 255, 0.79)',
      role: 'admin',
    },
    {
      email: 'JohnDoe@icload',
      full_name: 'John Doe',
      color: 'rgba(34,150,243,1)',
      role: 'viewer',
    },
    {
      email: 'JaneSmith@icload',
      full_name: 'Jane Smith',
      color: 'rgba(243, 144, 34, 1)',
      role: 'viewer',
    },
    {
      email: 'EmilyJohnson@icload',
      full_name: 'Emily Johnson',
      color: 'rgba(123, 201, 111, 1)',
      role: 'viewer',
      status: 'pending',
    },
  ]);

  return (
    <>
      <div className="grid gap-4">
        <header>
          <h2 className="text-4xl font-bold">Team settings</h2>
        </header>
        <div className="grid gap-4">
          <div>
            <div className="flex items-center justify-between gap-2">
              <Command className="rounded-lg border">
                <CommandInput placeholder="Type an email..." />
              </Command>
              <Button className="hover:shadow" variant="secondary">
                Add a new member
              </Button>
            </div>
          </div>
        </div>
        <div className="border rounded">
          {members.length === 0 && <div className="p-4">No members found.</div>}
          {members &&
            members.map((member: Member, key: number) => (
              <div
                className="grid grid-cols-6 border-b last:border-b-0  items-center justify-between pr-4"
                key={key}
              >
                <div className="col-span-2">
                  <UserItem
                    color={member.color}
                    title={member.full_name}
                    description={member.email}
                    shadow={false}
                    border={false}
                  />
                </div>
                <div className="col-span-3 flex gap-2">
                  <Badge className={`tag ${member.role}`}>{member.role}</Badge>
                  {member.status && (
                    <Badge className={`tag ${member.status}`}>
                      {member.status}
                    </Badge>
                  )}
                </div>

                <div className="col-span-1 flex justify-end">
                  <Button className="hover:shadow" variant="ghost">
                    Remove
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
