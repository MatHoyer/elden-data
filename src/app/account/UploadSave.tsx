import { Input } from '@/components/ui/input';
import { Typography } from '@/components/ui/typography';

export const UploadSave = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Typography variant="h2">Upload Save</Typography>
      <Input type="file" />
    </div>
  );
};
