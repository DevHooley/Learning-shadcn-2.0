'use client';

import { User } from 'lucide-react';
import { Inbox } from 'lucide-react';
import { PanelTop } from 'lucide-react';
import { Bell } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Cookie } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

import UserItem from 'useritem';
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

export default function Sidebar() {
  const menuList = [
    {
      group: 'General',
      items: [
        {
          link: '/',
          icon: <User />,
          text: 'Profile',
        },
        {
          link: '/',
          icon: <Inbox />,
          text: 'Inbox',
        },
        {
          link: '/',
          icon: <PanelTop />,
          text: 'Billing',
        },
        {
          link: '/',
          icon: <Bell />,
          text: 'Notifications',
        },
      ],
    },
    {
      group: 'Settings',
      items: [
        {
          link: '/',
          icon: <Settings />,
          text: 'General Settings',
        },
        {
          link: '/',
          icon: <Cookie />,
          text: 'Privacy',
        },
        {
          link: '/',
          icon: <MessageSquare />,
          text: 'Logs',
        },
      ],
    },
  ];

  return (
    <>
      <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] p-4  min-h-screen">
        <div className="">
          <UserItem
            title="Liv Thevenard"
            description="LivThevenard@icloud"
            avatarUrl="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/339128999_1432632874234220_4482217028050998622_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ctF-VIcnsFgQ7kNvgGDW5G3&_nc_oc=AdhvdUiXJ5nB-MVSWBFJjlTe-6lrh4m9HoEqk5u3D9sEkvM_00qh6opixZR9dJdUh38&_nc_ht=scontent-ord5-2.xx&oh=00_AYD2Km16Ocb33NXOBPhlPoiIrAbonfYInKYUc6aO1Witmw&oe=664ABC10"
            online={true}
            status={true}
            shadow={true}
            style={{
              border: '2px solid #f1f1f1',
            }}
          />
        </div>
        <div className="grow">
          <Command style={{ overflow: 'visible' }}>
            <CommandList style={{ overflow: 'visible' }}>
              {menuList.map((menu: any, key: number) => (
                <CommandGroup key={key} heading={menu.group}>
                  {menu.items.map((option: any, optionKey: number) => (
                    <CommandItem
                      key={optionKey}
                      className="flex gap-2 cursor-pointer"
                    >
                      {option.icon}
                      {option.text}
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
          </Command>
        </div>
        <div className="">
          <Link href="/team" className=" flex items-center gap-2">
            <Settings />
            <span className="">Team Settings</span>
          </Link>
        </div>
      </div>
    </>
  );
}
