import ThemeToggle from "components/ThemeToggle";
import Image from 'next/image';
import TwitterLogo from 'public/twitter.svg';
import LinkedinLogo from 'public/linkedin.svg';
import GithubLogo from 'public/github.svg';
import GmailLogo from 'public/gmail.svg';

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
      <main className="flex bg-white flex-col dark:bg-zinc-900 flex-1 h-screen">
        <div className='flex p-3 py-5 justify-end items-start'>
          <ThemeToggle />
        </div>
        <section className="flex flex-col bg-white dark:bg-zinc-900 flex-1 ">
            {children}
          <footer className="flex gap-3 p-3 items-center justify-end w-full">
            <a target="_blank" href='mailto:mtamilcse92@gmail.com' rel="noreferrer"><Image src={GmailLogo} width={42} height={42} alt="" /></a>
            <a target="_blank" href='https://twitter.com/tamil_92' rel="noreferrer"><Image src={TwitterLogo} width={42} height={42} alt="" /></a>
            <a target="_blank" href='https://www.linkedin.com/in/tamil-arasan-5722b6171/' rel="noreferrer"><Image src={LinkedinLogo} width={42} height={42} alt="" /></a>
            <a target="_blank" href='https://github.com/mtamilcse92' rel="noreferrer"><Image src={GithubLogo} width={42} height={42} alt="" /></a>
          </footer>
        </section>
      </main>
    )
  }