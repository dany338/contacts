import Layout from '../Layout';
import CardContact from '../components/CardContact';
import Contact from '../entities/Contact';

export interface IHomeProps {
  contacts: Contact[] | [];
}

const Home: React.FC<IHomeProps> = ({ contacts }) => (
  <Layout>
    <div className="row mt-4">
      {contacts &&
        contacts.map((contact: Contact) => <CardContact key={contact.id} contact={contact} />)}
    </div>
  </Layout>
);

export default Home
