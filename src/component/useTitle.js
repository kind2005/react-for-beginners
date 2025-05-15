import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

//title 변경 커스텀 훅
function useTitle(initialTitle){
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const prevTitle = document.title;
        //document.title = title;
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
        
        // 컴포넌트가 unmount되거나 title이 변경될 때 원래대로 돌리기
        return () => {
            htmlTitle.innerText = prevTitle;
        };
    };
    useEffect(updateTitle, [title]);
    return setTitle;
}

export default useTitle;
