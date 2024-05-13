import '@/assets/styles/globals.css'
import AuthProvider from '@/components/AuthProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactBar from '@/components/ContactBar';
import { GlobalProvider } from '@/context/GlobalContext';

export const metadata = {
  title: "Nova Beauty",
  description: "A Cornwall based health a beauty salon with a holistic approach to wellbeing",
  keywords: "Cornwall, beauty, nails, massage, therapy"
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <html lang="en">
          <body>
            <ContactBar />
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default MainLayout;