import { useDispatch, useSelector } from "react-redux";
import { changeToggleAction,changeIncreaseAction     } from "../store/activeSlice";


function HomePage() {

    const dispatch = useDispatch();

    const { toggle, number } = useSelector(state => state.activeStore);
    console.log(toggle);

    function handleToggle() {
        dispatch(changeToggleAction())
    }

    function handleIncrease(){
        dispatch(changeIncreaseAction())
    }
    return (
        <>
            <button className="bg-slate-500 text-white px-4 py-2 rounded-lg" onClick={handleToggle}>Change Toggle</button>
            {toggle && <h2>Cao, redux opet radi</h2>}

            <button className="bg-slate-500 text-white px-4 py-2 rounded-lg" onClick={handleIncrease}>increase</button>
            <h1>
                {number}
            </h1>


        </>
    )
}

export default HomePage;