import Link from "next/link";

interface StyledButtonProps {
    text: String;
    type: "button" | "submit" | "reset";
    link: true | false;
    href?: any;
}

const StyledButton = (Props:StyledButtonProps)=>{
    const classname:string = `text-center bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-green-600 hover:to-blue-600 transition ease-in-out duration-150`;
    return (
        <>
            {Props.link ?
                <Link href={Props.href} className={classname}>{Props.text}</Link>
                :
                <button type={Props.type} className={classname}>{Props.text}</button>
            }
        </>
    )
}
export default StyledButton;