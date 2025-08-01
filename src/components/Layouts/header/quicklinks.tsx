export default async function Quicklinks() {
  const res = await fetch('https://www.ecu.edu.au/designs/ecu-internet-2019/helpers/menu-items-json', { cache: 'force-cache' });
  if (!res.ok) {
    throw new Error('Failed to fetch menu items');
  }
  const menuItems = await res.json();
  const quicklinks = Array.isArray(menuItems?.quicklinks?.items)
    ? menuItems.quicklinks.items
    : [];

  return (
    <>
      <h2 className="text-lg font-semibold mb-2">Quicklinks</h2>
      <ul className="list-disc pl-2">
        {quicklinks.map((item: { text: string; href: string }, idx: number) => (
          <li key={idx}>
            <a href={item.href} className="text-blue-600 dark:text-blue-200 underline">{item.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
