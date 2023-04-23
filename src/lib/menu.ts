const key = {};

class MenuContext{
    dispatchClick: ()=>void;
    constructor(dispatchClick:()=>void){
        this.dispatchClick = dispatchClick;
    }
}

export { key, MenuContext };

