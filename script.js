// モデルパスを指定（モデル名「ukyo」に修正）
const modelPath = "./model/ukyo/ukyo.model3.json";
const canvas = document.getElementById("live2dCanvas");

async function loadLive2DModel() {
    try {
        // SDKが読み込まれているか確認
        if (typeof Live2DCubismCore === "undefined") {
            throw new Error("Live2D SDKが読み込まれていません！");
        }

        // PIXI.jsアプリケーションの作成
        const app = new PIXI.Application({
            view: canvas,
            autoStart: true,
            transparent: true,
            resizeTo: window
        });

        // Live2Dモデルを読み込む
        const model = await PIXI.live2d.Live2DModel.from(modelPath);
        model.scale.set(0.5, 0.5);  // サイズ調整
        model.position.set(app.renderer.width / 2, app.renderer.height / 2);  // 中央配置

        // モデルをキャンバスに描画
        app.stage.addChild(model);

        // クリックでモーションを変更（仮）
        canvas.addEventListener("click", () => {
            model.motion("TapBody");
        });

        console.log("ukyoモデルが表示されました！");
    } catch (e) {
        console.error("ukyoモデルの表示に失敗しました:", e);
    }
}

loadLive2DModel();
