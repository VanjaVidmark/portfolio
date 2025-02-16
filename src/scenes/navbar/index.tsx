import Link from "./Link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-30 w-full bg-blue-900 py-6">
      <div className="flex justify-center">
        <div className="flex w-full max-w-[80%] items-center gap-5 md:gap-20 text-lg text-white flex-wrap">
        <Link page="HOME" />
        <Link page="PROJECTS" />
        <Link page="CONTACT" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
