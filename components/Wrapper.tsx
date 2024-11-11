import {cn} from '@/lib/utils';
import {CSSProperties, ReactNode} from 'react';

const Wrapper = ({
  children,
  className = '',
  style = {},
}: Readonly<{
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}>) => {
  return (
    <main
      className={cn('w-full max-w-7xl flex flex-col gap-4 md:gap-10 px-4 py-6  mx-auto', className)}
      style={style}>
      {children}
    </main>
  );
};

export default Wrapper;
