'use client';

import { useGlobalDialogsStore } from '@/data/stores/useGlobalDialogsStore';
import { GlobalDialogsEnum, TLink } from '@/data/types';
import useViewport from '@/hooks/useViewport';
import { ROUTES } from '@/lib/routes';
import { cn } from '@/lib/utils';
import { UserButton, useAuth } from '@clerk/nextjs';
import { LucideLockKeyholeOpen } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useClickOutside } from 'primereact/hooks';
import { FC, useEffect, useRef, useState } from 'react';
import FGLink from '../FGLink';
import FGLogo from '../FGLogo';
import FGHamburger from './FGHamburger';

type Props = {
  links: TLink[];
};

const FGNavbar: FC<Props> = ({ links }) => {
  const [openedNavbar, setOpenedNavbar] = useState(false);
  const pathname = usePathname();
  const navbarRef = useRef(null);

  const { isSignedIn } = useAuth();
  const { isDesktopView } = useViewport();
  const { showDialog, hideDialog } = useGlobalDialogsStore();

  useClickOutside(navbarRef, () => {
    setOpenedNavbar(false);
  });

  useEffect(() => {
    if (openedNavbar) {
      showDialog(GlobalDialogsEnum.BACKGROUND_DIALOG);
    } else {
      hideDialog();
    }
  }, [hideDialog, openedNavbar, showDialog]);

  useEffect(() => {
    setOpenedNavbar(false);
  }, [pathname]);

  return (
    <nav
      ref={navbarRef}
      id='navbar'
      className='glass-effect border-b-1 bg-dark-purple fixed left-1/2 top-0 z-40 w-screen -translate-x-1/2 transform border-zinc-200 border-opacity-15 bg-opacity-75 px-4 py-1 font-semibold shadow-md'>
      <div className='container mx-auto flex items-center justify-between'>
        <FGLogo size='md' />
        <FGHamburger
          openedNavbar={openedNavbar}
          setOpenedNavbar={setOpenedNavbar}
        />
        <div
          className={cn(
            'border-l-1 bg-off fixed right-full top-0 flex h-screen w-2/3 max-w-80 flex-col items-center justify-between gap-10 border-zinc-500 bg-white bg-opacity-90 py-3 text-center transition-all duration-500 md:static md:h-auto md:w-auto md:translate-y-0 md:flex-row md:gap-8 md:border-0 md:bg-transparent md:text-base',
            openedNavbar ? 'right-0' : '-right-3/4'
          )}>
          <div />
          <div className='flex flex-col items-center gap-6 md:flex-row'>
            {links?.map(link => (
              <FGLink
                key={link.name}
                {...link}
              />
            ))}
            {isSignedIn ? (
              <UserButton showName={!isDesktopView} />
            ) : (
              <FGLink
                name='Login'
                href={ROUTES.LOGIN_ROUTE}
                icon={<LucideLockKeyholeOpen />}
              />
            )}
          </div>
          <FGLogo
            size='lg'
            className='block md:hidden'
          />
        </div>
      </div>
    </nav>
  );
};

export default FGNavbar;
