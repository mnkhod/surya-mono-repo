export default function AlertLayout({ children }: any) {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full">
      {children}
    </div>
  );
}
