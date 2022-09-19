import store from "../../stores";
import "./style.css";

export default () => {
    const [numerate, setNumerate] = store(state => [
        state.numerate,
        state.setNumerate
    ]);

    function handleClick() {
        return setNumerate(!numerate)
    }

    return <button onClick={handleClick}>
        {numerate ? "hide" : "show"}
    </button>
}