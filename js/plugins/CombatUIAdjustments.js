/*:
//=============================================================================
// RPGツクールMZ - CombatUIAdjustments.js
//-----------------------------------------------------------------------------
// STARDUST
// https://ci-en.dlsite.com/creator/24588
//
// Copyright (c) 2024 STARDUST
//
// このプラグインは「ドジっ子巫女と淫魔の島」専用のプラグインです。
// 営利・非営利問わず、許可なく利用、配布、改造することは禁止されています。
// この規約に違反した場合、法的措置を取る可能性がありますので、ご注意ください。
//============================================================================= 
 * @author hex
 * このプラグインはExtraGauge.jsプラグインを前提としています。
 * ExtraGauge.jsが有効でない場合、このプラグインは正しく機能しない可能性があります。
 * 
 * @param DungeonFlag
 * @text ダンジョンの中か判定するためのスイッチ番号を設定
 * @desc ダンジョンの中か判定するためのスイッチ番号
 * @default 7
 * 
 * @param HP_MPGaugeFlag
 * @text HP・MPゲージの表示スイッチ番号を設定
 * @desc HP・MPゲージの表示スイッチ番号を設定
 * @default 8
 * 
 * @param Result_png
 * @text 画像ファイル
 * @desc リザルト画面の画像を選択します。
 * @dir img/pictures/
 * @type file
 * @require 1
 * @default
 * 
 * @param LevelUp_png
 * @text 画像ファイル
 * @desc リザルト画面のLevelUp時の画像を選択します。
 * @dir img/pictures/
 * @type file
 * @require 1
 * @default
 * 
 * @param ActorCommandX
 * @text アクターコマンドメニューのX座標
 * @desc アクターコマンドメニューのX座標
 * @default 340

 * @param ActorCommandY
 * @text アクターコマンドメニューのY座標
 * @desc アクターコマンドメニューのY座標
 * @default 400
 * 
 * @param ActorCommandWindowWidth
 * @text アクターコマンドメニューの横幅
 * @type number
 * @default 400
 * @desc アクターコマンドメニューの横幅
 *
 * @param ActorCommandWindowHeight
 * @text アクターコマンドメニューの高さ
 * @type number
 * @default 120
 * @desc アクターコマンドメニューの高さ
 *
 * @param ItemWindowWidth
 * @text アイテムウィンドウの幅
 * @type number
 * @default 400
 *
 * @param ItemWindowHeight
 * @text アイテムウィンドウの高さ
 * @type number
 * @default 300
 *
 * @param ItemWindowX
 * @text アイテムウィンドウのX座標
 * @type number
 * @default 100
 *
 * @param ItemWindowY
 * @text アイテムウィンドウのY座標
 * @type number
 * @default 200
 *
 * @param SkillWindowWidth
 * @text スキルウィンドウの幅
 * @type number
 * @default 400
 *
 * @param SkillWindowHeight
 * @text スキルウィンドウの高さ
 * @type number
 * @default 300
 *
 * @param SkillWindowX
 * @text スキルウィンドウのX座標
 * @type number
 * @default 100
 *
 * @param SkillWindowY
 * @text スキルウィンドウのY座標
 * @type number
 * @default 200
 *
 * @param HelpWindowWidth
 * @text 説明ウィンドウの幅
 * @type number
 * @default 400
 *
 * @param HelpWindowHeight
 * @text 説明ウィンドウの高さ
 * @type number
 * @default 100
 *
 * @param HelpWindowX
 * @text 説明ウィンドウのX座標
 * @type number
 * @default 0
 *
 * @param HelpWindowY
 * @text 説明ウィンドウのY座標
 * @type number
 * @default 0
 * 
 * @param StatusCurrentLevelX
 * @text ステータス画面レベル表示のX座標
 * @desc ステータス画面レベル表示のX座標
 * @default 1030

 * @param StatusCurrentLevelY
 * @text ステータス画面レベル表示のY座標
 * @desc ステータス画面レベル表示のY座標
 * @default 915
 * 
 * @param StatusCurrentLevelFontSize
 * @text StatusCurrentLevelFontSize
 * @desc Font size for Text 1.
 * @type number
 * @default 28
 *
 * @param currentLevelX
 * @text currentLevelX
 * @desc X coordinate for Text 1.
 * @type number
 * @default 530
 *
 * @param currentLevelY
 * @text currentLevelY
 * @desc Y coordinate for Text 1.
 * @type number
 * @default 413
 *
 * @param currentLevelFontSize
 * @text currentLevelFontSize
 * @desc Font size for Text 1.
 * @type number
 * @default 28
 * 
 *
 * @param nextLevelX
 * @text nextLevelX
 * @desc X coordinate for Text 2.
 * @type number
 * @default 1429
 *
 * @param nextLevelY
 * @text nextLevelY
 * @desc Y coordinate for Text 2.
 * @type number
 * @default 413
 *
 * @param nextLevelFontSize
 * @text nextLevelFontSize
 * @desc Font size for Text 2.
 * @type number
 * @default 28
 * 
 * @param getXPX
 * @text getXPX
 * @desc X coordinate for Text 3.
 * @type number
 * @default 595
 *
 * @param getXPY
 * @text getXPY
 * @desc Y coordinate for Text 3.
 * @type number
 * @default 502
 *
 * @param getXPFontSize
 * @text getXPFontSize
 * @desc Font size for Text 3.
 * @type number
 * @default 32
 * 
 *
 * @param NextLevelXPX
 * @text NextLevelXPX
 * @desc X coordinate for Text 4.
 * @type number
 * @default 1330
 *
 * @param NextLevelXPY
 * @text NextLevelXPY
 * @desc Y coordinate for Text 4.
 * @type number
 * @default 502
 *
 * @param NextLevelXPFontSize
 * @text NextLevelXPFontSize
 * @desc Font size for Text 4.
 * @type number
 * @default 32
 * 
 *
 * @param getGoldX
 * @text getGoldX
 * @desc X coordinate for Text 5.
 * @type number
 * @default 595
 *
 * @param getGoldY
 * @text getGoldY
 * @desc Y coordinate for Text 5.
 * @type number
 * @default 553
 *
 * @param getGoldFontSize
 * @text getGoldFontSize
 * @desc Font size for Text 5.
 * @type number
 * @default 32
 * 
 *
 * @param totalGoldX
 * @text totalGoldX
 * @desc X coordinate for Text 6.
 * @type number
 * @default 1330
 *
 * @param totalGoldY
 * @text totalGoldY
 * @desc Y coordinate for Text 6.
 * @type number
 * @default 553
 *
 * @param totalGoldFontSize
 * @text totalGoldFontSize
 * @desc Font size for Text 6.
 * @type number
 * @default 32
 *
 * @param DropIconX
 * @text Drop Icon X Position
 * @type number
 * @default 490
 * @desc X position of the drop item icons
 * 
 * @param DropIconY
 * @text Drop Icon Y Position
 * @type number
 * @default 645
 * @desc Y position of the drop item icons
 * 
  * @param BackgroundImage
 * @text 背景画像
 * @desc メッセージウィンドウの背景に使用する画像ファイル名（拡張子なし）
 * @dir img/pictures/
 * @type file
 * @require 1
 * @default
 * 
 */

