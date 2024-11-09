export default function Section({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return <ul className="pt-4 mt-4 space-y-2 font-medium border-t opacity-95 border-indigo-400">
        {children}
    </ul>
}