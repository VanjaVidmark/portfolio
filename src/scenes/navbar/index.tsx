import Link from "./Link";

type Props = {
    selectedPage: string;
    setSelectedPage: (value: string) => void;
};

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  return (
    <nav className="fixed top-0 z-30 w-full bg-blue-900 py-6">
      <div className="flex justify-center">
        <div className="flex w-full max-w-[60%] items-center gap-24 text-lg text-white md:max-w-[80%] md:gap-12 sm:max-w-[90%] sm:gap-8 sm:text-base xs:flex-col xs:gap-4 xs:text-center">
        <Link
            page="HOME"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
        <Link
            page="PROJECTS"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
        <Link
            page="CONTACT"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
        />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
