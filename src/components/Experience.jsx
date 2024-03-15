import Expdata from "@/components/expdata"

const Experience = () => {
    return(
        <div className="content--body flex flex-col mx-auto max-w-screen-2xl px-[80px] bg-neutral-100 text-2xl py-36 max-md:px-[5px] dark:bg-slate-900">
            <button className="btn flex bg-zinc-300 py-1 px-5 rounded-2xl mx-auto dark:bg-slate-500 dark:text-slate-200 hover:bg-violet-400 dark:hover:bg-violet-400 hover:animate-bounce">Experience</button>
            <p className="desc mx-auto py-7 max-md:px-5 dark:text-slate-300">Here is a quick summary of my most recent experiences:</p>
            <div className="content--body flex column">
                <div className="upwork flex flex-col gap-16 px-20 w-full max-sm:px-5">
                    <Expdata />
                </div>
            </div>
        </div>
    )
}

export { Experience }