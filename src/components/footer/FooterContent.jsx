import {
  FooterExclusive,
  FooterSupport,
  FooterAccount,
  FooterLinks,
  FooterDownload,
} from "./";

const FooterContent = () => {
  return (
    <div className="after:block after:h-px after:w-full after:opacity-40 after:bg-white">
      <div className="flex flex-col px-20 xl:flex-row justify-center gap-20 pt-20 pb-14">
        <FooterExclusive />
        <FooterSupport />
        <FooterAccount />
        <FooterLinks />
        <FooterDownload />
      </div>
    </div>
  );
};

export default FooterContent;
