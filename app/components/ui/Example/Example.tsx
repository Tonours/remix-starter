import clsx from 'clsx';

type ExampleProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Example = ({
  className,
  children,
}: ExampleProps) => {
  
  return (
    <div className={clsx('flex flex-col', className)} data-testid="example">
      {children}
    </div>
  );
};
