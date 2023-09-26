import Link from "next/link";

export default function Button({ children, variant = "primary", type = "link", ...props }) {
    const styles = {
        primary: "bg-pink-600 hover:bg-pink-800 ",
        secondary: "border-2 border-slate-500 hover:bg-slate-800 "
    }

    const variantClass = `flex gap-2 py-2 px-4 rounded ${styles[variant]} `

    return (
        <>
            {
                type === "link" ?
                    <Link href="#" {...props} className={variantClass}>
                        {children}
                    </Link>
                    :
                    <button {...props} className={variantClass}>
                        {children}
                    </button>
            }
        </>
    )
}