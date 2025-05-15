// モデルパスを指定（モデル名「ukyo」に修正）
const modelPath = "./model/ukyo/ukyo.model3.json";
const canvas = document.getElementById("live2dCanvas");

// Live2D SDKの読み込み
async function loadLive2DModel() {
    try {
        const { Live2DModel } = await import("https://unpkg.com/@live2d/cubism-framework@4.2.0");
        const model = await Live2DModel.from(modelPath);

        // モデル表示設定
        model.scale.set(0.5, 0.5);  // サイズ調整
        model.position.set(canvas.width / 2, canvas.height / 2);  // 中央配置

        // モデルをキャンバスに描画
        const app = new PIXI.Application({
            view: canvas,
            autoStart: true,
            transparent: true,
            resizeTo: window
        });

        app.stage.addChild(model);

        // クリックでモーションを変更（仮）
        canvas.addEventListener("click", () => {
            model.motion("TapBody");
        });

        console.log("ukyoモデルが表示されました！");
    } catch (e) {
        console.error("ukyoモデルの読み込みに失敗しました:", e);
    }
}

loadLive2DModel();
