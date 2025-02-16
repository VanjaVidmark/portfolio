import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
};

const Link = ({page}: Props) => {
  return (
    <AnchorLink
      className="font-semibold"
      href={`#${page.toLowerCase()}`}>
      {page}
    </AnchorLink>
  );
};

export default Link;