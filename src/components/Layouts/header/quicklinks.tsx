"use client";
import { useEffect, useState } from "react";

export default function Quicklinks() {
  const [quicklinks, setQuicklinks] = useState<{ text: string; href: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchQuicklinks() {
      try {
        const res = await fetch('https://www.ecu.edu.au/designs/ecu-internet-2019/helpers/menu-items-json');
        if (!res.ok) {
          throw new Error('Failed to fetch menu items');
        }
        const menuItems = await res.json();
        const items = Array.isArray(menuItems?.quicklinks?.items)
          ? menuItems.quicklinks.items
          : [];
        setQuicklinks(items);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      }
    }
    fetchQuicklinks();
  }, []);

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <>
      <h2 className="text-lg font-semibold mb-2">Quicklinks</h2>
      <ul className="flex flex-wrap gap-3">
        {quicklinks.map((item, idx) => (
          <li key={idx}>
            <a href={item.href} className="text-blue-600 dark:text-blue-100 underline">{item.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
}