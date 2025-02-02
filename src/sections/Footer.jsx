const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/Codngwthubaid">
            <img src="/assets/github.svg" alt="github" className="size-6" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://x.com/codngwthubaid">
            <img src="/assets/twitter.svg" alt="twitter" className="size-6" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.instagram.com/codngwthubaid/">
            <img src="/assets/instagram.svg" alt="instagram" className="size-6" />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/codngwthubaid/">
            <img src="/assets/linkedin.svg" alt="linkedin" className="size-6" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© {new Date().getFullYear()} Mohammad Ubaid. All rights reserved.</p>
    </footer>
  );
};

export default Footer