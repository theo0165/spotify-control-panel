import { urlBuilder } from '@scp/utils';
import { FC, useEffect, useState } from 'react';

const HomePage: FC = () => {
  const [data, setData] = useState<object | null>(null);

  useEffect(() => {
    (async () => {
      console.log(urlBuilder('/'));

      const request = await fetch(urlBuilder('/'));

      setData(await request.json());
    })();
  }, []);

  return <>{JSON.stringify(data)}</>;
};

export default HomePage;
