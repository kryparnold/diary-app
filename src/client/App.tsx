import AddDiary from "./components/AddDiary";
import { useDialog } from "./components/context/DialogContext";
import { useDiary } from "./components/context/DiaryContext";
import DiaryCard from "./components/DiaryCard";

export default function App() {
    const { setDialogComponent } = useDialog();
    const { diaries } = useDiary();

    return (
        <div className="flex flex-col h-full">
            <div className="text-center text-6xl py-6 font-semibold bg-zinc-600 relative">
                Günlük
                <div className="absolute h-full top-0 right-0 aspect-square p-5">
                    <div className="bg-blue-500 aspect-square rounded-xl grid place-items-center hover:shadow-xl shadow-blue-500 transition-shadow cursor-pointer" onClick={() => setDialogComponent(<AddDiary />)}>
                        <AddIcon />
                    </div>
                </div>
            </div>
            <div className="p-5 flex-1">
                <div className="bg-zinc-600 h-full w-full rounded-xl flex flex-wrap gap-5 p-3">
                    {diaries.map((diary, index) => (
                        <DiaryCard key={index} content={diary.content} date={diary.date} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function AddIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.75rem" height="2rem" viewBox="0 0 448 512">
            <path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256z" />
        </svg>
    );
}