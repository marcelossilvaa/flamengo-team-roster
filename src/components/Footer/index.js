import { InstagramLogo, LinkedinLogo, GithubLogo } from '@phosphor-icons/react';

function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-600 flex justify-center h-48">
      <div className="w-[1024px] flex justify-center items-center flex-col gap-4 sm:gap-1">
        <img
          src="https://logodownload.org/wp-content/uploads/2016/09/flamengo-logo-escudo-novo.png"
          className="h-12 top-4 relative"
          alt=""
        />
        <div className="flex items-center w-[95%] flex-col sm:justify-between gap-4 sm:flex-row sm:gap-1">
          <p>Desenvolvido por Marcelo S Silva</p>
          <p className="flex gap-2">
            <a
              href="https://www.instagram.com/marcelossilva1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={32} weight="fill" />
            </a>
            <a
              href="https://www.linkedin.com/in/marcelossilva1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size={32} weight="fill" />
            </a>
            <a
              href="https://github.com/marcelossilvaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo size={32} weight="fill" />
            </a>
          </p>
        </div>
        <p>Copywriting © 2023</p>
      </div>
    </footer>
  );
}
export default Footer;
