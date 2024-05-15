'use client';

export default function UserItem() {
  return (
    <div className="flex items-center gap-2 border rounded-[8px] p-2">
      <div className="avatar rounded-full min-h-10 min-w-10 text-white font-[700] justify-center items-center flex bg-indigo-500">
        <p>LT</p>
      </div>
      <div className="grow">
        <p className="text-lg font-bold">Livia Thevenard</p>
        <p className="text-[12px] text-neutral-500">Livia@icload.com</p>
      </div>
    </div>
  );
}
