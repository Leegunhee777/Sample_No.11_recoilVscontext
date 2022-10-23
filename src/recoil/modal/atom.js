import { atom, useRecoilState,useResetRecoilState } from "recoil";

const initState = {
    selectedInfo: {
        id: 0, 
        title:''
    }
}

const modalAtom = atom({
    key:'modalAtom',
    default: initState
})


const useModalAtom = () =>{
    const [ useModal, setUseModal] = useRecoilState(modalAtom)

    const initModal = useResetRecoilState(modalAtom);

    const setModalInfo = selectedInfo => {
        setUseModal(prev=>({...prev, selectedInfo}))
    }
    return{
        useModal,
        initModal,
        setModalInfo
    }
}

export default useModalAtom