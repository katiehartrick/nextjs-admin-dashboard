import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import type { Metadata } from "next";
import { PersonalInfoForm } from "./_components/personal-info";
import { UploadPhotoForm } from "./_components/upload-photo";

export const metadata: Metadata = {
  title: "Settings Page",
};

export default async function SettingsPage() {
  const res = await fetch('https://www.ecu.edu.au/designs/ecu-internet-2019/helpers/menu-items-json', { cache: 'force-cache' });
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

      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-2">Quicklinks</h2>
          <ul className="list-disc pl-5">
            {quicklinks.map((item: { text: string; href: string }, idx: number) => (
              <li key={idx}>
                <a href={item.href} className="text-blue-600 dark:text-blue-200 underline">{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Tabs</h2>
          <ul className="list-disc pl-5">
            {Array.isArray(menuItems?.tabs) && menuItems.tabs.map((tab: { heading: string }, idx: number) => (
              <li key={idx}>{tab.name}</li>
            ))}
          </ul>
        </div>
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

