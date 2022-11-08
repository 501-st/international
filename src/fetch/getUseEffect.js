import {useEffect} from 'react';
import {EN, ES, RU} from "../context/context";

const GetUseEffect = (lang, setData, dataES, dataEN, dataRU) => {
    return useEffect(() => {
        if(lang === ES)
            setData(dataES)
        if(lang === EN)
            setData(dataEN)
        if(lang === RU)
            setData(dataRU)
    }, [lang])
};

export default GetUseEffect;