(() => {
    'use strict';

    var parameters = PluginManager.parameters('CombatUIAdjustments');
    const DungeonFlag = Number(parameters['DungeonFlag'])//ダンジョンフラグ
    const HP_MPGaugeFlag = Number(parameters['HP_MPGaugeFlag'])//ダンジョンフラグ
    var xPosition = Number(parameters['ActorCommandX'] || 340);
    var yPosition = Number(parameters['ActorCommandY'] || 400);
    const windowWidth = Number(parameters['ActorCommandWindowWidth'] || 400);
    const windowHeight = Number(parameters['ActorCommandWindowHeight'] || 120);
    const itemWidth = Number(parameters['ItemWindowWidth']);
    const itemHeight = Number(parameters['ItemWindowHeight']);
    const itemX = Number(parameters['ItemWindowX']);
    const itemY = Number(parameters['ItemWindowY']);
    const skillWidth = Number(parameters['SkillWindowWidth']);
    const skillHeight = Number(parameters['SkillWindowHeight']);
    const skillX = Number(parameters['SkillWindowX']);
    const skillY = Number(parameters['SkillWindowY']);
    const helpWidth = Number(parameters['HelpWindowWidth']);
    const helpHeight = Number(parameters['HelpWindowHeight']);
    const helpX = Number(parameters['HelpWindowX']);
    const helpY = Number(parameters['HelpWindowY']);
    const dropIconX = Number(parameters['DropIconX'] || 490);
    const dropIconY = Number(parameters['DropIconY'] || 645);

    /* リザルト画面関連*/
    const Result_png = parameters["Result_png"];
    const LevelUp_png = parameters["LevelUp_png"];
    var resultFlag = false;
    var levelUpFlag = false;
    var currentGold = null; //現在の所持金
    var actorLevel = null; //現在のレベル
    var statusCurrentLevel = null; //現在のレベル（ステータス）
    var nextActorLevel = null; //次のレベル
    var currentLevel = null;
    var nextLevel = null;
    var getXP = null;
    var getXPFlag = false;
    var NextLevelXP = null;
    var currentLevelResultSprite = null;
    var statusCurrentLevelSprite = null;
    var currentLevelSprite = null;
    var nextLevelSprite = null;
    var NextLevelXPSprite = null;


    /* ショップ関連*/
    var shopIsActive = false; //ショップ出現フラグ
    var stepsNeeded = 0;
    const shopEncount = true;

    /* スキル関連-------------------------------------------------------------------------------------------*/

    //アニメーションzオーダ
    // const _Sprite_Animation_initMembers = Sprite_Animation.prototype.initMembers;
    // Sprite_Animation.prototype.initMembers = function() {
    //     _Sprite_Animation_initMembers.call(this);
    //     this.z = 10;
    // };

    // const _Sprite_Animation_updatePosition = Sprite_Animation.prototype.updatePosition;
    // Sprite_Animation.prototype.updatePosition = function() {
    //     _Sprite_Animation_updatePosition.call(this);
    //     this.z = animationPriority;
    // };


    function skillCheck(passive) {
        if ($gameParty.members()[0] && $gameParty.members()[0].actorId() === 1) {
        console.log("先頭のアクターIDは1です。");
        } else {
        console.log("先頭のアクターIDは1ではありません。");
        }
        const actor = $gameParty.members()[0];
        //ダメージ無効
        if(passive == 1) {
            //スキルIDから取得済みか判定する
            if (actor && actor.hasSkill(288)){
                return 0.2;
            }
            else if(actor && actor.hasSkill(287)) {
                return 0.1;
            }
            else if(actor && actor.hasSkill(286)) {
                return 0.05;
            }
            else {
                return 0;
            }
        }
        //ダメージアップ
        else if(passive == 2) {
            //スキルIDから取得済みか判定する
            if (actor && actor.hasSkill(291)){
                return 1.3;
            }
            else if(actor && actor.hasSkill(290)) {
                return 1.2;
            }
            else if(actor && actor.hasSkill(289)) {
                return 1.1;
            }
            else {
                return 0;
            }
        }
        //回復
        else {
            //スキルIDから取得済みか判定する
            if (actor && actor.hasSkill(294)){
                return 0.3;
            }
            else if(actor && actor.hasSkill(293)) {
                return 0.2;
            }
            else if(actor && actor.hasSkill(292)) {
                return 0.1;
            }
            else {
                return 0;
            }
        }
    }

    const _Game_Action_apply = Game_Action.prototype.apply;

    Game_Action.prototype.apply = function(target) {
        // 攻撃者が敵キャラクターの場合
        if (this.subject().isEnemy()) {
            //console.log("test1")
            // スキルを所持しているかのチェック
            const probability = skillCheck(1);
            if (probability !==0 ) {
                //console.log("test2")
                if(Math.random() < probability) {
                    //$gameTemp.reserveCommonEvent(28);
                    // 元のメソッドを呼び出してダメージを適用
                    _Game_Action_apply.call(this, target);
                    // ダメージを無効にする（ダメージを回復）
                    target.gainHp(target.result().hpDamage);
                    target.result().hpDamage = 0;

                    // ピクチャを表示
                    // if ($gameParty.leader()) {
                    //     if ($gameParty.leader().hp < (Math.floor($gameParty.leader().mhp * 0.2))) {
                    //         $gameTemp.reserveCommonEvent(25);
                    //     }else if ($gameParty.leader().hp < (Math.floor($gameParty.leader().mhp * 0.4))) {
                    //         $gameTemp.reserveCommonEvent(24);
                    //     }else if ($gameParty.leader().hp < (Math.floor($gameParty.leader().mhp * 0.6))) {
                    //         $gameTemp.reserveCommonEvent(23);
                    //     }else {
                    //         $gameTemp.reserveCommonEvent(27);
                    //         setTimeout(function() {
                    //             $gameTemp.reserveCommonEvent(26);
                    //         }, 550);
                    //     }
                    // }
                    //$gameTemp.reserveCommonEvent(31);
                    $gameScreen.showPicture(60,"mukou",0,280,-256,100,100,255,0);
                    // for (let i = 1; i <= 100; i++) {
                    //     if ($gameScreen.picture(i)) {
                    //         console.log("Displayed Picture ID: " + i);
                    //     }
                    // }
                    //ピクチャを消去
                    setTimeout(function() {
                        $gameScreen.erasePicture(60);
                    }, 150);
                }else {
                    _Game_Action_apply.call(this, target);
                }
            } else {
                // 通常通りダメージを適用
                _Game_Action_apply.call(this, target);
            }
        } else {
            const probability = skillCheck(2);
            // 攻撃者が敵ではない場合、通常通りダメージを適用
            _Game_Action_apply.call(this, target);
            if (probability !== 0 && Math.random() < 0.3) {
                const newDamage = Math.round(target.result().hpDamage * probability);
                target.gainHp(target.result().hpDamage); // 元のダメージを一旦キャンセル
                target.result().hpDamage = newDamage; // 新しいダメージを設定
                target.gainHp(-newDamage); // 新しいダメージを適用
            }
        }
    };

    // スキルがHP回復かMP回復かを判定する関数
    function isHealingSkill(skill) {
        // 効果リストを取得
        const effects = skill.effects;
        console.log(skill)
        // 効果リストをチェック
        for (let effect of effects) {
            // 効果のコードが11 (HP回復) または 12 (MP回復) であるかを確認
            if (effect.code === Game_Action.EFFECT_RECOVER_HP || effect.code === Game_Action.EFFECT_RECOVER_MP) {
                return effect.code;
            }
        }

        // 該当する効果がない場合は null を返す
        return null;
    }

    // スキル使用者選択画面を省略(戦闘中)
    const originalOnSkillOk = Scene_Battle.prototype.onSkillOk;
    Scene_Battle.prototype.onSkillOk = function() {
        const skill = this._skillWindow.item();
        const action = BattleManager.inputtingAction();
        action.setSkill(skill.id);

        const result = isHealingSkill(skill);

        if (!action || !action.item()) {
            console.error("Action or skill is null");
            return; // スキルが無効な場合は処理を中断
        }

        const actor = $gameParty.leader(); // パーティーリーダー
        //const isRecoverySkill = skill && (skill.occasion === 0 || skill.occasion === 1); // スキルが回復スキルかどうか
        //const canRecoverHP = actor && actor.hp < actor.mhp; // HPが減っているかどうか
        const canRecoverMP = actor && actor.mp < actor.mmp; // MPが減っているかどうか

        if (action.isForFriend()) {

            if (result === Game_Action.EFFECT_RECOVER_MP && canRecoverMP) {
                action.setTarget(actor.index()); // パーティーリーダーを直接ターゲットに設定
                this._skillWindow.hide(); // スキル選択ウィンドウを隠す
                this._actorWindow.hide(); // アクター選択ウィンドウを隠す
                this._statusWindow.hide(); // ステータスウィンドウを隠す
                BattleManager.actor().setActionState('waiting'); // アクション状態を更新
                this.selectNextCommand(); // 次のコマンド選択へ
            } else if(result == null) {
                action.setTarget(actor.index()); // パーティーリーダーを直接ターゲットに設定
                this._skillWindow.hide(); // スキル選択ウィンドウを隠す
                this._actorWindow.hide(); // アクター選択ウィンドウを隠す
                this._statusWindow.hide(); // ステータスウィンドウを隠す
                BattleManager.actor().setActionState('waiting'); // アクション状態を更新
                this.selectNextCommand(); // 次のコマンド選択へ
            } else {
                SoundManager.playBuzzer(); // 使用できない場合の音を鳴らす
                this._skillWindow.activate();
            }
        } else if (action.isForOpponent()) {
            // 敵対者向けの場合は、元の処理を行う
            originalOnSkillOk.call(this);

        }
    };

    //攻撃時にSE再生
    const originalApply = Game_Action.prototype.apply;
    Game_Action.prototype.apply = function(target) {
        originalApply.call(this, target);
    
        // 通常攻撃またはスキルが実行された際にコモンイベント 80 を予約
        if (this.subject().isActor() && this.isSkill() && !this.isGuard()) {
            $gameTemp.reserveCommonEvent(80);
        }
    };

    //被弾時にSE再生
    const originalPerformDamage = Game_Battler.prototype.performDamage;
    Game_Battler.prototype.performDamage = function() {
        originalPerformDamage.call(this);
    
        // 被弾したのがプレイヤー（アクター）の場合にコモンイベント 81 を予約
        if (this.isActor()) {
            $gameTemp.reserveCommonEvent(81);
        }
    };

    // // スキル使用者選択画面を省略(マップ)
    // const _Scene_Skill_onItemOk = Scene_Skill.prototype.onItemOk;
    // Scene_Skill.prototype.onItemOk = function() {
    //     const skill = this.item();
    //     const actor = $gameParty.members()[0]; // パーティーリーダー

    //     // スキルが回復スキルかどうかをチェック
    //     const isRecoverySkill = skill && (skill.occasion === 0 || skill.occasion === 1);

    //     const canRecoverHP = actor && actor.hp < actor.mhp; // HPが減っているかどうか
    //     const canRecoverMP = actor && actor.mp < actor.mmp; // MPが減っているかどうか

    //     // スキルが使用可能かどうかをチェック
    //     if (actor && skill && actor.canUse(skill) && isRecoverySkill && canRecover) {
    //         actor.useItem(skill);
    //         this.applySkill(); // スキルを直接適用
    //         this.checkCommonEvent();
    //         this.popScene();
    //         //SceneManager.push(Scene_Skill); // シーンをポップした後にスキル選択画面を再度表示
    //     } else {
    //         SoundManager.playBuzzer(); // 使用できない場合の音を鳴らす
    //         this._itemWindow.activate();
    //     }
    // };

    // // スキル使用者選択画面を省略(マップ)
    // Scene_Skill.prototype.applySkill = function() {
    //     const action = new Game_Action($gameParty.members()[0]);
    //     action.setSkill(this.item().id);
    //     action.apply($gameParty.members()[0]);
    //     this._actorWindow.refresh();
    // };

    /* アイテム関連-------------------------------------------------------------------------------------------*/

    //MP回復アイテム判定
    function isMpRecoveryItem(item) {
        if (!item.effects || item.effects.length === 0) {
            return false;
        }
    
        return item.effects.some(effect => effect.code === 12);
    }

    //HP回復アイテム判定
    function isHpRecoveryItem(item) {
        if (!item.effects || item.effects.length === 0) {
            return false;
        }
    
        return item.effects.some(effect => effect.code === 11);
    }

    //アイテム使用者選択画面を省略(戦闘中)
    const originalOnItemOk = Scene_Battle.prototype.onItemOk;
    Scene_Battle.prototype.onItemOk = function() {
        const item = this._itemWindow.item();
        const action = BattleManager.inputtingAction();
        action.setItem(item.id);
        
        if (!action || !action.item()) {
            console.error("Action or item is null");
            return; // アイテムが無効な場合は処理を中断
        }
    
        const actor = $gameParty.leader(); // パーティーリーダー
        const isRecoveryItem = item && (item.occasion === 0 || item.occasion === 1); // アイテムが回復アイテムかどうか
        const canRecoverHP = actor && actor.hp < actor.mhp; // HPが減っているかどうか
        const canRecoverMP = actor && actor.mp < actor.mmp; // MPが減っているかどうか
    
        if (action.isForFriend()) {
            if (isRecoveryItem && ((isHpRecoveryItem(item) && canRecoverHP) || (isMpRecoveryItem(item) && canRecoverMP))) {
                action.setTarget(actor.index()); // パーティーリーダーを直接ターゲットに設定
                this._itemWindow.hide(); // アイテム選択ウィンドウを隠す
                this._actorWindow.hide(); // アクター選択ウィンドウを隠す
                this._statusWindow.hide(); // ステータスウィンドウを隠す
                BattleManager.actor().setActionState('waiting'); // アクション状態を更新
                this.selectNextCommand(); // 次のコマンド選択へ
            } else {
                SoundManager.playBuzzer(); // 使用できない場合の音を鳴らす
                this._itemWindow.activate();
            }
        } else if (action.isForOpponent()) {
            // 敵対者向けの場合は、元の処理を行う
            originalOnItemOk.call(this);
        } else {
            originalOnItemOk.call(this);
        }
    };

    // //アイテム使用者選択画面を省略(マップ)
    // const _Scene_Item_onItemOk = Scene_Item.prototype.onItemOk;
    // Scene_Item.prototype.onItemOk = function() {
    //     const item = this.item();
    //     const actor = $gameParty.members()[0]; // パーティーリーダー
        
    //     // アイテムが回復アイテムかどうかをチェック
    //     const isRecoveryItem = item && (item.occasion === 0 || item.occasion === 1);
        
    //     // HPが減っているかどうかをチェック
    //     const canRecoverHp = actor && actor.hp < actor.mhp;
    //     // MPが減っているかどうかをチェック
    //     const canRecoverMp =  actor && actor.mp < actor.mmp;

        
    //     // アイテムが使用可能かどうかをチェック
    //     if (isHpRecoveryItem(item) &&actor && item && actor.canUse(item) && isRecoveryItem && canRecoverHp) {
    //         actor.useItem(item);
    //         this.applyItem();
    //         this.checkCommonEvent();
    //         this.checkGameover();
    //         this.popScene();
    //     }else if(isMpRecoveryItem(item) &&actor && item && actor.canUse(item) && isRecoveryItem && canRecoverMp) {
    //         actor.useItem(item);
    //         this.applyItem();
    //         this.checkCommonEvent();
    //         this.checkGameover();
    //         this.popScene();
    //     }else if(item.occasion === 2) {
    //         actor.useItem(item);
    //         this.applyItem();
    //         this.checkCommonEvent();
    //         this.checkGameover();
    //         SceneManager.goto(Scene_Map);
    //     }else {
    //         console.log(item)
    //         SoundManager.playBuzzer(); // 使用できない場合の音を鳴らす
    //         this._itemWindow.activate();
    //     }
    // };

    // //アイテム使用者選択画面を省略(マップ)
    // Scene_Item.prototype.applyItem = function() {
    //     const action = new Game_Action($gameParty.members()[0]);
    //     action.setItemObject(this.item());
    //     action.apply($gameParty.members()[0]);
    //     this._actorWindow.refresh();
    
    //     // コモンイベントをチェックして実行する
    //     if (this.item().effects) {
    //         this.item().effects.forEach(effect => {
    //             if (effect.code === Game_Action.EFFECT_COMMON_EVENT) {
    //                 $gameTemp.reserveCommonEvent(effect.dataId);
    //             }
    //         });
    //     }
    // };
    
    // アイテム使用者選択画面を省略(マップ)
    const _Scene_Item_onItemOk = Scene_Item.prototype.onItemOk;
    Scene_Item.prototype.onItemOk = function() {
        const item = this.item();
        const actor = $gameParty.members()[0]; // パーティーリーダー
        
        const choices = ["Yes", "No"];
        const message = "Use item?";
        const windowWidth = 400;
        const windowHeight = 180;
        const x = (Graphics.boxWidth - windowWidth) / 2;
        const y = (Graphics.boxHeight - windowHeight) / 2;

        // メッセージウィンドウを作成
        const messageWindow = new Window_Base(new Rectangle(x, y, windowWidth, 60));
        messageWindow.drawText(message, 0, 0, windowWidth, "center");
        SceneManager._scene.addChild(messageWindow);

        // カスタム選択肢ウィンドウクラスを作成
        class ChoiceWindow extends Window_Command {
            makeCommandList() {
                this.addCommand("Yes", "ok");
                this.addCommand("No", "cancel");
            }
        }

        // 選択肢ウィンドウを作成
        const choiceWindow = new ChoiceWindow(new Rectangle(x, y + 60, windowWidth, windowHeight - 60));
        SceneManager._scene.addChild(choiceWindow);

        // 選択肢のハンドリング
        choiceWindow.setHandler("ok", () => {
            messageWindow.close();
            choiceWindow.close();
            
            // 1秒遅延させてアイテム使用音を流す
            
            setTimeout(() => {
                AudioManager.playSe({ name: "Heal3", volume: 90, pitch: 100, pan: 0 });
            }, 500);

            // ここでアイテム使用のロジックを追加
            if (isHpRecoveryItem(item) && actor && item && actor.canUse(item) && item.occasion === 0 && actor.hp < actor.mhp) {
                actor.useItem(item);
                this.applyItem();
                this.checkCommonEvent();
                this.checkGameover();
                this.popScene();
            } else if (isMpRecoveryItem(item) && actor && item && actor.canUse(item) && item.occasion === 0 && actor.mp < actor.mmp) {
                actor.useItem(item);
                this.applyItem();
                this.checkCommonEvent();
                this.checkGameover();
                this.popScene();
            } else if (item.occasion === 2) {
                actor.useItem(item);
                this.applyItem();
                this.checkCommonEvent();
                this.checkGameover();
                SceneManager.goto(Scene_Map);
            } else {
                SoundManager.playBuzzer(); // 使用できない場合の音を鳴らす
                this._itemWindow.activate();
            }
        });

        choiceWindow.setHandler("cancel", () => {
            messageWindow.close();
            choiceWindow.close();
            this._itemWindow.activate();
        });

        choiceWindow.activate();
        choiceWindow.select(0);
    };

    // アイテム使用者選択画面を省略(マップ)
    Scene_Item.prototype.applyItem = function() {
        const action = new Game_Action($gameParty.members()[0]);
        action.setItemObject(this.item());
        action.apply($gameParty.members()[0]);
        this._actorWindow.refresh();

        // コモンイベントをチェックして実行する
        if (this.item().effects) {
            this.item().effects.forEach(effect => {
                if (effect.code === Game_Action.EFFECT_COMMON_EVENT) {
                    $gameTemp.reserveCommonEvent(effect.dataId);
                }
            });
        }
    };


    // アイコンを描画するメソッドをカスタマイズ 128のアイコンを32に縮小して表示
    Window_Base.prototype.drawIcon = function(iconIndex, x, y, iconWidth = 32, iconHeight = 32) {
        const bitmap = ImageManager.loadSystem("Icon");
        const originalIconWidth = 128; // 元のアイコンの幅
        const originalIconHeight = 128; // 元のアイコンの高さ
        const sx = (iconIndex % 16) * originalIconWidth;
        const sy = Math.floor(iconIndex / 16) * originalIconHeight;
        bitmap.addLoadListener(() => {
            this.contents.blt(bitmap, sx, sy, originalIconWidth, originalIconHeight, x, y, iconWidth, iconHeight);
        });
    };

    /* 戦闘関連のウィンドウ表示をカスタマイズします。 */

    // createAllWindows 関数をオーバーライド
    const _Scene_Battle_createAllWindows = Scene_Battle.prototype.createAllWindows;
    Scene_Battle.prototype.createAllWindows = function () {
        _Scene_Battle_createAllWindows.call(this);// 元の関数を呼び出し
        this._statusWindow.hide(); // ゲームの更新ごとにステータスウィンドウを常に非表示に保つ
    };

    // update 関数をオーバーライド
    const _Scene_Battle_update = Scene_Battle.prototype.update;
    Scene_Battle.prototype.update = function () {
        _Scene_Battle_update.call(this);// 元の関数を呼び出し
        this._statusWindow.hide(); // ゲームの更新ごとにステータスウィンドウを常に非表示に保つ
        if (this._partyCommandWindow) {
            this._partyCommandWindow.x = xPosition;
            this._partyCommandWindow.y = yPosition;
        }
    };

    //戦闘シーンの終了
    const _Scene_Battle_terminate = Scene_Battle.prototype.terminate;
    Scene_Battle.prototype.terminate = function () {
        //戦闘終了後HP・MPゲージを非表示に
        $gameSwitches.setValue(HP_MPGaugeFlag, false);
        $gameSwitches.setValue(HP_MPGaugeFlag+1, true);
        $gameScreen.erasePicture(1);
        $gameScreen.erasePicture(2);
        $gameTemp.reserveCommonEvent(28);
        // 元の処理を実行
        _Scene_Battle_terminate.call(this);
    };

    const _Window_BattleEnemy_initialize = Window_BattleEnemy.prototype.initialize;
    Window_BattleEnemy.prototype.initialize = function (rect) {
        rect.x = -7900;
        rect.y = 0;
        _Window_BattleEnemy_initialize.call(this, rect);
        this.opacity = 0; // ウィンドウを完全に透明に
        this.backOpacity = 0; // 背景も透明に
        this.contentsOpacity = 0; // 内容物（テキストとカーソル）を完全に透明に
        // ウィンドウ内のすべてのコンテンツの透明化
        this.contents.clear();
    };

    const _Window_BattleEnemy_update = Window_BattleEnemy.prototype.update;
    Window_BattleEnemy.prototype.update = function () {
        _Window_BattleEnemy_update.call(this);
        this.contentsOpacity = 0; // テキストとカーソルの透明度を常に0に設定
        this.checkAttackMode();
    };

    Window_BattleEnemy.prototype.checkAttackMode = function () {
        if (BattleManager.actor() && BattleManager.actor().currentAction() && BattleManager.actor().currentAction().item()) {
            const isAttack = BattleManager.actor().currentAction().item().id === $dataSkills[1].id;
            this._refreshFrameVisibility(!isAttack);
        }
    };

    Window_BattleEnemy.prototype._refreshFrameVisibility = function (visible) {
        if (this._windowFrameSprite) {
            this._windowFrameSprite.visible = visible;
        }
    };

    const _Window_BattleEnemy_maxCols = Window_BattleEnemy.prototype.maxCols;
    Window_BattleEnemy.prototype.maxCols = function () {
        return Math.max(1, Math.floor(this.width / 200)); // ウィンドウ幅に合わせて列数を計算
    };

    const _Window_BattleEnemy_numVisibleRows = Window_BattleEnemy.prototype.numVisibleRows;
    Window_BattleEnemy.prototype.numVisibleRows = function () {
        return Math.max(1, Math.floor(this.height / 60)); // ウィンドウ高さに合わせて行数を計算
    };

    const _Window_BattleItem_initialize = Window_BattleItem.prototype.initialize;
    Window_BattleItem.prototype.initialize = function (rect) {
        rect.width = itemWidth;
        rect.width = itemWidth;
        rect.height = itemHeight;
        rect.x = itemX;
        rect.y = itemY;
        _Window_BattleItem_initialize.call(this, rect);
    };

    const _Window_BattleSkill_initialize = Window_BattleSkill.prototype.initialize;
    Window_BattleSkill.prototype.initialize = function (rect) {
        rect.width = skillWidth;
        rect.height = skillHeight;
        rect.x = skillX;
        rect.y = skillY;
        _Window_BattleSkill_initialize.call(this, rect);
    };

    const _Scene_Battle_createHelpWindow = Scene_Battle.prototype.createHelpWindow;
    Scene_Battle.prototype.createHelpWindow = function () {
        _Scene_Battle_createHelpWindow.call(this);
        this._helpWindow.move(helpX, helpY, helpWidth, helpHeight);
    };

    // Window_BattleEnemy.prototype.update = function() {
    //     Window_Selectable.prototype.update.call(this);
    //     this.updateCursorForSprites();
    // };

    // Window_BattleEnemy.prototype.updateCursorForSprites = function() {
    //     const spriteset = SceneManager._scene._spriteset;
    //     if (this.index() >= 0 && spriteset) {
    //         const enemy = this._enemies[this.index()];
    //         if (enemy) {
    //             const sprite = spriteset.findTargetSprite(enemy);
    //             if (sprite) {
    //                 this.setCursorRect(sprite.x - this.x, sprite.y - this.y, sprite.bitmap.width, sprite.bitmap.height);
    //             }
    //         }
    //     }
    // };

    /* 戦闘関連のコマンドメニューをカスタマイズします。 */

    // Scene_BattleクラスのcreatePartyCommandWindowメソッドを拡張します。
    // const _Scene_Battle_createPartyCommandWindow = Scene_Battle.prototype.createPartyCommandWindow;
    // Scene_Battle.prototype.createPartyCommandWindow = function() {
    //     _Scene_Battle_createPartyCommandWindow.call(this); // 元のメソッドを呼び出します。
    //     this._partyCommandWindow.setHandler('fight', this.commandFight.bind(this)); // 「戦う」コマンドのハンドラを設定します。
    //     this._partyCommandWindow.setHandler('escape', this.commandEscape.bind(this)); // 「逃げる」コマンドのハンドラを設定します。
    //     this._partyCommandWindow.x = xPosition;
    //     this._partyCommandWindow.y = yPosition;
    // };

    // パーティーコマンド選択を開始するメソッドを拡張します。
    const _Scene_Battle_startPartyCommandSelection = Scene_Battle.prototype.startPartyCommandSelection;
    Scene_Battle.prototype.startPartyCommandSelection = function () {
        _Scene_Battle_startPartyCommandSelection.call(this); // 元のメソッドを呼び出し。
        $gameSwitches.setValue(HP_MPGaugeFlag, true);//戦闘中HP・MPゲージ表示
        displayStatusCurrentLevelText();
        this._partyCommandWindow.selectSymbol('fight'); // 自動的に「戦う」を選択。
        this.commandFight(); // 「戦う」コマンドを実行。
    };

    // Scene_BattleクラスのcreateActorCommandWindowメソッドを拡張します。
    const _Scene_Battle_createActorCommandWindow = Scene_Battle.prototype.createActorCommandWindow;
    Scene_Battle.prototype.createActorCommandWindow = function () {
        _Scene_Battle_createActorCommandWindow.call(this); // 元のメソッドを呼び出し。
        this._actorCommandWindow.setHandler('attack', this.commandAttack.bind(this)); // 「攻撃」コマンドのハンドラを設定。
        this._actorCommandWindow.setHandler('skill', this.commandSkill.bind(this)); // 「スキル」コマンドのハンドラを設定。
        this._actorCommandWindow.setHandler('guard', this.commandGuard.bind(this)); // 「防御」コマンドのハンドラを設定。
        this._actorCommandWindow.setHandler('item', this.commandItem.bind(this)); // 「アイテム」コマンドのハンドラを設定。
        this._actorCommandWindow.setHandler('escape', this.commandEscape.bind(this)); // 「逃げる」コマンドのハンドラを設定（追加行）。
        this._actorCommandWindow.x = xPosition;
        this._actorCommandWindow.y = yPosition;
    };

    Scene_Battle.prototype.closeCommandWindows = function() {
        this._partyCommandWindow.deactivate();
        //this._actorCommandWindow.deactivate();
        this._partyCommandWindow.close();
        //this._actorCommandWindow.close();
    };
    
    Scene_Battle.prototype.commandSkill = function() {
        this._skillWindow.setActor(BattleManager.actor());
        this._skillWindow.setStypeId(this._actorCommandWindow.currentExt());
        this._skillWindow.refresh();
        this._skillWindow.show();
        this._skillWindow.activate();
        this._statusWindow.hide();
        //this._actorCommandWindow.hide();
    };
    
    Scene_Battle.prototype.commandItem = function() {
        this._itemWindow.refresh();
        this._itemWindow.show();
        this._itemWindow.activate();
        this._statusWindow.hide();
        //this._actorCommandWindow.hide();
    };

    Window_ActorCommand.prototype.initialize = function (rect) {
        Window_Command.prototype.initialize.call(this, new Rectangle(rect.x, rect.y, windowWidth, windowHeight));
        this.refresh();
        this.setBackgroundType(2); // Make background completely transparent
    };

    Window_ActorCommand.prototype._refreshBack = function () {
        // Empty to prevent drawing the background
    };

    Window_ActorCommand.prototype._refreshFrame = function () {
        // Empty to prevent drawing the frame
    };

    // 戦闘中のコマンド項目名「パッシブ」を追加しない
    Window_ActorCommand.prototype.addSkillCommands = function() {
        const skillTypes = this._actor.addedSkillTypes();
        skillTypes.sort((a, b) => a - b);
        skillTypes.forEach(stypeId => {
            if ($dataSystem.skillTypes[stypeId] !== 'パッシブ') {  // 「パッシブ」を除外
                const name = $dataSystem.skillTypes[stypeId] || "スキル";
                this.addCommand(name, 'skill', true, stypeId);
            }
        });
    };

    // 「戦う」コマンドの項目を編集
    const _Window_ActorCommand_makeCommandList = Window_ActorCommand.prototype.makeCommandList;
    Window_ActorCommand.prototype.makeCommandList = function () {
        if (this._actor) {
            // "攻撃"コマンドを追加
            this.addAttackCommand();
            // "防御"コマンドを追加
            this.addGuardCommand();
            // アクターのスキルコマンドを追加
            this.addSkillCommands();
            //this.addCommand("", 'nothing'); // Margin
            // "アイテム"コマンドを追加
            this.addItemCommand();
            // 逃げることが可能な場合、"逃げる"コマンドを追加
            if (BattleManager.canEscape()) {
                this.addCommand(TextManager.escape, 'escape');
            }
        }
    };

    // オリジナルのprocessEscapeメソッドを保存
    const originalProcessEscape = BattleManager.processEscape;

    // 逃げれる確率を50%に変更
    BattleManager.processEscape = function() {
        $gameParty.performEscape();
        SoundManager.playEscape();
        const escapeChance = 0.5; // 逃げる確率を50%に設定 (0.0から1.0までの範囲)
        const success = Math.random() < escapeChance;
        // 乱数を生成して逃げるかどうかを判定
        if (success) {
            this.onEscapeSuccess();
        } else {
            this.onEscapeFailure();
        }
        return success;
    };

    // 「逃げる」コマンドを実行するメソッドです。
    Scene_Battle.prototype.commandEscape = function () {
        BattleManager.processEscape(); // 戦闘から逃げる処理を実行します。
        this.endCommandSelection(); // コマンド選択を終了します。
    };

    //「戦う」コマンドの項目の列
    Window_ActorCommand.prototype.numVisibleRows = function () {
        return 2; // Number of rows
    };

    //「戦う」コマンドの項目の行
    Window_ActorCommand.prototype.maxCols = function () {
        return 3; // Number of columns per row
    };

    //「戦う」コマンドの項目の高さ
    Window_ActorCommand.prototype.itemHeight = function () {
        return this.lineHeight() * 1.5;
    };

    //「戦う」コマンドの項目描画
    Window_ActorCommand.prototype.drawItem = function (index) {
        const rect = this.itemLineRect(index);
        const align = "center";
        this.resetTextColor();
        this.changePaintOpacity(this.isCommandEnabled(index));
        this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);

    };
    // アイテムの位置を調整する
    // Window_ActorCommand.prototype.itemRect = function (index) {
    //     var rect = Window_Command.prototype.itemRect.call(this, index);
    //     if (index >= 3) { // 2行目の最初のコマンドのインデックスが4だと仮定
    //         rect.x += this.itemWidth(); // 2行目の最初のコマンドを1つ分右にずらす
    //     }
    //     return rect;
    // };



    /*立ち絵関連--------------------------------------------------------------------------------------------------------------------*/

    //HPを監視して、立ち絵のポーズを変更する
    const _Game_BattlerBase_gainHp = Game_BattlerBase.prototype.gainHp;
    Game_BattlerBase.prototype.gainHp = function(value) {
        _Game_BattlerBase_gainHp.call(this, value);
        if ($gameParty.leader()) {
            if ($gameParty.leader().hp < (Math.floor($gameParty.leader().mhp * 0.2))) {
                $gameTemp.reserveCommonEvent(25);
            }else if ($gameParty.leader().hp < (Math.floor($gameParty.leader().mhp * 0.4))) {
                $gameTemp.reserveCommonEvent(24);
            }else if ($gameParty.leader().hp < (Math.floor($gameParty.leader().mhp * 0.6))) {
                $gameTemp.reserveCommonEvent(23);
            }else {
                $gameTemp.reserveCommonEvent(26);
            }
        }

    };

    //HPを監視して、立ち絵のポーズを変更する。
    const _Game_BattlerBase_refresh = Game_BattlerBase.prototype.refresh;
    Game_BattlerBase.prototype.refresh = function() {
        _Game_BattlerBase_refresh.call(this);
        if($gameSwitches.value(DungeonFlag)){
            if ($gameParty.leader()) {
                if ($gameParty.leader().hp < (Math.floor($gameParty.leader().mhp * 0.2))) {
                    $gameTemp.reserveCommonEvent(25);
                }else if ($gameParty.leader().hp < (Math.floor($gameParty.leader().mhp * 0.4))) {
                    $gameTemp.reserveCommonEvent(24);
                }else if ($gameParty.leader().hp < (Math.floor($gameParty.leader().mhp * 0.6))) {
                    $gameTemp.reserveCommonEvent(23);
                }else {
                    $gameTemp.reserveCommonEvent(26);
                }
            }
        }

        //console.log(this.name() + "'s HP is now " + this.hp);
    };

    //戦闘時の背景に使うスクリーンショットの取るタイミンを変更
    Scene_Map.prototype.startEncounterEffect = function() {
        this._spriteset.hideCharacters();
        this._minimapSprite.visible = false;
        this.snapForBattleBackground();
        this._encounterEffectDuration = this.encounterEffectSpeed();
    };

    //戦闘時の背景に使うスクリーンショットの取るタイミンを変更
    Scene_Map.prototype.updateEncounterEffect = function() {
        if (this._encounterEffectDuration > 0) {
            this._encounterEffectDuration--;
            const speed = this.encounterEffectSpeed();
            const n = speed - this._encounterEffectDuration;
            const p = n / speed;
            const q = ((p - 1) * 20 * p + 5) * p + 1;
            const zoomX = $gamePlayer.screenX();
            const zoomY = $gamePlayer.screenY() - 24;
            if (n === 2) {
                $gameScreen.setZoom(zoomX, zoomY, 1);
                //this.snapForBattleBackground();
                this.startFlashForEncounter(speed / 2);
            }
            $gameScreen.setZoom(zoomX, zoomY, q);
            if (n === Math.floor(speed / 6)) {
                this.startFlashForEncounter(speed / 2);
            }
            if (n === Math.floor(speed / 2)) {
                BattleManager.playBattleBgm();
                this.startFadeOut(this.fadeSpeed());
            }
        }
    };

    //戦闘開始時 立ち絵削除
    Scene_Map.prototype.updateEncounter = function() {
        if ($gamePlayer.executeEncounter()) {
            //現在のレベル表示削除
            if (statusCurrentLevelSprite) {
                // 既に表示されているテキストスプライトがあれば削除
                SceneManager._scene.removeChild(statusCurrentLevelSprite);
                statusCurrentLevelSprite.bitmap.destroy(); // ビットマップリソースを破棄
                statusCurrentLevelSprite = null;
            }
            $gameSwitches.setValue(HP_MPGaugeFlag+1, false);//マップのHP・MPゲージ削除
            $gameScreen.erasePicture(1);//HP・MPゲージ背景削除
            $gameTemp.reserveCommonEvent(22);
            setTimeout(function() {
                SceneManager.push(Scene_Battle);
            }, 200); // Adjust the timeout duration (1000ms = 1 second) as needed
        }
    };   
    
    // 戦闘から復帰時立ち絵表示
    const _Scene_Map_start = Scene_Map.prototype.start;
    Scene_Map.prototype.start = function() {  
        // 元のメソッドを呼び出す
        _Scene_Map_start.call(this);
        if($gameSwitches.value(18)){
            $gameSwitches.setValue(18,false);
        }
        if($gameSwitches.value(DungeonFlag)){
            displayStatusCurrentLevelText();
            $gameTemp.reserveCommonEvent(27);
            // コモンイベントを予約
            setTimeout(function() {
                $gameTemp.reserveCommonEvent(21);
            }, 50); // Adjust the timeout duration (1000ms = 1 second) as needed
        }
    };
    
    //戦闘開始時の処理
    const originalStartBattle = BattleManager.startBattle;
    BattleManager.startBattle = function () {
        originalStartBattle.call(this);
        setTimeout(function() {
        $gameTemp.reserveCommonEvent(28);
        $gameTemp.reserveCommonEvent(29);
        $gameTemp.reserveCommonEvent(27);
        }, 10);
        //ボイス再生
        $gameTemp.reserveCommonEvent(82);
        $gameTemp.reserveCommonEvent(21);
        // IDが1のアクターのレベルを取得
        actorLevel = $gameParty.members()[0].level;
        nextActorLevel = actorLevel + 1;

        // 現在の所持金を取得
        currentGold = $gameParty.gold();
        // console.log("actorLevel:" + actorLevel)
        // console.log("nextActorLevel:" + nextActorLevel)
        // console.log(`Saved Level: ${actorLevel}, Saved Gold: ${currentGold}`);
    };


    //現在のレベル表示処理（ステータス）
    window.displayStatusCurrentLevelText = function () {
        var StatusCurrentLevelX = detectDigitCount($gameParty.members()[0].level, parseInt(parameters[`StatusCurrentLevelX`], 10), false);
        if (statusCurrentLevelSprite) {
            // 既に表示されているテキストスプライトがあれば削除
            SceneManager._scene.removeChild(statusCurrentLevelSprite);
            statusCurrentLevelSprite.bitmap.destroy(); // ビットマップリソースを破棄
            statusCurrentLevelSprite = null;
        }
        statusCurrentLevel = {
            content: String($gameParty.members()[0].level),
            x: StatusCurrentLevelX,
            y: parseInt(parameters[`StatusCurrentLevelY`], 10),
            fontSize: parseInt(parameters[`StatusCurrentLevelFontSize`], 10)
        };
        // 新しいビットマップとスプライトを作成してテキストを描画
        const bitmap = new Bitmap(Graphics.boxWidth, 48);
        bitmap.fontSize = statusCurrentLevel.fontSize;
        bitmap.drawText(statusCurrentLevel.content, 0, 0, Graphics.boxWidth, 48, 'center');
        statusCurrentLevelSprite = new Sprite(bitmap);
        statusCurrentLevelSprite.x = statusCurrentLevel.x - (Graphics.boxWidth / 2);
        statusCurrentLevelSprite.y = statusCurrentLevel.y - 24; // 適宜調整
        SceneManager._scene.addChild(statusCurrentLevelSprite);
    }

    //現在のレベル表示処理（ステータス）削除
    window.displayStatusCurrentLevelTextDestroy = function () {
        if (statusCurrentLevelSprite) {
            // 既に表示されているテキストスプライトがあれば削除
            SceneManager._scene.removeChild(statusCurrentLevelSprite);
            statusCurrentLevelSprite.bitmap.destroy(); // ビットマップリソースを破棄
            statusCurrentLevelSprite = null;
        }
    }

    //現在のレベルの表示処理リザルト
    function displayCurrentLevelResultText() {
        var currentLevelX = detectDigitCount($gameParty.members()[0].level, parseInt(parameters[`StatusCurrentLevelX`], 10), false);
        if (currentLevelResultSprite) {
            // 既に表示されているテキストスプライトがあれば削除
            SceneManager._scene.removeChild(currentLevelResultSprite);
            currentLevelResultSprite.bitmap.destroy(); // ビットマップリソースを破棄
            currentLevelResultSprite = null;
        }
        currentLevel = {
            content: String($gameParty.members()[0].level),
            x: currentLevelX,
            y: parseInt(parameters[`StatusCurrentLevelY`], 10),
            fontSize: parseInt(parameters[`StatusCurrentLevelFontSize`], 10)
        };
        // 新しいビットマップとスプライトを作成してテキストを描画
        const bitmap = new Bitmap(Graphics.boxWidth, 48);
        bitmap.fontSize = currentLevel.fontSize;
        bitmap.drawText(currentLevel.content, 0, 0, Graphics.boxWidth, 48, 'center');
        currentLevelResultSprite = new Sprite(bitmap);
        currentLevelResultSprite.x = currentLevel.x - (Graphics.boxWidth / 2);
        currentLevelResultSprite.y = currentLevel.y - 24; // 適宜調整
        SceneManager._scene.addChild(currentLevelResultSprite);
    }

    //現在のレベルの表示処理
    function displayCurrentLevelText() {
        var currentLevelX = detectDigitCount(actorLevel, parseInt(parameters[`currentLevelX`], 10), false);
        if (currentLevelSprite) {
            // 既に表示されているテキストスプライトがあれば削除
            SceneManager._scene.removeChild(currentLevelSprite);
            currentLevelSprite.bitmap.destroy(); // ビットマップリソースを破棄
            currentLevelSprite = null;
        }
        currentLevel = {
            content: String(actorLevel),
            x: currentLevelX,
            y: parseInt(parameters[`currentLevelY`], 10),
            fontSize: parseInt(parameters[`currentLevelFontSize`], 10)
        };
        console.log("currentLevel: " + JSON.stringify(currentLevel))
        // 新しいビットマップとスプライトを作成してテキストを描画
        const bitmap = new Bitmap(Graphics.boxWidth, 48);
        bitmap.fontSize = currentLevel.fontSize;
        bitmap.drawText(currentLevel.content, 0, 0, Graphics.boxWidth, 48, 'center');
        currentLevelSprite = new Sprite(bitmap);
        currentLevelSprite.x = currentLevel.x - (Graphics.boxWidth / 2);
        currentLevelSprite.y = currentLevel.y - 24; // 適宜調整
        SceneManager._scene.addChild(currentLevelSprite);
    }

    //次のレベルの表示処理
    function displayNextLevelText() {
        var nextLevelX = detectDigitCount(nextActorLevel, parseInt(parameters[`nextLevelX`], 10), false);
        if (nextLevelSprite) {
            // 既に表示されているテキストスプライトがあれば削除
            SceneManager._scene.removeChild(nextLevelSprite);
            nextLevelSprite.bitmap.destroy(); // ビットマップリソースを破棄
            nextLevelSprite = null;
        }
        if(!$gameParty.members()[0].isMaxLevel()){
            nextLevel = {
                content: String(nextActorLevel),
                x: nextLevelX,
                y: parseInt(parameters[`nextLevelY`], 10),
                fontSize: parseInt(parameters[`nextLevelFontSize`], 10)
            };
            console.log("nextLevel: " + nextLevel)
            // 新しいビットマップとスプライトを作成してテキストを描画
            const bitmap = new Bitmap(Graphics.boxWidth, 48);
            bitmap.fontSize = nextLevel.fontSize;
            bitmap.drawText(nextLevel.content, 0, 0, Graphics.boxWidth, 48, 'center');
            nextLevelSprite = new Sprite(bitmap);
            nextLevelSprite.x = nextLevel.x - (Graphics.boxWidth / 2);
            nextLevelSprite.y = nextLevel.y - 24; // 適宜調整
            SceneManager._scene.addChild(nextLevelSprite);
        }

    }

    //次のレベルまでの必要経験値表示処理
    function displayNextLevelXPText(xp) {
        var NextLevelXP_X = detectDigitCount(xp, parseInt(parameters[`NextLevelXPX`], 10), false)
        if (NextLevelXPSprite) {
            // 既に表示されているテキストスプライトがあれば削除
            SceneManager._scene.removeChild(NextLevelXPSprite);
            NextLevelXPSprite.bitmap.destroy(); // ビットマップリソースを破棄
            NextLevelXPSprite = null;
        }
        if(!$gameParty.members()[0].isMaxLevel()){
            NextLevelXP = {
                content: xp,
                x: NextLevelXP_X,
                y: parseInt(parameters[`NextLevelXPY`], 10),
                fontSize: parseInt(parameters[`NextLevelXPFontSize`], 10)
            };
            console.log("NextLevelXP: " + NextLevelXP)
            // 新しいビットマップとスプライトを作成してテキストを描画
            const bitmap = new Bitmap(Graphics.boxWidth, 48);
            bitmap.fontSize = NextLevelXP.fontSize;
            bitmap.drawText(NextLevelXP.content, 0, 0, Graphics.boxWidth, 48, 'center');
            NextLevelXPSprite = new Sprite(bitmap);
            NextLevelXPSprite.x = NextLevelXP.x - (Graphics.boxWidth / 2);
            NextLevelXPSprite.y = NextLevelXP.y - 24; // 適宜調整
            SceneManager._scene.addChild(NextLevelXPSprite);
        }
    }

    //リザルト画面の文字表示処理（更新なし）
    BattleManager.displayText = function (text) {
        const bitmap = new Bitmap(Graphics.boxWidth, 48);
        bitmap.fontSize = text.fontSize; // パラメータから読み取ったフォントサイズを設定
        bitmap.drawText(text.content, 0, 0, Graphics.boxWidth, 48, 'center');
        const sprite = new Sprite(bitmap);
        sprite.x = text.x - (Graphics.boxWidth / 2); // 中央揃えの調整
        sprite.y = text.y - 24; // 縦方向の中心を調整
        SceneManager._scene.addChild(sprite);
    };


    // 戦闘報酬表示を無効化
    BattleManager.displayRewards = function () { };
    
    //ドロップアイテムの画像表示
    BattleManager.displayDropItemImages = function() {
        const items = this._rewards.items;
        if (items.length > 0) {
          items.forEach((item, index) => {
            const imageName = item.meta.ItemImage; // メタデータに設定した画像名を使用
            //console.log(item.meta);
            if (imageName) {
              // 画像を表示 (画像ID, 画像名, 原点, X座標, Y座標, Xスケール, Yスケール, 不透明度, 合成モード)
              $gameScreen.showPicture(10 + index, imageName, 0, 100 + (index * 100), 300, 100, 100, 255, 0);
            }
          });
        }
      };

      //ドロップアイテムのアイコン表示
      BattleManager.displayDropItemIcons = function() {
        const items = this._rewards.items;
        if (items.length > 0) {
            const originalIconWidth = 128;
            const originalIconHeight = 128;
            const newIconWidth = 89;
            const newIconHeight = 89;
            const spacingX = 30; // 各アイコンの間隔
            const bitmap = new Bitmap(newIconWidth * items.length + spacingX * (items.length - 1), newIconHeight);
            const sprite = new Sprite(bitmap);

            // プラグインパラメータに基づいて配置
            sprite.x = dropIconX;
            sprite.y = dropIconY;

            const iconSet = ImageManager.loadSystem("Icon"); // アイコンセットをロード
            iconSet.addLoadListener(() => { // ロード完了後に処理を行う
                items.forEach((item, index) => {
                    const iconIndex = item.iconIndex;
                    const iconX = iconIndex % 16 * originalIconWidth;
                    const iconY = Math.floor(iconIndex / 16) * originalIconHeight;

                    // アイコンを縮小して描画
                    const tmpBitmap = new Bitmap(originalIconWidth, originalIconHeight);
                    tmpBitmap.blt(iconSet, iconX, iconY, originalIconWidth, originalIconHeight, 0, 0);
                    bitmap.blt(tmpBitmap, 0, 0, originalIconWidth, originalIconHeight, (newIconWidth + spacingX) * index, 0, newIconWidth, newIconHeight);
                });
            });

            SceneManager._scene.addChild(sprite);
        }
    };

    //戦闘勝利ボイス再生
    const originalPlayVictoryMe = BattleManager.playVictoryMe;
    BattleManager.playVictoryMe = function() {
        // 1から6までの乱数を生成
        const randomNumber = Math.floor(Math.random() * 5) + 1;

        // 乱数に応じて再生するボイスを選択
        let voiceFileName = "";
        switch(randomNumber) {
            case 1:
                voiceFileName = "sentou-syouri1";
                break;
            case 2:
                voiceFileName = "sentou-syouri2";
                break;
            case 3:
                voiceFileName = "sentou-syouri3";
                break;
            case 4:
                voiceFileName = "sentou-syouri4";
                break;
            case 5:
                voiceFileName = "sentou-syouri5";
                break;
        }
        // コモンイベントを予約せず、直接SEを再生
        AudioManager.playVoice({name: voiceFileName, volume: 100, pitch: 100, pan: 0, channel: 1}, false, 0);
        // 元の戦闘勝利MEの再生
        originalPlayVictoryMe.call(this);
    
    };

    // 戦闘勝利メッセージをカスタマイズ
    BattleManager.displayVictoryMessage = function () {
        $gameScreen.showPicture(3, Result_png, 0, 0, 0, 100, 100, 255, 0);
        this.displayDropItemIcons();
        resultFlag = true; //リザルト画面の管理（経験値の処理が終わるまで操作を受け付けない）
        $gameScreen.erasePicture(2); //コマンドの背景画像を削除
        displayCurrentLevelText(); //現在のレベル表示
        displayNextLevelText(); //次のレベル表示
        displayCurrentLevelResultText();
        $gameMessage.newPage();
        $gameMessage.add("");  // 空のテキストを追加し、デフォルトの勝利メッセージを表示しない
        $gameSwitches.setValue(6, true); // 経験値バーフラグをONに設定し、カスタム処理を可能にする
    };

    // 戦闘敗北メッセージをカスタマイズ
    const originalDisplayDefeatMessage = BattleManager.displayDefeatMessage;
    BattleManager.displayDefeatMessage = function () {
        $gameScreen.erasePicture(2); //コマンドの背景画像を削除
        originalDisplayDefeatMessage.call(this);
    };

    // 逃走メッセージをカスタマイズ
    const originalDisplayEscapeSuccessMessage = BattleManager.displayEscapeSuccessMessage;
    BattleManager.displayEscapeSuccessMessage = function () {
        $gameScreen.erasePicture(2); //コマンドの背景画像を削除
        originalDisplayEscapeSuccessMessage.call(this);
    };

    /* メッセージウィンドウの背景と一時停止サインの表示をカスタマイズします。 */

    // リザルト画面を経験値の処理が終わるまで入力を受け付けないように
    const _Window_Message_updateInput = Window_Message.prototype.updateInput;
    Window_Message.prototype.updateInput = function () {
        if ($gameParty.inBattle() && $gameSwitches.value(7) && resultFlag) {
            // 条件を満たす場合は入力を無視
            return true;
        }
        // 通常の入力処理を実行
        return _Window_Message_updateInput.call(this);
    };

    // メッセージウィンドウの背景更新をカスタマイズ
    const _Window_Message_updateBackground = Window_Message.prototype.updateBackground;
    Window_Message.prototype.updateBackground = function () {
        if ($gameParty.inBattle() && $gameTroop.isAllDead()) {
            _Window_Message_updateBackground.call(this);
            this.opacity = 0;  // 戦闘中に全ての敵が倒された場合、ウィンドウの透明度を0に設定
            this.contentsOpacity = 0;  // コンテンツの透明度も0に設定
        } else {
            _Window_Message_updateBackground.call(this);
        }
    };

    // 一時停止サインの表示更新をカスタマイズ
    const _Window_Message__refreshPauseSign = Window_Message.prototype._refreshPauseSign;
    Window_Message.prototype._refreshPauseSign = function () {
        if ($gameSwitches.value(7)) {
            // スイッチ番号7がONの場合は何もせず、矢印を表示しない
        } else {
            _Window_Message__refreshPauseSign.call(this);  // それ以外の場合は元の処理を呼び出す
        }
    };

    /* 金額入手の処理をカスタマイズします。 */
    const _oldGainGold = Game_Party.prototype.gainGold;
    Game_Party.prototype.gainGold = function (amount) {
        _oldGainGold.call(this, amount);
        //ダンジョン内かつ戦闘シーンなら
        if ($gameSwitches.value(DungeonFlag) && $gameParty.inBattle()) {

            var getGoldX = detectDigitCount($gameParty.gold() - currentGold, parseInt(parameters[`getGoldX`], 10), false);
            var totalGoldX = detectDigitCount($gameParty.gold(), parseInt(parameters[`totalGoldX`], 10), false);

            //リザルト画面のに入手金額と所持金額を表示。
            // const totalGold = {
            //     content: String($gameParty.gold()),
            //     x: parseInt(parameters[`totalGoldX`], 10),
            //     y: parseInt(parameters[`totalGoldY`], 10),
            //     fontSize: parseInt(parameters[`totalGoldFontSize`], 10) 
            // };

            // const getGold = {
            //     content: String($gameParty.gold() - currentGold),
            //     x: parseInt(parameters[`getGoldX`], 10),
            //     y: parseInt(parameters[`getGoldY`], 10),
            //     fontSize: parseInt(parameters[`getGoldFontSize`], 10) 
            // };

            const totalGold = {
                content: String($gameParty.gold()),
                x: totalGoldX,
                y: parseInt(parameters[`totalGoldY`], 10),
                fontSize: parseInt(parameters[`totalGoldFontSize`], 10)
            };

            const getGold = {
                content: String($gameParty.gold() - currentGold),
                x: getGoldX,
                y: parseInt(parameters[`getGoldY`], 10),
                fontSize: parseInt(parameters[`getGoldFontSize`], 10)
            };

            BattleManager.displayText(totalGold);
            BattleManager.displayText(getGold);
        }
    };

    /* レベルアップと経験値関連の処理をカスタマイズします。 */

    // レベルアップ表示を無効化
    const _Game_Actor_displayLevelUp = Game_Actor.prototype.displayLevelUp;
    Game_Actor.prototype.displayLevelUp = function (newSkills) { };

    // レベルアップ表示を無効化
    Window_BattleLog.prototype.displayLevelUp = function (actor) { };

    // メッセージウィンドウの更新処理をカスタマイズ
    const _Window_Message_update = Window_Message.prototype.update;
    Window_Message.prototype.update = function () {
        const wasClosing = this.isClosing();
        _Window_Message_update.call(this);
        if (wasClosing && !this.isClosing() && $gameSwitches.value(6)) {
            $gameSwitches.setValue(6, false); // 経験値バーフラグをOFFに設定
        }
    };

    // 経験値の更新処理をカスタマイズ
    const originalGainExp = Game_Actor.prototype.gainExp;
    Game_Actor.prototype.gainExp = function (exp) {
        var currentExp = $gameParty.members()[0].currentLevelGetExp(); // 現在の経験値を取得
        var remainingNeededExp = $gameParty.members()[0].currentLevelUpExp(); // 次のレベルアップに必要な経験値を取得
        console.log(getXPFlag)
        if(!$gameParty.members()[0].isMaxLevel()){

        }
        if (!getXPFlag) {
            var getXPX = detectDigitCount(exp, parseInt(parameters[`getXPX`], 10), false);
            getXP = {
                content: String(exp),
                x: getXPX,
                y: parseInt(parameters[`getXPY`], 10),
                fontSize: parseInt(parameters[`getXPFontSize`], 10)
            };
            //console.log("getXP: " + getXP)
            BattleManager.displayText(getXP);
            getXPFlag = true;
        }

        if (currentExp + exp >= remainingNeededExp &&!$gameParty.members()[0].isMaxLevel()) {
            setTimeout(() => {
                originalGainExp.call(this, remainingNeededExp - currentExp);
                displayNextLevelXPText(String(remainingNeededExp - currentExp));
                if (!levelUpFlag) {
                    $gameScreen.showPicture(4, LevelUp_png, 0, 0, 0, 100, 100, 255, 0);
                    levelUpFlag = true;
                }
                setTimeout(() => {
                    this.gainExp((currentExp + exp) - remainingNeededExp);
                }, 600); // 600ミリ秒遅延後に追加の経験値を処理
            }, 200); // 200ミリ秒遅延後にレベルアップ処理を実行
        } else {
            if(!levelUpFlag) {
                const probability = skillCheck(3);
                if(probability !== 0) {
                    //最大HPのn%回復
                    $gameParty.members()[0].gainHp(probability * $gameParty.members()[0].param(0))
                }
                
            }
            if(!$gameParty.members()[0].isMaxLevel()){
                setTimeout(() => {
                    originalGainExp.call(this, exp);
                    displayNextLevelXPText(String(remainingNeededExp - $gameParty.members()[0].currentLevelGetExp()));
                    //getXPFlag = false;
                }, 200); // 200ミリ秒遅延後に経験値を追加
            }else{
                displayNextLevelXPText(String(0));
            }
            getXPFlag = false;
            resultFlag = false;
            levelUpFlag = false;
        }
    };

    //レベルアップの処理をカスタマイズ
    Game_Actor.prototype.changeExp = function (exp, show) {
        this.refresh();
        this._exp[this._classId] = Math.max(exp, 0);
        const lastLevel = this._level;
        const lastSkills = this.skills();
        if (!this.isMaxLevel() && this.currentExp() >= this.nextLevelExp()) {
            setTimeout(() => {
                this.levelUp();
                $gameParty.members()[0].recoverAll(); //レベルアップ後にHPとMPを全回復させる。
                actorLevel++; //リザルト表示用
                nextActorLevel++; //リザルト表示用
                displayStatusCurrentLevelTextDestroy();
                displayCurrentLevelResultText();
                displayCurrentLevelText();
                displayNextLevelText();
            }, 400); //400ミリ秒遅延後にレベルアップ
        }
        while (this.currentExp() < this.currentLevelExp()) {
            this.levelDown();
        }
        if (show && this._level > lastLevel) {
            this.displayLevelUp(this.findNewSkills(lastSkills));
        }
        this.refresh();
    };

    /* ダンジョン内のショップ処理をカスタマイズします。 */

    // const _Game_Player_update = Game_Player.prototype.update;
    // Game_Player.prototype.update = function (sceneActive) {
    //     _Game_Player_update.call(this, sceneActive);
    //     if (!shopEncount) {
    //         if (sceneActive && $gameSwitches.value(DungeonFlag)) {
    //             if (stepsNeeded === 0 && !shopIsActive) {
    //                 stepsNeeded = 12 //Math.floor(Math.random() * 101) + 50;// Random between 50 and 150
    //                 shopIsActive = true;
    //             }
    //             if (stepsNeeded != 0 && stepsNeeded == $gameParty.steps()) {
    //                 $gameSystem._disableEncounter = true;
    //                 $gameSwitches.setValue(10,true);
    //                 // ショップイベントを予約する前に戦闘が発生しているかを確認
    //                 if (!$gameParty.inBattle()) {
    //                     $gameTemp.reserveCommonEvent(18);
    //                     $gameParty.resetSteps();
    //                     stepsNeeded = 0;
    //                     shopIsActive = false;
    //                 }
    //                 $gameSwitches.setValue(10,false);
    //             }
    //         }
    //     }
    // };

    // Game_Party.prototype.resetSteps = function () {
    //     this._steps = 0;
    // };

    // Window_ShopBuy.prototype.setupGoods = function(shopGoods) {
    //     if (!shopGoods || shopGoods.length === 0) {
    //         this._shopGoods = [];
    //         return; // shopGoods が空の場合は処理を中断
    //     }
    //     this._shopGoods = shopGoods;
    //     this.refresh();
    //     this.select(0);
    // };

    function detectDigitCount(value, x, minus) {
        // 値を文字列に変換
        const stringValue = value.toString();

        // 桁数を取得
        const digitCount = stringValue.length;

        switch (digitCount) {
            case 2:
                if (!minus) {
                    return x + 10;
                } else {
                    return x - 10;
                }
                break;
            case 3:
                if (!minus) {
                    return x + 20;
                } else {
                    return x - 20;
                }
                break;
            case 4:
                if (!minus) {
                    return x + 30;
                } else {
                    return x - 30;
                }
                break;
            case 5:
                if (!minus) {
                    return x + 40;
                } else {
                    return x - 40;
                }
                break;
            default:
                return x;
        }
    }

/* ウィンドウサイズ変更---------------------------------------------------------------------------- */

/*メニュー画面--------------------------------------------------------------------*/

    //ステータスをパーティーの先頭のみ表示
    Window_MenuStatus.prototype.drawItem = function(index) {
        if (index === 0) {
            this.drawPendingItemBackground(index);
            this.drawItemImage(index);
            this.drawItemStatus(index);
        }
    };
    //ステータスの枠をパーティーの先頭のみ表示
    Window_MenuStatus.prototype.drawItemBackground = function(index) {
        if (index === 0) { // 最初のアクターのみ背景を描画
            const rect = this.itemRect(index);
            this.drawBackgroundRect(rect);
        }
        // 他のアクターの枠は描画しない
    };

    const _Scene_Menu_create = Scene_Menu.prototype.create;
    Scene_Menu.prototype.create = function() {
        _Scene_Menu_create.call(this);
        
        // Window_MenuCommandの位置とサイズを設定
        this._commandWindow.x = 1360;
        this._commandWindow.y = 165;
        this._commandWindow.width = 240;
        this._commandWindow.height = 720;
        
        // Window_Goldの位置とサイズを設定
        this._goldWindow.x = 1360;
        this._goldWindow.y = 883;
        this._goldWindow.width = 240;
        this._goldWindow.height = 72;
        
        // Window_MenuStatusの位置とサイズを設定
        this._statusWindow.x = 310;
        this._statusWindow.y = 165;
        this._statusWindow.width = 1050;
        this._statusWindow.height = 790;
    };
/*ここまで--------------------------------------------------------------------*/

/*セーブ画面--------------------------------------------------------------------*/

    // 元のWindow_SavefileListクラスを保存
    const _Window_SavefileList_initialize = Window_SavefileList.prototype.initialize;
    Window_SavefileList.prototype.initialize = function(rect) {
        // 新しいx座標、y座標、幅、高さを設定
        const newX = 310;    // 変更したいx座標
        const newY = 222;     // 変更したいy座標
        const newWidth = 1293; // 変更したい幅
        const newHeight = 740; // 残りの高さ

        const newRect = new Rectangle(newX, newY, newWidth, newHeight);
        
        // 元のinitializeメソッドを呼び出す
        _Window_SavefileList_initialize.call(this, newRect);
    };

    const _Scene_Save_create = Scene_Save.prototype.create;
    Scene_Save.prototype.create = function() {
        _Scene_Save_create.call(this);
        
        this._helpWindow.x = 310; // 画面の左端
        this._helpWindow.y = 165; // 画面の上端
        this._helpWindow.width = 1293; // 画面の幅全体
        this._helpWindow.height = 60; // 高さは72ピクセル
    };

    const _Scene_Load_create = Scene_Load.prototype.create;
    Scene_Load.prototype.create = function() {
        _Scene_Load_create.call(this);

        this._helpWindow.x = 310; // 画面の左端
        this._helpWindow.y = 165; // 画面の上端
        this._helpWindow.width = 1293; // 画面の幅全体
        this._helpWindow.height = 60; // 高さは72ピクセル
    };
/*ここまで--------------------------------------------------------------------*/

/*スキル画面--------------------------------------------------------------------*/

    const _Scene_Skill_create = Scene_Skill.prototype.create;
    Scene_Skill.prototype.create = function() {
        _Scene_Skill_create.call(this);
        this._helpWindow.x = 310; // 画面の左端
        this._helpWindow.y = 860; // 画面の上端
        this._helpWindow.width = 1293; // 画面の幅全体
        this._helpWindow.height = 95; // 高さは72ピクセル

        this._skillTypeWindow.x = 1363; // 画面の左端
        this._skillTypeWindow.y = 165; // Helpウィンドウの下
        this._skillTypeWindow.width = 240; // 幅は240ピクセル
        this._skillTypeWindow.height = 158; // 残りの高さ

        this._statusWindow.x = 310; // スキルタイプウィンドウの右側
        this._statusWindow.y = 165; // Helpウィンドウの下
        this._statusWindow.width = 1053; // 画面の幅からスキルタイプウィンドウの幅を引いた幅
        this._statusWindow.height = 158; // 高さは144ピクセル

        this._itemWindow.x = 310; // スキルタイプウィンドウの右側
        this._itemWindow.y = 323; // ステータスウィンドウの下
        this._itemWindow.width = 1293; // 画面の幅からスキルタイプウィンドウの幅を引いた幅
        this._itemWindow.height = 540; // 残りの高さ
    };

    // Scene_SkillのcreatePageButtonsメソッドをオーバーライドして無効化
    const _Scene_Skill_createPageButtons = Scene_Skill.prototype.createPageButtons;
    Scene_Skill.prototype.createPageButtons = function() {
        // 何もしないことでボタンの生成を無効化
    };

/*ここまで--------------------------------------------------------------------*/

/*アイテム--------------------------------------------------------------------*/
    const _Scene_Item_create = Scene_Item.prototype.create;
    Scene_Item.prototype.create = function() {
        _Scene_Item_create.call(this);

        // helpWindowの位置とサイズを設定
        this._helpWindow.x = 310; // 画面の左端
        this._helpWindow.y = 900; // 画面の上端
        this._helpWindow.width = 1293; // 画面の幅全体
        this._helpWindow.height = 100; // 高さは72ピクセル

        // categoryWindowの位置とサイズを設定
        // this._categoryWindow.x = 310; // 画面の左端
        // this._categoryWindow.y = 165; // helpWindowの下
        // this._categoryWindow.width = 1293; // 画面の幅全体
        // this._categoryWindow.height = 60; // 高さは72ピクセル

        // itemWindowの位置とサイズを設定
        this._itemWindow.x = 310; // 画面の左端
        this._itemWindow.y = 235 // categoryWindowの下
        this._itemWindow.width = 1293; // 画面の幅全体
        this._itemWindow.height = 666 // 残りの高さ

    };

    // Scene_Item.prototype.createCategoryWindowをオーバーライドする
    Scene_Item.prototype.createCategoryWindow = function() {
        const rect = this.categoryWindowRect();
        this._categoryWindow = new Window_ItemCategory(rect);
        this._categoryWindow.setHandler("ok", this.onCategoryOk.bind(this));
        this._categoryWindow.setHandler("cancel", this.onCategoryCancel.bind(this));
        this._categoryWindow.setHelpWindow(this._helpWindow);
        this.addWindow(this._categoryWindow);
    };

    // ウィンドウのサイズと位置を調整するためのcategoryWindowRectメソッドを定義する
    Scene_Item.prototype.categoryWindowRect = function() {
        // x, y, width, heightの値を設定します。必要に応じて調整してください。
        const x = 310; // ウィンドウのx座標
        const y = 165; // ウィンドウのy座標
        const width = 1293; // ウィンドウの幅
        const height = 72; // ウィンドウの高さ
        return new Rectangle(x, y, width, height);
    };    
    // onCategoryOkメソッドの定義を追加
    Scene_Item.prototype.onCategoryOk = function() {
        this._itemWindow.activate();
        this._itemWindow.selectLast();
    };

    // onCategoryCancelメソッドの定義を追加
    Scene_Item.prototype.onCategoryCancel = function() {
        this.popScene();
    };

/*ショップ--------------------------------------------------------------------*/
    Scene_Shop.prototype.createCommandWindow = function() {
        const rect = this.commandWindowRect();
        this._commandWindow = new Window_ShopCommand(rect);
        this._commandWindow.setPurchaseOnly(this._purchaseOnly);
        this._commandWindow.y = this.mainAreaTop();
        this._commandWindow.setHandler("buy", this.commandBuy.bind(this));
        this._commandWindow.setHandler("sell", this.commandSell.bind(this));
        this._commandWindow.setHandler("cancel", this.popScene.bind(this));
        this.addWindow(this._commandWindow);
    };

    Scene_Shop.prototype.commandBuy = function() {
        this._dummyWindow.hide();
        this.activateBuyWindow();
    };
    
    Scene_Shop.prototype.commandSell = function() {
        this._dummyWindow.hide();
        this._sellWindow.show();
        this._sellWindow.deselect();
        this._sellWindow.refresh();
        if (this._categoryWindow.needsSelection()) {
            this._categoryWindow.show();
            this._categoryWindow.activate();
        } else {
            this.onCategoryOk();
        }
    };

    // onCategoryCancelメソッドの定義を追加
    Scene_Shop.prototype.onCategoryCancel = function() {
        this.popScene();
    };

    // Scene_Shop.prototype.createCategoryWindow = function() {
    //     const rect = this.categoryWindowRect();
    //     this._categoryWindow = new Window_ItemCategory(rect);
    //     this._categoryWindow.setHandler("ok", this.onCategoryOk.bind(this));
    //     this._categoryWindow.setHandler("cancel", this.onCategoryCancel.bind(this));
    //     this._categoryWindow.setHelpWindow(this._helpWindow);
    //     this.addWindow(this._categoryWindow);
    // };
    // // ウィンドウのサイズと位置を調整するためのcategoryWindowRectメソッドを定義する
    Scene_Shop.prototype.commandWindowRect = function() {
        // x, y, width, heightの値を設定します。必要に応じて調整してください。
        const x = 0; // ウィンドウのx座標
        const y = 65; // ウィンドウのy座標
        const width = 716; // ウィンドウの幅
        const height = 72; // ウィンドウの高さ
        return new Rectangle(x, y, width, height);
    };    

    // Scene_Shop.prototype.onCategoryOk = function() {
    //     this.activateSellWindow();
    //     this._sellWindow.select(0);
    // };
    
    // Scene_Shop.prototype.onCategoryCancel = function() {
    //     this._commandWindow.activate();
    //     this._dummyWindow.show();
    //     this._categoryWindow.hide();
    //     this._sellWindow.hide();
    // };

    const _Scene_Shop_create = Scene_Shop.prototype.create;
    Scene_Shop.prototype.create = function() {
        _Scene_Shop_create.call(this);

        // // helpWindowの位置とサイズを設定
        //this._helpWindow.x = 310; // 画面の左端
        //this._helpWindow.y = 975; // 画面の上端
        this._helpWindow.width = 956; // 画面の幅全体
        //this._helpWindow.height = 98; // 高さは72ピクセル

        // // goldWindowの位置とサイズを設定
        this._goldWindow.x = 716; // 画面の右端
        //this._goldWindow.y = 165; // 画面の上端
        //this._goldWindow.width = 240; // 幅は240ピクセル
        this._goldWindow.height = 72; // 高さは72ピクセル

        // // commandWindowの位置とサイズを設定
        //this._commandWindow.x = 310; // 画面の左端
        //this._commandWindow.y = 165; // helpWindowの下
        this._commandWindow.width = 716; // 幅は240ピクセル
        this._commandWindow.height = 72; // 残りの高さ

        // // dummyWindowの位置とサイズを設定
        // this._dummyWindow.x = 310; // commandWindowの右側
        // this._dummyWindow.y = 300; // helpWindowの下
        // this._dummyWindow.width = 100; // 残りの幅
        // this._dummyWindow.height = 40; // 残りの高さ

        // // numberWindowの位置とサイズを設定
        // this._numberWindow.x = 310; // 画面中央
        // this._numberWindow.y = 235; // 画面中央
        // this._numberWindow.width = 1040;
        // this._numberWindow.height = 742;//742
        // this._numberWindow.refresh();

        // // statusWindowの位置とサイズを設定
        // this._statusWindow.x = 310; // dummyWindowの位置に合わせる
        // this._statusWindow.y = 877; // dummyWindowの位置に合わせる
        // this._statusWindow.width = 1040; // dummyWindowの幅に合わせる
        // this._statusWindow.height = 100; // dummyWindowの高さに合わせる

        // // buyWindowの位置とサイズを設定
        //this._buyWindow.x = 310; // dummyWindowの位置に合わせる
        //this._buyWindow.y = 235; // dummyWindowの位置に合わせる
        //this._buyWindow.width = 1040; // dummyWindowの幅に合わせる
        //this._buyWindow.height = 643; // dummyWindowの高さに合わせる

        // // // categoryWindowの位置とサイズを設定
        // this._categoryWindow.x = this._dummyWindow.x; // dummyWindowの位置に合わせる
        // this._categoryWindow.y = this._dummyWindow.y; // dummyWindowの位置に合わせる
        // this._categoryWindow.width = this._dummyWindow.width; // dummyWindowの幅に合わせる
        // this._categoryWindow.height = this._dummyWindow.height; // dummyWindowの高さに合わせる

        // // // sellWindowの位置とサイズを設定
        // this._sellWindow.x = 310; // dummyWindowの位置に合わせる
        this._sellWindow.y = 124; // dummyWindowの位置に合わせる
        // this._sellWindow.width = 1040; // dummyWindowの幅に合わせる
        this._sellWindow.height = 692; // dummyWindowの高さに合わせる
    };

    Scene_Shop.prototype.createCategoryWindow = function() {
        // 何もしないことでカテゴリウィンドウの生成を無効化
    };

    // Scene_ShopのcommandSellメソッドをオーバーライドして、自動的にアイテムウィンドウを表示
    const _Scene_Shop_commandSell = Scene_Shop.prototype.commandSell;
    Scene_Shop.prototype.commandSell = function() {
        this._dummyWindow.hide(); // ダミーウィンドウを隠す
        this._sellWindow.show();
        this._sellWindow.activate();
        this._sellWindow.select(0); // アイテムウィンドウの最初のアイテムを自動的に選択
        this._statusWindow.setItem(this._sellWindow.item());
        this._statusWindow.show();
        this._sellWindow.setHandler('cancel', this.onSellCancel.bind(this)); // キャンセル時のハンドラを設定
    };

    // Scene_ShopのonSellCancelメソッドを追加して、コマンドウィンドウに戻る処理を行う
    Scene_Shop.prototype.onSellCancel = function() {
        this._sellWindow.deselect();
        this._sellWindow.hide();
        this._statusWindow.hide();
        this._dummyWindow.show();
        this._commandWindow.activate();
    };
/*ここまで--------------------------------------------------------------------*/

/*メッセージウィンドウ--------------------------------------------------------------------*/
    const _Window_Message_updatePlacement = Window_Message.prototype.updatePlacement;
    Window_Message.prototype.updatePlacement = function() {
        _Window_Message_updatePlacement.call(this);
        if (statusCurrentLevelSprite) {
            // 既に表示されているテキストスプライトがあれば削除
            SceneManager._scene.removeChild(statusCurrentLevelSprite);
            statusCurrentLevelSprite.bitmap.destroy(); // ビットマップリソースを破棄
            statusCurrentLevelSprite = null;
        }
        if ($gameSwitches.value(13)) {
            const offsetX = 125; // x座標のオフセット値（例：300ピクセル左に移動）
            const offsetY = 20;
            this.x -= offsetX;
            this.y += offsetY;
        }
    };

    // 名前ウィンドウの位置を調整する
    const _Window_NameBox_initialize = Window_NameBox.prototype.initialize;
    Window_NameBox.prototype.initialize = function(messageWindow) {
        _Window_NameBox_initialize.call(this, messageWindow);
        
        const offsetX = 425; // x座標のオフセット値（例：300ピクセル右に移動）
        const offsetY = 15;

        this.x += offsetX;
        this.y += offsetY;
    };

    // 名前ウィンドウのサイズと位置を調整する
    const _Window_NameBox_updatePlacement = Window_NameBox.prototype.updatePlacement;
    Window_NameBox.prototype.updatePlacement = function() {
        _Window_NameBox_updatePlacement.call(this);
        
        const offsetX = 425; // x座標のオフセット値（例：300ピクセル右に移動）
        const offsetY = 15;

        this.x += offsetX;
        this.y += offsetY;
    };

    // // Window_ShopNumberの初期化メソッドと描画メソッドをオーバーライドして、正しく描画されるようにする
    // const _Window_ShopNumber_initialize = Window_ShopNumber.prototype.initialize;
    // Window_ShopNumber.prototype.initialize = function(rect) {
    //     _Window_ShopNumber_initialize.call(this, rect);
    //     this.refresh();
    // };

    // Window_ShopNumber.prototype.refresh = function() {
    //     this.contents.clear();
    //     this.drawItemName(this._item, 0, this.itemY());
    //     this.drawMultiplicationSign();
    //     this.drawNumber();
    //     this.drawTotalPrice();
    // };

    // Window_ShopNumber.prototype.itemY = function() {
    //     return Math.round(this.contentsHeight() / 2 - this.lineHeight() * 1.5);
    // };

    // Window_ShopNumber.prototype.drawMultiplicationSign = function() {
    //     const sign = '\u00d7';
    //     const width = this.textWidth(sign);
    //     const x = this.contentsWidth() / 2 - width * 2;
    //     const y = this.itemY();
    //     this.drawText(sign, x, y, width);
    // };

    // Window_ShopNumber.prototype.drawNumber = function() {
    //     const x = this.contentsWidth() / 2;
    //     const y = this.itemY();
    //     const width = this.textWidth('000') + 24; // 最大3桁の数値用に幅を調整
    //     this.drawText(this._number, x, y, width, 'right');
    // };

    // Window_ShopNumber.prototype.drawTotalPrice = function() {
    //     const total = this._price * this._number;
    //     const width = this.contentsWidth() - 20; // 余白を追加
    //     this.drawCurrencyValue(total, this._currencyUnit, 0, this.priceY(), width);
    // };

    // Window_ShopNumber.prototype.priceY = function() {
    //     return Math.round(this.contentsHeight() / 2 + this.lineHeight() / 2);
    // };

    // Window_ShopNumber.prototype.cursorX = function() {
    //     return Math.round((this.contentsWidth() - this.cursorWidth()) / 2);
    // };

    // Window_ShopNumber.prototype.cursorWidth = function() {
    //     return this.textWidth('000') + 24; // 最大3桁の数値用に幅を調整
    // };
/*ここまで--------------------------------------------------------------------*/

    //非エンカウント領域設定
    const _Game_Player_executeEncounter = Game_Player.prototype.executeEncounter;
        Game_Player.prototype.executeEncounter = function() {
            const regionId = this.regionId();
            const prohibitedRegions = [18,17]; // エンカウントさせたくないリージョンIDを配列で指定
            if (prohibitedRegions.includes(regionId)) {
                return false;
            }
            return _Game_Player_executeEncounter.call(this);
        };
    
    // エンカウント率を計算するメソッドをオーバーライド
    const _Game_Player_makeEncounterCount = Game_Player.prototype.makeEncounterCount;
    Game_Player.prototype.makeEncounterCount = function() {
        _Game_Player_makeEncounterCount.call(this);
        
        // スイッチがONの場合、エンカウント率を下げる
        if ($gameSwitches.value(15)) {
            this._encounterCount *= 2; // エンカウント歩数を倍にしてエンカウント率を下げる
        }
    };

    // スイッチの変化に応じてエンカウント歩数を再計算
    const _Game_Switches_setValue = Game_Switches.prototype.setValue;
    Game_Switches.prototype.setValue = function(switchId, value) {
        _Game_Switches_setValue.call(this, switchId, value);
        
        // スイッチがエンカウントに関連する場合、再計算
        if (switchId === 15) {
            $gamePlayer.makeEncounterCount();  // エンカウント歩数を再計算
        }
    };

    // 並列処理をリセットする関数
    function resetParallelEvents() {
        $gameMap.events().forEach(event => {
            if (event instanceof Game_Event && event.event() && event.page()) {
                const page = event.page();
                // 並列処理かどうかを判定
                if (page.trigger === 4) { // 4は並列処理を表す
                    // イベントのインタープリター（処理実行部分）をクリアする
                    if (event._interpreter) {
                        event._interpreter.clear();
                    }
                }
            }
        });
    }
    //スロット番号を入れる
    const _DataManager_saveGame = DataManager.saveGame;
    DataManager.saveGame = async function(savefileId) {
        console.log(savefileId)
        if((savefileId != 101) && (savefileId != 102)){
            $gameVariables.setValue(152,savefileId);
            ConfigManager.saveCommonVariables();
        }
        return _DataManager_saveGame.call(this, savefileId); // 元のメソッドを呼び出す
    };

    // セーブ時に並列処理をリセット
    const _DataManager_makeSaveContents = DataManager.makeSaveContents;
    DataManager.makeSaveContents = function() {
        if($gameSwitches.value(DungeonFlag)){
            resetParallelEvents(); // 並列処理をリセット
        }
        return _DataManager_makeSaveContents.call(this);
    };

    const maxSavefiles = 102;
    const maxVisibleSavefiles = 100;

    // 実際のセーブスロット数を設定
    DataManager.maxSavefiles = function() {
        return maxSavefiles;
    };

    // セーブ画面に表示するスロット数を制限
    const _Window_SavefileList_numVisibleRows = Window_SavefileList.prototype.numVisibleRows;
    Window_SavefileList.prototype.numVisibleRows = function() {
        const visibleSlots = Math.min(maxVisibleSavefiles, _Window_SavefileList_numVisibleRows.call(this));
        return visibleSlots;
    };

    Window_SavefileList.prototype.maxItems = function() {
        return maxVisibleSavefiles;
    };


    //ロードを開いた際にスロット101以外がデフォルト選択されるように
    DataManager.latestSavefileId = function() {
        if($gameVariables.value(152)==null){
            return 0;
        }
        // 101が最新の場合は次に新しいIDを返す
        return $gameVariables.value(152);;
    };

    // スロット101以外にセーブデータがあるか確認
    const hasNon101SaveData = function() {
        for (let i = 1; i <= maxSavefiles; i++) {
            if (i !== 101 && StorageManager.exists("file"+i)) {
                return true; // スロット101以外にセーブデータが存在する
            }
        }
        return false; // スロット101にしかセーブデータがないか、セーブデータが存在しない
    };

    // コマンドウィンドウの初期位置を調整
    const _Window_TitleCommand_selectLast = Window_TitleCommand.prototype.selectLast;
    Window_TitleCommand.prototype.selectLast = function() {
        // スロット101のみにセーブデータがある場合は「ニューゲーム」を選択状態にする
        if (hasNon101SaveData())  {
            this.selectSymbol('continue');
        } else {
            this.selectSymbol('newGame');
        }
    };

    //アイテム項目を制限 武器と装備を表示しない
    Window_ItemCategory.prototype.makeCommandList = function() {
        this.addCommand(TextManager.item, 'item');
        this.addCommand(TextManager.keyItem, 'keyItem');
    };
    
    // 購入制限に関するアイテムの設定
    const restrictedItemId = 67; // 購入を制限するアイテムID
    const ownedItemIdsToCheck = [67, 68]; // 所持を確認するアイテムIDのリスト

    // 購入可能かどうかを判定する関数を上書き
    const _Window_ShopBuy_isEnabled = Window_ShopBuy.prototype.isEnabled;
    Window_ShopBuy.prototype.isEnabled = function(item) {
        // アイテムが購入制限の対象であり、所持確認用のアイテムを持っている場合、購入を制限
        if (item && item.id === restrictedItemId && ownedItemIdsToCheck.some(id => $gameParty.hasItem($dataItems[id]))) {
            return false;
        }

        // それ以外の場合は元の処理を適用
        return _Window_ShopBuy_isEnabled.call(this, item);
    };

    // 購入処理時に選択されたアイテムが無効な場合にブザー音を鳴らす
    const _Scene_Shop_onBuyOk = Scene_Shop.prototype.onBuyOk;
    Scene_Shop.prototype.onBuyOk = function() {
        const item = this._buyWindow.item();
        if (!this._buyWindow.isEnabled(item)) {
            SoundManager.playBuzzer(); // ブザー音を鳴らす
            this._buyWindow.activate(); // 購入ウィンドウを再度アクティブにする
        } else {
            _Scene_Shop_onBuyOk.call(this);
        }
    };

    // 購入数制限を適用するアイテムIDとその制限数を設定
    const purchaseLimit = {
        67: 1, // アイテムID 1 は一度に5個まで購入可能
    };

    // 購入数選択のウィンドウを開く関数をオーバーライド
    const _Scene_Shop_maxBuy = Scene_Shop.prototype.maxBuy;
    Scene_Shop.prototype.maxBuy = function() {
        const item = this._buyWindow.item();
        const maxQuantity = _Scene_Shop_maxBuy.call(this);
        
        // アイテムが制限リストにある場合、その制限数と元の最大数の小さい方を返す
        if (item && purchaseLimit[item.id]) {
            return Math.min(purchaseLimit[item.id], maxQuantity);
        }
        
        return maxQuantity;
    };

})();
