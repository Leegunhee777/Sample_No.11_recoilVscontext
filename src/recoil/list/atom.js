import { atom } from "recoil";
import { useRecoilState , useResetRecoilState } from "recoil"

const initState = {
    isLoading: false,
    list:[
        {id:1, title: 'apple'},
        {id:2, title: 'banana'},
        {id:3, title : 'orange'},
    ],
    title: '이것은 Atom 리스트입니다.'
}
const listAtom = atom({
    key:'listAtom',
    default: initState
})


// * useRecoilState : 기존 useState 와 같이 변경되는 값과 해당 값을 변경하는 함수를 반환합니다.
// * useRecoilValue : 구독하는 값만 반환하는 함수입니다. 값의 update 함수가 필요없을 경우 사용합니다.
// * useSetRecoilState : 구독하는 값을 변경하는 함수만 반환합니다.
// * useResetRecoilState: 값을 기본값으로 reset 시키는 함수를 반환합니다.

const useListAtom = ()=>{

    const [ useList, setUseList ] = useRecoilState (listAtom);
   
    const { list } = useList;

    const initList = useResetRecoilState(listAtom);

    const addList = (inputValue)=>{
        const temp = {
            id: list[list.length - 1].id +1,
            title:inputValue
        }
        setUseList({...useList,list:[...list,temp]})
    }

    const deleteList = id =>{
        const removeList = list.filter(value=> value.id !== id)
        setUseList({...useList, list:removeList})
    }

    const updateList = (selectedInfoId, updateInputValue) =>{
        const resultList = useList.list.map(value=>{
            if(value.id === selectedInfoId){
                return{ ...value, title: updateInputValue}
            }
            return value
        })
        setUseList(prev=>({...prev, list: resultList}))
    }
    return {
        useList,
        initList,
        addList,
        deleteList,
        updateList
    }
}
export default  useListAtom
