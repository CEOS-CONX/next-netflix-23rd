import Image from 'next/image';

const NAV_ITEMS = [
  { name: 'Home', icon: 'ic-home.svg' },
  { name: 'Search', icon: 'ic-search.svg' },
  { name: 'Coming Soon', icon: 'ic-comingsoon.svg' },
  { name: 'Downloads', icon: 'ic-downloads.svg' },
  { name: 'More', icon: 'ic-more.svg' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 z-50 w-full border-t border-gray-800 bg-black">
      <div className="flex items-center justify-around py-2">
        {NAV_ITEMS.map((item) => (
          <div key={item.name} className="flex cursor-pointer flex-col items-center gap-1">
            <Image src={`/assets/icons/${item.icon}`} alt={item.name} width={24} height={24} />
            <span className="text-[10px] text-gray-400">{item.name}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}
