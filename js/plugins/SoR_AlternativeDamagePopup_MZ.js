//=============================================================================
// SoR_AlternativeDamagePopup_MZ.js
// SoR License (C) 2020 蒼竜, REQUIRED User Registration on Dragon Cave
// http://dragonflare.blue/dcave/license.php
// ----------------------------------------------------------------------------
// Latest version v1.10 (2021/11/05)
//=============================================================================
/*:ja
@plugindesc ＜ダメージ表示画像化＞ v1.10
@author 蒼竜
@orderBefore SoR_ADP_UpdateModifier
@target MZ
@url https://dragonflare.blue/dcave/
@help ゲーム中のダメージ描画方式を
RPGツクールMVと同様なダメージ画像を用いる方式へ変更します。
MVと同様に，Damage.pngを./img/system下に配置してください。

ダメージ表示位置の初期値等は
プラグインパラメータを用いて変更できますが、
表示位置の更新過程は別添のスクリプトを充てて変更してください。

=========================================================================
※このプラグインは、「バトラーへのダメージ表示」という
小さなゲーム内機能についてMZ標準装備を全面的に取りやめ、MV標準装備に
寄せた機能に取り換えています。

そのため、「MZ標準装備を想定した他者作のプラグイン」とは当然競合します。
通常、ダメージ表示に関して複数のプラグインを取り入れることは無いと
思われますが、どうしても必要な場合はこのプラグインで対応しますので
サポートまで申し出てください。
=========================================================================
@param --ダメージ表示基本設定--
@param Damage_Duration
@desc ダメージ表示フレーム時間 (default: 90)
@default 90
@type number

@param Initial_DamagePositionY
@desc ダメージ表示の初期位置y座標，バトラー位置基準 (default: -40)
@type number
@default -40
@min -9999

@param CriticalFlash_Duration
@desc クリティカル発生時のフラッシュ発生時間 (default: 60)
@default 60
@type number
@param CriticalFlash_Color
@desc クリティカル発生時のフラッシュカラー，RGBAの4要素配列形式 (default: [255, 0, 0, 160])
@type number[]
@default [255, 0, 0, 160]

@param DamagePosX_Multiple
@desc 連続ダメージ表示時の初期位置x座標補正，主に多段HIT時の見た目変更を想定 (default: 0)
@default 0
@type number
@min -9999
@param DamagePosY_Multiple
@desc 連続ダメージ表示時の初期位置y座標補正，正の数で表示位置が上に上がる (default: 0)
@default 0
@type number
@min -9999
@param DamagePosX_Random
@desc 連続ダメージ表示時の初期位置x座標「乱数」補正，主に多段HIT時の見た目変更を想定 (default: 0)
@default 0
@type number

@param DamageFadeOut_Frame
@desc ダメージ画像がフェードアウトし始める残り描画フレーム数 (default: 10)
@default 10
@type number

@param --ダメージ基本位置調整--
@param Actor_damageOffsetX
@desc アクターに対するダメージ表示の基準座標からのずれ(x方向) (default: -32)
@default -32
@min -9999
@type number
@param Actor_damageOffsetY
@desc アクターに対するダメージ表示の基準座標からのずれ(x方向) (default: 0)
@default 0
@min -9999
@type number

@param Enemy_damageOffsetX
@desc エネミーに対するダメージ表示の基準座標からのずれ(x方向) (default: 0)
@default 0
@min -9999
@type number
@param Enemy_damageOffsetY
@desc エネミーに対するダメージ表示の基準座標からのずれ(x方向) (default: -8)
@default -8
@min -9999
@type number

@param --同時処理判定--
@param Delay_MultipleEffects
@desc HP/MP等の同時ダメージ発生が起こるアクションに対する、後続ダメージ表示開始の遅れフレーム数
@type number
@default 0
@min 0
@param OffsetX_MultipleEffects
@type number
@desc HP/MP等の同時ダメージ発生が起こるアクションに対する、後続ダメージ表示位置のx方向ずれ
@default 0
@min -9999
@param OffsetY_MultipleEffects
@type number
@desc HP/MP等の同時ダメージ発生が起こるアクションに対する、後続ダメージ表示位置のy方向ずれ
@default 0
@min -9999

@param CriticalEffect_MPTP
@desc 'true'の時、HP以外の表示数値にもクリティカル時のエフェクトを反映します (default: false)
@default false
@type boolean
*/
/*:
@plugindesc <Enabling the Damage Graphic> v1.10
@author Soryu
@target MZ
@url https://dragonflare.blue/dcave/index_e.php
@orderBefore SoR_ADP_UpdateModifier
@help This plugin substitutes the game font text for damage sprite to image sources 
as RPG Maker MV. Locate "Damage.png" at ./img/system as previous.

Initial condition of damage sprites (such as position) is
configured in the plugin parameter. On the other hand,
we have to write js code to modify the update (behavior) of damage sprites.
(The additional plugin file is available to modify only the update process.)


=============================================================================
!!CAUTION!! This plugin abolishes default MZ implementation to replace with 
MV default-like system in terms of "Damage Popup on Battlers".

Therefore, this plugin must be conflict with other developers  implemented 
assuming on MZ default implementation. Using multiple plugins for the 
damage popup system are usually seems to be indispensable. For need that, 
this plugin helps you to include features. Ask on the support BBS for detail.
=============================================================================
@param --Base Configuraiton--
@param Damage_Duration
@desc Number of frames the damage sprites are alive (default: 90)
@default 90
@type number

@param Initial_DamagePositionY
@desc Initial position of damage sprites for y-coordinate which is relative to the battler position (default: -40)
@type number
@default -40
@min -9999

@param CriticalFlash_Duration
@desc Number of frames the damage sprite is flashed in critical attack (default: 60)
@default 60
@type number
@param CriticalFlash_Color
@desc Sprite color in critical attack，4 elements of the array (RGBA) (default: [255, 0, 0, 160])
@type number[]
@default [255, 0, 0, 160]


@param DamagePosX_Multiple
@desc Padding of the damage sprite for x-coodinate for multiple damages (default: 0)
@default 0
@type number
@min -9999
@param DamagePosY_Multiple
@desc Padding of the damage sprite for x-coodinate for multiple damages (default: 0)
@default 0
@type number
@min -9999
@param DamagePosX_Random
@desc Randomly adjust for x-coodinate for multiple damages (default: 0)
@default 0
@type number

@param DamageFadeOut_Frame
@desc Number of left frames when sprites begin to fade out (default: 10)
@default 10
@type number

@param Actor_damageOffsetX
@desc Padding for the damage relative to the actor position for x-coordinate (default: -32)
@default -32
@min -9999
@type number
@param Actor_damageOffsetY
@desc Padding for the damage relative to the actor position for y-coordinate (default: 0)
@default 0
@min -9999
@type number

@param Enemy_damageOffsetX
@desc Padding for the damage relative to the enemy position for x-coordinate (default: 0)
@default 0
@min -9999
@type number
@param Enemy_damageOffsetY
@desc Padding for the damage relative to the enemy position for y-coordinate (default: -8)
@default -8
@min -9999
@type number


@param -Concurrent Popup-
@param Delay_MultipleEffects
@desc Frames to delay following popups on multiple damage popup (concurrent HP/MP damages)
@type number
@default 0
@min 0
@param OffsetX_MultipleEffects
@type number
@desc X-coordinate shift for following popups on multiple damage popup (concurrent HP/MP damages)
@default 0
@min -9999
@param OffsetY_MultipleEffects
@type number
@desc Y-coordinate shift for following popups on multiple damage popup (concurrent HP/MP damages)
@default 0
@min -9999

@param CriticalEffect_MPTP
@desc If 'true', the critical effect is also applied to damage values besides HP (default: false)
@default false
@type boolean
*/
(function() {
	const pluginName = "SoR_AlternativeDamagePopup_MZ";
    const Param = PluginManager.parameters(pluginName);
    
    const Damage_Duration = Number(Param['Damage_Duration']) || 0;
    const CriticalFlash_Duration = Number(Param['CriticalFlash_Duration']) || 0;
    const CriticalFlash_Color = convertJsonParam(Param['CriticalFlash_Color']) || 0;
    const DamagePosX_Random = Number(Param['DamagePosX_Random']) || 0;
    const DamagePosX_Multiple = Number(Param['DamagePosX_Multiple']) || 0;
    const DamagePosY_Multiple = Number(Param['DamagePosY_Multiple']) || 0;
    const DamageFadeOut_Frame = Number(Param['DamageFadeOut_Frame']) || 0;
    const Initial_DamagePositionY = Number(Param['Initial_DamagePositionY']) || 0;
    const Actor_damageOffsetX = Number(Param['Actor_damageOffsetX']) || 0;
    const Actor_damageOffsetY = Number(Param['Actor_damageOffsetY']) || 0;
    const Enemy_damageOffsetX = Number(Param['Enemy_damageOffsetX']) || 0;
    const Enemy_damageOffsetY = Number(Param['Enemy_damageOffsetY']) || 0;
	
	//v1.10
    const Delay_MultipleEffects = Number(Param['Delay_MultipleEffects']) || 0;
    const OffsetX_MultipleEffects = Number(Param['OffsetX_MultipleEffects']) || 0;
    const OffsetY_MultipleEffects = Number(Param['OffsetY_MultipleEffects']) || 0;
	const CriticalEffect_MPTP = Boolean(Param['CriticalEffect_MPTP'] === 'true' || false);
	
	
    function convertJsonParam(param) {
        if (param == undefined) return [];
        let arr = [];
            JSON.parse(param).map(function(param) {
                arr.push(param);
            });
        return arr; 
    }


///////////////////////////////////////////////////////////////////////////
const SoR_ADP_BM_setup = BattleManager.setup;
BattleManager.setup = function(troopId, canEscape, canLose) {
    SoR_ADP_BM_setup.call(this,...arguments);
    this.preprareDamageImg();
}

BattleManager.preprareDamageImg = function() {
    this._damageBitmap = ImageManager.loadSystem('Damage');
}

Sprite_Battler.prototype.createDamageSprite = function() {
	const data = this.calcCurrentDamSpriteData();
	for(const x of data){
		const sprite = this.DamageSpriteGenerator(x);
		this.parent.addChild(sprite);
	}
}

////////////////////////////////////////////////////////////////
Sprite_Battler.prototype.calcCurrentDamSpriteData = function() {
	const data = [];
	
	const target = this._battler;
    const result = target.result();
	
	if (result.missed || result.evaded){
		if (result.missed) data.push({id: 1, val: -1, order: data.length});
		else if(result.evaded) data.push({id: 2, val: -1, order: data.length});
	}
    else{
		if (result.hpAffected){
			const tmp = {id: 4, val: result.hpDamage, order: data.length};
			if (result.critical) tmp.id += 128;
			data.push(tmp);
		}
		if (target.isAlive() && result.mpDamage !== 0){
			const tmp = {id: 8, val: result.mpDamage, order: data.length};
			if (CriticalEffect_MPTP && result.critical) tmp.id += 128;
			data.push(tmp);
		}
	}
	return data;
}

Sprite_Battler.prototype.DamageSpriteGenerator = function(data) {
    const sprite = new Sprite_Damage();
    sprite.x = this.x + this.damageOffsetX();
    sprite.y = this.y + this.damageOffsetY();
    sprite.setup(this._battler, data);

    if(this._damages.length>0){
       if(DamagePosX_Multiple!=0) sprite.x += DamagePosX_Multiple;
       if(DamagePosX_Random>0) sprite.x += (Math.random()-0.5)*DamagePosX_Random;
       if(DamagePosY_Multiple!=0) sprite.y -= this._damages.length*DamagePosY_Multiple;
    }

    this._damages.push(sprite);
    return sprite;
}

Sprite_Battler.prototype.destroyDamageSprite = function(sprite) {
    this.parent.removeChild(sprite);
    this._damages.remove(sprite);
   // sprite.destroy();
}

const SoR_ADP_SD_initialize = Sprite_Damage.prototype.initialize;
Sprite_Damage.prototype.initialize = function() {
    SoR_ADP_SD_initialize.call(this);
    this._duration = Damage_Duration;

    BattleManager._damageBitmap.addLoadListener(function() {
        this._damageBitmap = BattleManager._damageBitmap;
    }.bind(this));
}

Sprite_Damage.prototype.digitWidth = function() {
    return this._damageBitmap ? this._damageBitmap.width / 10 : 0;
}
Sprite_Damage.prototype.digitHeight = function() {
    return this._damageBitmap ? this._damageBitmap.height / 5 : 0;
}

//////////////////////////////////////////////////////////////
Sprite_Damage.prototype.setup = function(target, data) {
	this.battler = target;
	const id = data.id;
	
	if(id==1) this.createMiss();
	else if(id==2) this.createMiss();
	else if(id%128 == 4) this.createDigits(0,data.val, data.order);
	else if(id%128 == 8) this.createDigits(2,data.val, data.order)
	if(id/128.0 > 1) this.setupCriticalEffect();

}


Sprite_Damage.prototype.setupCriticalEffect = function() {
    this._flashColor = CriticalFlash_Color;
    this._flashDuration = CriticalFlash_Duration;
}

Sprite_Damage.prototype.createMiss = function() {
    const w = this.digitWidth();
    const h = this.digitHeight();
    const sprite = this.createChildSprite(w, h);
    sprite.setFrame(0, 4 * h, 4 * w, h);
	sprite.rx = 0;
	sprite.ry = 0;
    sprite.dy = 0;
}

Sprite_Damage.prototype.createDigits = function(baseRow, value, order) { // 3rd arg --> added
    const string = Math.abs(value).toString();
    const row = baseRow + (value < 0 ? 1 : 0);
    const w = this.digitWidth();
    const h = this.digitHeight();

    for (let i = 0; i < string.length; i++) {
        const sprite = this.createChildSprite(w, h);
        const n = Number(string[i]);
        sprite.setFrame(n * w, row * h, w, h);
        sprite.x = (i -(string.length -1) / 2) * w * parseInt(this.scale.x) + order*OffsetX_MultipleEffects;
        sprite.y = Initial_DamagePositionY + order*OffsetY_MultipleEffects;
        sprite.rx = sprite.x;
        sprite.ry = sprite.y;
        sprite.dy = 0;
		sprite.delay = order*Delay_MultipleEffects;
		if(sprite.delay>0) sprite.opacity = 0;
    }
}

Sprite_Damage.prototype.createChildSprite = function(width, height) {
    const sprite = new Sprite();
    sprite.bitmap = this._damageBitmap;
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 1;
	
    this.addChild(sprite);
    return sprite;
}

Sprite_Damage.prototype.update = function() {
    Sprite.prototype.update.call(this);
    if (this._duration > 0) {
		let suspend = false;
        this._duration--;
        const nchild = this.children.length;
        for (let i = 0; i < nchild; i++){
			if(this.children[i].delay>0){
				this.children[i].delay--;
				if(this.children[i].delay == 0) this.children[i].opacity = 255;
				suspend = true;
				continue;
			}
			else this.updateChild(this.children[i],i,nchild);
		}
		if(suspend===true) this._duration++;
    }
    this.updateFlash();
    this.updateOpacity();
}

Sprite_Damage.prototype.updateChild = function(sprite,i,len) {
    this.calcDamageSpritePosition(...arguments);
    sprite.x = Math.round(sprite.rx);
    sprite.y = Math.round(sprite.ry);
    sprite.setBlendColor(this._flashColor);
}

Sprite_Damage.prototype.calcDamageSpritePosition = function(sprite,i,len) {
    sprite.dy += 0.5;
    sprite.ry += sprite.dy;
    if (sprite.ry >= 0) {
        sprite.ry = 0;
        sprite.dy *= -0.6;
    }
}

Sprite_Damage.prototype.updateOpacity = function() {
    if (this._duration < DamageFadeOut_Frame) {
        this.opacity = 255 * this._duration / DamageFadeOut_Frame;
    }
}

///////////////////////////////////////////////////////////////////

Sprite_Actor.prototype.damageOffsetX = function() {
    return Sprite_Battler.prototype.damageOffsetX.call(this) + Actor_damageOffsetX;
}
Sprite_Actor.prototype.damageOffsetY = function() {
    return Sprite_Battler.prototype.damageOffsetY.call(this) + Actor_damageOffsetY;
}
Sprite_Enemy.prototype.damageOffsetX = function() {
    return Sprite_Battler.prototype.damageOffsetX.call(this) + Enemy_damageOffsetX;
}
Sprite_Enemy.prototype.damageOffsetY = function() {
    return Sprite_Battler.prototype.damageOffsetY.call(this) + Enemy_damageOffsetY;
}

})();