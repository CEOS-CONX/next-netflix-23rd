import Featured from '@/components/main/Featured';
import Previews from '@/components/main/Previews';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Featured />
      <Previews />
    </div>
  );
}
