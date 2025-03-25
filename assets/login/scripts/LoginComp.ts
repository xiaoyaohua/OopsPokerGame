import { _decorator, Component, Node } from 'cc';
import { UIID } from '../../script/game/common/config/GameUIConfig';
import { oops } from '../../../extensions/oops-plugin-framework/assets/core/Oops';
const { ccclass, property } = _decorator;

@ccclass('LoginComp')
export class LoginComp extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    loginBtnClick(){
        console.log("loginBtnClick");
        oops.gui.open(UIID.Hall);
    }
}


