/** @jsx jsx */
import { jsx } from '@emotion/core';
import Layout from './components/Layout';
import ReferralForm from './components/ReferralForm';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  const username = 'Jimmy Hendrix';

  return (
    <main>
      <Layout username={username}>
        <Dashboard username={username} />
        <ReferralForm />
      </Layout>
    </main>
  );
};

export default App;
