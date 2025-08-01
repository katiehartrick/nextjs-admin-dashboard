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

  return (
    <div className="mx-auto w-full max-w-[1080px]">
      <Breadcrumb pageName="Settings" />

      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-5 xl:col-span-3">
          <h2 className="text-lg font-semibold mb-2">Tabs</h2>
          <ul className="list-disc pl-2">
            {Array.isArray(menuItems?.tabs) && menuItems.tabs.map((tab: any, idx: number) => (
              <li key={idx}>
                {tab.name}
                {Array.isArray(tab.content) && tab.content.length > 0 && (
                  <ul className="list-circle pl-2 mt-1">
                    {tab.content.map((item: any, subIdx: number) => (
                      <li key={subIdx}>
                        {item.heading}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

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

