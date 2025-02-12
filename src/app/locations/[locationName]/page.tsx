import { notFound } from 'next/navigation';
import { z } from 'zod';
import { Boss } from './Boss';

const paramsSchema = z.object({
  locationName: z.string(),
});

const HomePage: React.FC<PageParams> = async (props) => {
  const params = await props.params;
  const pResult = paramsSchema.safeParse(params);
  if (!pResult.success) notFound();
  const p = pResult.data;

  return (
    <div>
      {decodeURIComponent(p.locationName)}
      <Boss />
    </div>
  );
};

export default HomePage;
