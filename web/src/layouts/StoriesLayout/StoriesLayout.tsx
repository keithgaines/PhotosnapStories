import Header from "src/components/Navbar/Navbar";

type StoryLayoutProps = {
  children?: React.ReactNode
}

const StoriesLayout = ({ children }: StoryLayoutProps) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </>
  );
}

export default StoriesLayout;
