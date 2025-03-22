"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateViewMvvm = void 0;
exports.TemplateViewMvvm = `import { _decorator } from "cc";
import { ecs } from "db://oops-framework/libs/ecs/ECS";
import { CCVMParentComp } from "db://oops-framework/module/common/CCVMParentComp";

const { ccclass, property } = _decorator;

/** 视图层对象 - 支持 MVVM 框架的数据绑定 */
@ccclass('<%Name%>Comp')
@ecs.register('<%Name%>', false)
export class <%Name%>Comp extends CCVMParentComp {
    /** 脚本控制的界面 MVVM 框架绑定数据 */
    data: any = {};

    /** 视图层逻辑代码分离演示 */
    start() {
        // const entity = this.ent as ecs.Entity;         // ecs.Entity 可转为当前模块的具体实体对象
    }

    /** 视图对象通过 ecs.Entity.remove(<%Name%>Comp) 删除组件是触发组件处理自定义释放逻辑 */
    reset() {
        this.node.destroy();
    }
}`;
