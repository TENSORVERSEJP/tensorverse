const models = {
    objectDetection: 'https://649vecmu32.execute-api.ap-northeast-1.amazonaws.com/tas',
    segmentation: 'https://7plx8cens8.execute-api.ap-northeast-1.amazonaws.com/tas',
    depthEstimation: 'https://sw97avsdr8.execute-api.ap-northeast-1.amazonaws.com/tas',
    backgroundRemoval: 'https://ikpjy7mps4.execute-api.ap-northeast-1.amazonaws.com/tas',
    geminiapiOcr: 'https://lk5avrbsqc.execute-api.ap-northeast-1.amazonaws.com/tas',
};

const modelDescriptions = {
    objectDetection: "物体検出: 画像内の物体を検出し、対応するバウンディングボックスを出力します。",
    segmentation: "セグメンテーション: 画像の各ピクセルをクラスに分類し、対象領域をマスクとして出力します。",
    depthEstimation: "深度推定: 画像内の各ピクセルの深度を推定し、距離情報を取得します。",
    backgroundRemoval: "背景除去: 画像から前景と背景を分離し、背景を除去します。",
    geminiapiOcr: "OCR: 画像中の文字を読み取ります。"
};
