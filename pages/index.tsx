import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRecoilValueLoadable } from 'recoil';
import Home from '@features/home';
import BaseLayout from '@layouts/base';
import { profileState } from '@lib/recoils/profile_stats';
import LoadingBar from '@components/pekrEdu_barLoading';

const HomePage: NextPage = () => {
  const profileLoadable = useRecoilValueLoadable(profileState);

  switch (profileLoadable.state) {
    case 'hasValue':
      return (
        <BaseLayout>
          <Home />
        </BaseLayout>
      );
    case 'loading':
      return <LoadingBar />;
    default:
      return <div>Error ...</div>;
  }
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default HomePage;
