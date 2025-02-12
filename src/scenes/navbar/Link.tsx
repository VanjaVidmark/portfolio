import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className={`${selectedPage === page.toLowerCase() ? "text-orange-500" : ""}
        transition duration-500 hover:text-primary-300`}
      href={`#${page.toLowerCase()}`}
      onClick={() => setSelectedPage(page.toLowerCase())}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;