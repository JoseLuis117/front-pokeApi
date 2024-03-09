import SideBar from "@/components/SideBar";

export default async function IndexLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
    <>
        <SideBar>
            {children}
        </SideBar>
    </>
  );
}
