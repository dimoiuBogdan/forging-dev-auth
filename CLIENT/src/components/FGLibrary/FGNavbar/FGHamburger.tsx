import { LucideMenu, LucideX } from 'lucide-react';
import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  openedNavbar: boolean;
  setOpenedNavbar: Dispatch<SetStateAction<boolean>>;
};
const FGHamburger: FC<Props> = ({ openedNavbar, setOpenedNavbar }) => {
  return (
    <div
      className='z-50 block cursor-pointer text-2xl text-zinc-900 md:hidden'
      onClick={() => setOpenedNavbar(prev => !prev)}>
      {openedNavbar ? <LucideX /> : <LucideMenu />}
    </div>
  );
};

export default FGHamburger;
