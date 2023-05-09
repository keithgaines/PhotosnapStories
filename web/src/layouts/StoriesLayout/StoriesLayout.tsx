import Header from "src/components/Navbar/Navbar";
import Footer from "src/components/Footer/Footer";

type StoryLayoutProps = {
  children?: React.ReactNode
}

const StoriesLayout = ({ children }: StoryLayoutProps) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {children}
        <Footer />
</main>

    </>
  );
}

export default StoriesLayout;
