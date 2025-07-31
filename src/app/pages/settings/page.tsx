import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import type { Metadata } from "next";
import { PersonalInfoForm } from "./_components/personal-info";
import { UploadPhotoForm } from "./_components/upload-photo";

export const metadata: Metadata = {
  title: "Settings Page",
};

export default async function SettingsPage() {
  const res = await fetch('https://www.ecu.edu.au/designs/ecu-internet-2019/helpers/menu-items-json', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch menu items');
  }
  const menuItems = await res.json();
  const quicklinks = Array.isArray(menuItems?.quicklinks?.items)
    ? menuItems.quicklinks.items
    : [];

  return (
    <div className="mx-auto w-full max-w-[1080px]">
      <Breadcrumb pageName="Settings" />

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Quicklinks</h2>
        <ul className="list-disc pl-5">
          {quicklinks.map((item: { text: string }, idx: number) => (
            <li key={idx}>{item.text}</li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <PersonalInfoForm />
        </div>
        <div className="col-span-5 xl:col-span-2">
          <UploadPhotoForm />
        </div>
      </div>
    </div>
  );
}

