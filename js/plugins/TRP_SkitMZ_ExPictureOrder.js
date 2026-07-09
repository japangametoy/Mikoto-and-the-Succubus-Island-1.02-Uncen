//=============================================================================
// TRP_SkitMZ_ExPictureOrder.js
//=============================================================================
// Copyright (c) 2021 Thirop
//============================================================================= 

//=============================================================================
/*:
 * @target MZ
 * @plugindesc TRP_SkitMZ拡張「ピクチャの重ね順を維持」
 * @author Thirop
 * @help 【注意】拡張パッチについてはTRP_SkitMZの使用条件対象外です。
 * また、TRP_Skitの今後のアップデートなどへの対応も保証いたしません。
 * 商用利用：○
 * 改変：○
 * 再配布：不可
 * 
 * このプラグインを利用することによって生じる損害について、プラグイン製作者(Thirop)は
 * 一切の責任を負いません。各自の責任と判断の上でご利用下さい。
 *
 * 【使い方】
 * このプラグインをプラグイン管理にてTRP_Skit.jsより下に配置してONにしてください。
 * TRP_SkitMZ_Configにおいて使用するピクチャ番号の順番に応じた重ね順で立ち絵が表示されます。
 *
 * なお、ピクチャ(Sprite_Picture)に操作を行うプラグインとは
 * 競合の可能性がありますので留意してください。
 * 
 * 【更新履歴】
 * 1.00 2021/1/14  初版
 */


(function(){
var _Spriteset_Base_createPictures = Spriteset_Base.prototype.createPictures;
Spriteset_Base.prototype.createPictures = function() {
	_Spriteset_Base_createPictures.call(this);
//if($gameSwitches.value(7)){
	var container = this._bustPictureContainer;
	var firstPicture = container.children[0];
	if(!firstPicture)return;

	this._bustPictureZOrder = -1;
	if(container.parent){
		container.parent.removeChild(container);
	}

	var firstPictureId = firstPicture._pictureId;
	var pictureContainer = this._pictureContainer;
	pictureContainer.addChildAt(container,firstPictureId-1);
//	}
};

})();