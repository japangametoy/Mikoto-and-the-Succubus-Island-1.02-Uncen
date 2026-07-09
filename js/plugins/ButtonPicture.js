//=============================================================================
// RPG Maker MZ - Button Picture
//=============================================================================

/*:
 * @target MZ
 * @plugindesc Makes a picture clickable.
 * @author Yoji Ojima
 *
 * @help ButtonPicture.js
 *
 * This plugin provides a command to call a common event when a picture is
 * clicked.
 *
 * Use it in the following procedure.
 *   1. Execute "Show Picture" to display your button image.
 *   2. Call the plugin command "Set Button Picture".
 *
 * @command set
 * @text Set Button Picture
 * @desc Makes the specified picture clickable.
 *
 * @arg pictureId
 * @type number
 * @min 1
 * @max 100
 * @default 1
 * @text Picture Number
 * @desc Control number of the picture.
 *
 * @arg commonEventId
 * @type common_event
 * @default 1
 * @text Common Event
 * @desc Common event to call when the picture is clicked.
 */

/*:ja
 * @target MZ
 * @plugindesc ピクチャをクリック可能にします。
 * @author Yoji Ojima
 *
 * @help ButtonPicture.js
 *
 * このプラグインは、ピクチャのクリック時にコモンイベントを呼び出すコマンドを
 * 提供します。
 *
 * 次の手順で使用してください。
 *   1. 「ピクチャの表示」を実行して、ボタン画像を表示します。
 *   2. プラグインコマンド「ボタンピクチャの設定」を呼び出します。
 *
 * @command set
 * @text ボタンピクチャの設定
 * @desc 指定したピクチャをクリック可能にします。
 *
 * @arg pictureId
 * @type number
 * @min 1
 * @max 100
 * @default 1
 * @text ピクチャ番号
 * @desc ピクチャの管理番号です。
 *
 * @arg commonEventId
 * @type common_event
 * @default 1
 * @text コモンイベント
 * @desc ピクチャがクリックされた時に呼び出すコモンイベントです。
 */

(() => {
    const pluginName = "ButtonPicture";

    PluginManager.registerCommand(pluginName, "set", args => {
        const pictureId = Number(args.pictureId);
        const commonEventId = Number(args.commonEventId);
        const picture = $gameScreen.picture(pictureId);
        if (picture) {
            picture.mzkp_commonEventId = commonEventId;
        }
    });

    Sprite_Picture.prototype.isClickEnabled = function() {
        const picture = this.picture();
        return picture && picture.mzkp_commonEventId && !$gameMessage.isBusy();
    };

    Sprite_Picture.prototype.onClick = function() {
        $gameTemp.reserveCommonEvent(this.picture().mzkp_commonEventId);
    };

    Spriteset_Base.prototype.mzkp_isAnyPicturePressed = function() {
        return this._pictureContainer.children.some(sprite =>
            sprite.isPressed ? sprite.isPressed() : false
        );
    };

    const _Scene_Map_isAnyButtonPressed =
        Scene_Map.prototype.isAnyButtonPressed;
    Scene_Map.prototype.isAnyButtonPressed = function() {
        return (
            _Scene_Map_isAnyButtonPressed.apply(this, arguments) ||
            this._spriteset.mzkp_isAnyPicturePressed()
        );
    };

    // マウスオーバーによる拡大効果と補正を追加
    const _Sprite_Picture_update = Sprite_Picture.prototype.update;
    Sprite_Picture.prototype.update = function() {
        _Sprite_Picture_update.call(this);

        if($gameMap.mapId() ==60){
            // ピクチャオブジェクトが存在するか確認
            const picture = this.picture();
            if (!picture) return;

            // ピクチャ番号を取得し、20番は除外
            const pictureId = this._pictureId;
            if (pictureId === 20) {
                this.scale.set(1.0); // サイズを元に戻す
                return;  // 拡大処理をしない
            }

            // マウスオーバーしているかを確認
            if (this.isMouseOver()) {
                this.scale.set(1.1); // 10%拡大
                this.adjustPosition(); // 拡大によるずれを補正
            } else {
                this.scale.set(1.0); // 元のサイズに戻す
                this.adjustPosition(true); // 元の位置に戻す
            }
        }
    };

    // 拡大時の位置補正
    Sprite_Picture.prototype.adjustPosition = function(reset = false) {
        const scaleCorrection = reset ? 1.0 : 1.1;
        const deltaX = (this.width * (scaleCorrection - 1)) / 2;
        const deltaY = (this.height * (scaleCorrection - 1)) / 2;
        this.x -= deltaX;
        this.y -= deltaY;
    };

    // マウスオーバーを判定するメソッドを追加
    Sprite_Picture.prototype.isMouseOver = function() {
        const x = TouchInput.x;
        const y = TouchInput.y;
        return (
            x >= this.x - this.width * this.anchor.x &&
            x < this.x + this.width * (1 - this.anchor.x) &&
            y >= this.y - this.height * this.anchor.y &&
            y < this.y + this.height * (1 - this.anchor.y)
        );
    };
    
})();



