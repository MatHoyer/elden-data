import { Layout, LayoutContent } from '@/components/page/Layout';
import { ProfileHeader } from './ProfileHeader';
import { UploadSave } from './UploadSave';

const AccountPage = () => {
  return (
    <div className="flex gap-4">
      <Layout>
        <LayoutContent className="flex flex-col gap-10">
          <ProfileHeader />
          <UploadSave />
        </LayoutContent>
      </Layout>
    </div>
  );
};

export default AccountPage;
