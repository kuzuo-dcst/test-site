// モジュールとして読み込み
import * as PIXI from "https://unpkg.com/pixi.js@6.5.2/dist/browser/pixi.min.js";
import { Live2DModel } from "./node_modules/pixi-live2d-display/dist/index.es.js";

// モデルパスを指定
const modelPath = "./model/ukyo/ukyo.model3.json";
const canvas = document.getElementById("live2dCanvas");

async function loadLive2DModel() {
    try {
        // PIXI.jsアプリケーションの作成
        const app = new PIXI.Application({
            view: canvas,
            autoStart: true,
            transparent: true,
            resizeTo: window
        });

        // Live2Dモデルを読み込む
        const model = await Live2DModel.from(modelPath);
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
