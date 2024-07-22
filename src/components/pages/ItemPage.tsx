import { Item } from '@prisma/client';

type props = {
  dbData: Item[];
  data: {
    name: string;
    inDlc: boolean;
    imageUrl: string;
    wikiUrl: string;
    locationUrl: string;
  }[];
};

const ItemPage: React.FC<props> = ({ dbData, data }) => {
  return <div>ItemPage</div>;
};

export default ItemPage;
