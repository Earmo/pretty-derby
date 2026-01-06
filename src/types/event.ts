// src/types/event.ts

interface GameEvent extends ItemWithId {
  /** 基本信息 */
  pid: string; // 父级ID或关联ID

  /** 选择项 */
  choiceList: [string, string[]][]; // 原始格式
  /** 技能 */
  skills: string[];
}

/** 事件数组类型 */
type EventList = GameEvent[];
